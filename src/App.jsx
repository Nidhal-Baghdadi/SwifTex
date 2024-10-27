import ReactPdfWrapper from '@components/ReactPdfWrapper';
import RecommendationAccordion from '@components/RecommendationAccordion';
import { Editor } from '@monaco-editor/react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { useEffect, useRef, useState } from 'react';

import EditorLayout from './layout/EditorLayout';
import RenderLayout from './layout/RenderLayout';

export default function App() {
  const [latex, setLatex] = useState('');
  const isFirstRun = useRef(true);
  const [mmlContent, setMmlContent] = useState('Chose a sample');
  const config = {
    loader: { load: ['[tex]/html'] },
    tex: {
      packages: { '[+]': ['html'] },
      inlineMath: [
        ['$', '$'],
        ['\\(', '\\)'],
      ],
      displayMath: [
        ['$$', '$$'],
        ['\\[', '\\]'],
      ],
    },
  };

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    // Check that MathJax has loaded before calling typesetPromise
    if (window.MathJax?.startup?.promise) {
      window.MathJax.startup.promise.then(() => {
        window.MathJax.typesetPromise().then(() => {
          const mainElement = document.getElementById('mmlContent');
          if (mainElement) {
            setMmlContent(mainElement.outerHTML);
          }
        });
      });
    }
  }, [latex]);

  const handleChange = (value, event) => {
    setLatex(value);
  };

  const handleSampleData = (data) => {
    setLatex(data);
  };

  return (
    <div className='flex h-screen justify-center bg-gradient-to-r from-cyan-500 to-blue-500 py-6'>
      <div className='flex flex-col overflow-auto hover:resize-x md:w-1/3'>
        <div className='mx-1 mb-1 flex-none'>
          <RecommendationAccordion onData={handleSampleData} />
        </div>
        <div className='flex-1'>
          <EditorLayout>
            <Editor
              height='99.9%'
              defaultLanguage='markdown'
              defaultValue={latex}
              value={latex}
              onChange={handleChange}
              theme='vs-dark'
              options={{
                minimap: { enabled: false },
                automaticLayout: true,
              }}
            />
          </EditorLayout>
        </div>
      </div>
      <div className='grow'>
        <RenderLayout>
          <span className='hidden'>
            <MathJaxContext version={3} config={config}>
              <MathJax id='mmlContent' key={latex}>
                {latex}
              </MathJax>
            </MathJaxContext>
          </span>

          <ReactPdfWrapper mmlContent={mmlContent} />
        </RenderLayout>
      </div>
    </div>
  );
}
