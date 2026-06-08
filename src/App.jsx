import 'katex/dist/katex.min.css';
import './styles/tailwind.css';
import './styles/custom.css';

import RecommendationAccordion from '@components/RecommendationAccordion';
import html2pdf from 'html2pdf.js';
import samples from 'public/samples';
import { useEffect, useRef, useState } from 'react';
import { FaRegFilePdf } from 'react-icons/fa';
import rehypeKatex from 'rehype-katex';
import rehypeStringify from 'rehype-stringify';
import remarkMath from 'remark-math';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

import EditorLayout from './layout/EditorLayout';
import RenderLayout from './layout/RenderLayout';

const A4_PAGE_HEIGHT_PX = 1050;
const MARGIN_TOP_PX = 150;
const MARGIN_BOTTOM_PX = 200;

export default function App() {
  const [latex, setLatex] = useState(samples['Abstract Algebra - Groups']);
  const [htmlContent, setHtmlContent] = useState('');
  const [pages, setPages] = useState([]);
  const [isDownloading, setIsDownloading] = useState(false);
  const hiddenContentRef = useRef(null); // Ref for the hidden container
  const pagesContainerRef = useRef(null);
  const isDownloadingRef = useRef(false);

  useEffect(() => {
    const processMarkdown = async () => {
      const processor = unified()
        .use(remarkParse)
        .use(remarkMath)
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeKatex)
        .use(rehypeStringify, { allowDangerousHtml: true });
      try {
        const result = await processor.process(latex);
        setHtmlContent(String(result));
      } catch (error) {
        console.error('Error processing markdown:', error);
      }
    };

    processMarkdown();
  }, [latex]);

  useEffect(() => {
    if (hiddenContentRef.current && htmlContent) {
      hiddenContentRef.current.innerHTML = htmlContent;
      requestAnimationFrame(() => {
        const splitHtmlIntoPages = () => {
          const elements = Array.from(hiddenContentRef.current.children);
          const pages = [];
          let currentPageContent = [];
          let currentPageHeight = 0;

          elements.forEach((element) => {
            const elementHeight = element.offsetHeight;

            if (
              currentPageHeight + elementHeight <
              A4_PAGE_HEIGHT_PX - MARGIN_TOP_PX - MARGIN_BOTTOM_PX
            ) {
              currentPageContent.push(element.outerHTML);
              currentPageHeight += elementHeight;
            } else {
              pages.push(currentPageContent.join(''));
              currentPageContent = [element.outerHTML];
              currentPageHeight = elementHeight;
            }
          });

          if (currentPageContent.length > 0) {
            pages.push(currentPageContent.join(''));
          }

          return pages;
        };
        const newPages = splitHtmlIntoPages();
        setPages(newPages);
      });
    }
  }, [htmlContent]);

  const downloadPDF = async () => {
    const exportElement = pagesContainerRef.current;

    if (!pages.length || !exportElement || isDownloadingRef.current) {
      return;
    }

    isDownloadingRef.current = true;
    setIsDownloading(true);
    exportElement.classList.add('pdf-pages-exporting');

    const opt = {
      margin: 0,
      filename: 'document.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
        scrollX: 0,
        scrollY: 0,
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      enableLinks: true,
      pagebreak: { mode: ['css', 'legacy'], after: '.pdf-container' },
    };

    try {
      await new Promise((resolve) => requestAnimationFrame(resolve));
      await html2pdf().set(opt).from(exportElement).save();
    } finally {
      exportElement.classList.remove('pdf-pages-exporting');
      isDownloadingRef.current = false;
      setIsDownloading(false);
    }
  };

  const handleSampleData = (data) => {
    if (data) {
      setLatex(data);
    }
  };

  const handleEditorData = (data) => {
    setLatex(data);
  };

  return (
    <div className='flex h-screen justify-center bg-gradient-to-r from-blue-400 to-blue-600 py-6'>
      <div className='flex flex-col overflow-auto hover:resize-x md:w-1/3'>
        <div className='mx-1 mb-1 flex-none'>
          <RecommendationAccordion onData={handleSampleData} />
        </div>

        <div className='min-h-0 flex-1'>
          <EditorLayout onData={handleEditorData} latex={latex} />
        </div>
      </div>
      <div className='grow'>
        <RenderLayout>
          <div ref={hiddenContentRef} className='absolute left-[-9999px] top-0' />
          <div ref={pagesContainerRef} className='flex flex-col gap-4'>
            {pages.map((page, pageIndex) => (
              <div
                key={pageIndex}
                className='pdf-container'
                dangerouslySetInnerHTML={{ __html: page }}
              />
            ))}
          </div>
        </RenderLayout>
        <button
          onClick={downloadPDF}
          disabled={!pages.length || isDownloading}
          aria-label='Download PDF'
          title={isDownloading ? 'Preparing PDF...' : 'Download PDF'}
          className='btn btn-red absolute bottom-9 right-4 mt-4 rounded-full px-4 py-2 disabled:cursor-not-allowed disabled:opacity-60'
        >
          <FaRegFilePdf size={'2rem'} />
        </button>
      </div>
    </div>
  );
}
