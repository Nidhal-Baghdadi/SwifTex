const EditorLayout = ({ children }) => {
  return (
    <div className='dark:bg-boxdark-2 dark:text-bodydark border-yellow mx-1 flex h-full rounded-lg border-2 border-solid p-1'>
      <div className='h-full w-full'>{children}</div>
    </div>
  );
};

export default EditorLayout;
