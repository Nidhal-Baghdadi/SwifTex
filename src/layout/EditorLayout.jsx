import { Editor, useMonaco } from '@monaco-editor/react';
import { useEffect } from 'react';

const EditorLayout = ({ onData, latex }) => {
  const handleChange = (value) => {
    onData(value);
  };

  const monaco = useMonaco();

  useEffect(() => {
    if (monaco) {
      monaco.languages.register({ id: 'latex' });

      monaco.languages.setMonarchTokensProvider('latex', {
        tokenizer: {
          root: [
            [/(\\[a-zA-Z]+)/, 'keyword'],
            [/\$[^$]*\$/, 'string'],
            [/\\$$(.*?)\\$$/, 'string'],
            [/[%].*$/, 'comment'],
          ],
        },
      });

      monaco.languages.setLanguageConfiguration('latex', {
        comments: { lineComment: '%' },
        brackets: [['{', '}']],
        autoClosingPairs: [
          { open: '{', close: '}' },
          { open: '[', close: ']' },
          { open: '(', close: ')' },
        ],
      });
    }
  }, [monaco]);

  return (
    <div className='dark:bg-boxdark-2 dark:text-bodydark border-yellow mx-1 flex h-full rounded-lg border-2 border-solid p-1'>
      <div className='h-full w-full'>
        <Editor
          defaultLanguage='latex'
          defaultValue={latex}
          value={latex}
          onChange={handleChange}
          theme='vs-dark'
          options={{
            minimap: { enabled: false },
            automaticLayout: true,
          }}
        />
      </div>
    </div>
  );
};

export default EditorLayout;
