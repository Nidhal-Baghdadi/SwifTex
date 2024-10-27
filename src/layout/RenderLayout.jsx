const RenderLayout = ({ children }) => {
  return (
    <div className='dark:bg-boxdark-2 dark:text-bodydark mx-1 flex h-full grow rounded-lg border-2 border-solid border-white'>
      <div className='flex w-full overflow-hidden'>
        <div className='relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden'>
          <main className='flex h-full w-full'>
            <div className='mx-auto flex h-full w-full text-wrap p-2'>{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default RenderLayout;
