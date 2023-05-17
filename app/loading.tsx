const Loading = () => {
  return (
    <>
      <div className="flex w-full flex-1 flex-col items-center px-6 h-[50rem] lg:h-screen">
        <div className="w-full animate-pulse flex-row items-center justify-center rounded-xl py-6 px-2 md:px-6 h-full">
          <div className="flex flex-col h-full">
            <div className="h-full w-full flex flex-col lg:flex-row gap-6 rounded-md">
              <div className="h-[60%] lg:h-full w-full lg:w-[55%] flex flex-col gap-4 justify-between ">
                <div className="w-full h-[30%] flex gap-2">
                  <div className="rounded-md bg-gray-300 h--full w-full"></div>
                  <div className="rounded-md bg-gray-300 h-full w-full"></div>
                </div>
                <div className="w-full h-[20%] rounded-md bg-gray-300"></div>
                {/* BUTTON */}
                <button className="w-[9rem] rounded-full mx-auto bg-gray-300 h-[45px]"></button>
                {/* FOUR SUBDIVISION */}
                <div className="w-full h-[10%] flex gap-2">
                  <div className="w-[20%] rounded-md bg-gray-300 h-full flex-1"></div>
                  <div className="w-[20%] rounded-md bg-gray-300 h-full flex-1"></div>
                  <div className="w-[20%] rounded-md bg-gray-300 h-full flex-1"></div>
                  <div className="w-[20%] rounded-md bg-gray-300 h-full flex-1"></div>
                </div>
                <div className="w-full h-[20%] rounded-md bg-gray-300 "></div>
              </div>
              <div className="h-[40%] lg:h-full w-full lg:w-[45%] rounded-t-full bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
