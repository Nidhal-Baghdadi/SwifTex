const RenderLayout = ({ children }) => {
  return (
    <div className='dark:bg-boxdark-2 dark:text-bodydark border-yellow mx-1 flex h-full grow rounded-lg border-2 border-solid'>
      <div className='flex w-full overflow-hidden'>
        <div className='relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden'>
          <main>
            <div className='mx-auto max-w-screen-2xl text-wrap p-4 md:p-6 2xl:p-10'>{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default RenderLayout;
