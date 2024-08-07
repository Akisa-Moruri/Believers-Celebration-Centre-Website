import React from 'react';

function Donate() {
  return (
    <div>
      <section 
        className="bg-center bg-no-repeat bg-cover w-full h-[100vh] bg-[url('https://www.bobbitt.com/wp-content/uploads/2024/02/Mastering-the-Planning-Phase-of-your-church.jpg')] bg-blend-multiply"
      >
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-96">
          
        </div>
      </section>

      <div
        className="px-7 lg:px-10 max-w-6xl mx-auto flex flex-col gap-y-10 lg:flex-row items-center gap-x-10 justify-center py-10 lg:py-14 dark:bg-gray-800"
      >
        <div className="lg:w-[650px] lg:px-5 flex flex-col gap-y-5">
          <h1 className="text-2xl md:text-3xl pl-2 my-2 border-l-4 font-sans font-bold border-teal-400 dark:text-gray-200">
            GIVE
          </h1>
          <h1
            className="text-4xl md:text-5xl xl:text-[30px] leading-[1.2] md:max-w-xl md:mx-auto md:text-center lg:text-left lg:mx-0 lg:max-w-full font-semibold dark:text-white"
          >
            "Go up to the mountains and bring wood and build the temple, that I may take pleasure in it and be glorified," says the LORD.
          </h1>
          <p className="text-sm md:max-w-xl md:mx-auto lg:mx-0 lg:max-w-full md:text-center lg:text-left dark:text-gray-300">
            Haggai 1:8 NKJV
          </p>
        </div>
        <div className="hero-image md:px-5 lg:px-0 w-full lg:w-1/2 rounded-3xl md:pt-2 lg:pt-0 relative isolate z-10">
          <img
            className="rounded-3xl w-full"
            src="https://z-p3-scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/453741719_928886132584183_956609668403227145_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=2zNStmD8Z7kQ7kNvgFwdA0n&_nc_ht=z-p3-scontent-mba1-1.xx&oh=00_AYDTcf-K9XzH51Nje3_Y4u6F2aPl2ESJqIkAggECCU16cQ&oe=66B8F5B5"
            alt="Church construction plan"
          />
        </div>
      </div>
    </div>
  );
}

export default Donate;
