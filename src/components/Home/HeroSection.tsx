/* eslint-disable @next/next/no-img-element */
export const HeroSection = () => {
  return (
    <>
      <div className="flex lg:min-h-[1024px]  ">
        <div className="relative w-full  ">
          <div className="absolute w-full h-full grid grid-cols-12">
            <div className="col-span-6 bg-[#090A0D]"></div>
            <div className="col-span-6 bg-[#111319]"></div>
          </div>
          <div className="absolute "></div>
          <div className="relative h-full  pt-[150px] lg:pt-0  w-[1080px] max-w-[100%] px-5 mx-auto flex items-center justify-center" >
            <div className="  grid grid-cols-12 text-[#fff] items-center ">
              <div className="col-span-12 lg:col-span-9">
                <div className="flex flex-col gap-8">
                  <div className="flex items-center gap-6"> <div className="w-[60px] h-[1px] bg-[#A9AFC3]"></div> Creative ideas</div>
                  <div className="flex flex-col gap-6">
                    <h1 className="font-bold text-[38px] lg:text-[100px] text-[#ffff]  leading-none font-poppins">
                      GAME APP TECH SOLUTION
                    </h1>
                    <div className="w-full">
                    <span className="md:text-[18px] 2xl:text-[22px] text-[#A9AFC3]">
                      At Green Software, we appreciate passion, enthusiasm,
                      creativeness and encourage every individuals to develop
                      step by step, from good to great.
                    </span>

                    </div>
                  </div>
                </div>
              </div>
              {/* translate-x-[-25px] */}
              <div className="col-span-12 lg:col-span-3 lg:translate-x-[0px] w-full h-full "> 
                <img className="w-full " src="assets/images/wolf.svg" alt="" />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};
