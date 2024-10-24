import RecommendationAccordion from '@components/RecommendationAccordion';
import { Editor } from '@monaco-editor/react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { useEffect, useRef, useState } from 'react';

import EditorLayout from './layout/EditorLayout';
import RenderLayout from './layout/RenderLayout';

export default function App() {
  const [latex, setLatex] = useState(`\\[
Probability\\ and\\ Expected\\ Value
\\]

In probability theory, the expected value of a random variable \\(X\\) is defined as:
\\[
E[X] = \\sum_{x} x P(X = x)
\\]
where \\( P(X = x) \\) is the probability that the random variable \\(X\\) takes the value \\(x\\).

For continuous random variables, the expected value is given by:
\\[
E[X] = \\int_{-\\infty}^{\\infty} x f(x) \\, dx
\\]
where \\( f(x) \\) is the probability density function of \\(X\\).`);

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

  const latexRef = useRef(latex);

  useEffect(() => {
    latexRef.current = latex;
  }, [latex]);

  const downloadPDF = () => {
    alert('PDF downloaded');
  };

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
          <MathJaxContext version={3} config={config}>
            <MathJax>
              <span>{latexRef.current}</span>
            </MathJax>
          </MathJaxContext>

          <button
            onClick={downloadPDF}
            className='absolute bottom-3 right-3 mt-4 rounded-full bg-red-500 px-4 py-2 text-white'
          >
            <svg
              className='h-[35px] w-[35px] text-gray-800 text-white'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              fill='none'
              viewBox='0 0 24 24'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='1.7'
                d='M5 17v-5h1.5a1.5 1.5 0 1 1 0 3H5m12 2v-5h2m-2 3h2M5 10V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1v6M5 19v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1M10 3v4a1 1 0 0 1-1 1H5m6 4v5h1.375A1.627 1.627 0 0 0 14 15.375v-1.75A1.627 1.627 0 0 0 12.375 12H11Z'
              />
            </svg>
          </button>
        </RenderLayout>
      </div>
    </div>
  );
}
