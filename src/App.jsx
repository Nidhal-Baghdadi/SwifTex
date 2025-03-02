import 'katex/dist/katex.min.css';

import RecommendationAccordion from '@components/RecommendationAccordion';
import samples from 'public/samples';
import { useEffect, useRef, useState } from 'react';
import { FaRegFilePdf } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

import EditorLayout from './layout/EditorLayout';
import RenderLayout from './layout/RenderLayout';

export default function App() {
  const [latex, setLatex] = useState(samples['Sample 1']);

  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    // Check that MathJax has loaded before calling typesetPromise
    if (window.MathJax?.startup?.promise) {
      window.MathJax.startup.promise.then(() => {
        window.MathJax.typesetPromise();
      });
    }
  }, [latex]);

  const downloadPDF = () => {
    alert('PDF downloaded');
  };

  const handleSampleData = (data) => {
    setLatex(data);
  };

  const handleEditorData = (data) => {
    setLatex(data);
  };

  return (
    <div className='flex h-screen justify-center bg-gradient-to-r from-cyan-500 to-blue-500 py-6'>
      <div className='flex flex-col overflow-auto hover:resize-x md:w-1/3'>
        <div className='mx-1 mb-1 flex-none'>
          <RecommendationAccordion onData={handleSampleData} />
        </div>
        <div className='flex-1'>
          <EditorLayout onData={handleEditorData} latex={latex} />
        </div>
      </div>
      <div className='grow'>
        <RenderLayout>
          <ReactMarkdown
            children={latex}
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex]}
          />
        </RenderLayout>
        <button
          onClick={downloadPDF}
          className='absolute bottom-9 right-4 mt-4 rounded-full bg-red-500 px-4 py-2 text-white'
        >
          <FaRegFilePdf size={'2rem'} />
        </button>
      </div>
    </div>
  );
}
