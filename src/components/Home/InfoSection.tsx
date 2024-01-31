import { GoldCheckIcon } from "@/assets/icons/GoldCheckIcon";
import { getStaticURL } from "@/utils/constants";

/* eslint-disable @next/next/no-img-element */
export const InfoSection = () => {
  return (
    <>
      <div className="flex  ">
        <div className="relative bg-[#111319] w-full min-h-[1024px]">
          <div className="w-[1080px] max-w-full mx-auto grid grid-cols-12  h-full text-[#fff] items-start px-5 py-20">
            <div className="col-span-12 lg:col-span-6 w-full h-full flex  order-2 lg:order-1">
              <div className=" w-full lg:pr-10 flex items-center" >
                <div className="w-full flex items-center justify-center gap-7 ">
                  <div className="flex w-full flex-col flex-1 gap-7 mt-10">
                    <div className="w-full aspect-[1/1] bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-center items-center">
                      <h6 className="text-[#fff] text-[48px] font-bold">235</h6>
                      <span>Setisfied Clients</span>
                    </div>
                    <div className="w-full aspect-[1/1] bg-gradient-to-b from-black via-transparent to-transparent flex flex-col justify-center items-center">
                      <h6 className="text-[#fff] text-[48px] font-bold">39</h6>
                      <span>Team Members</span>
                    </div>
                  </div>
                  <div className="flex  w-full  flex-col flex-1 gap-7 mb-10">
                    <div className="w-full aspect-[1/1] bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-center items-center">
                      <h6 className="text-[#fff] text-[48px] font-bold">15</h6>
                      <span>Awards Winning</span>
                    </div>
                    <div className="w-full aspect-[1/1] bg-gradient-to-b from-black via-transparent to-transparent flex flex-col justify-center items-center">
                      <h6 className="text-[#fff] text-[48px] font-bold">354</h6>
                      <span>Successful Projects</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 h-full flex order-1 lg:order-2 ">
              <div
                className=" h-full  flex flex-col gap-8  justify-center"
              >
                <div className="flex items-center gap-5 text-[#A9AFC3]">
                  <div className="w-[60px] h-[1px] bg-[#A9AFC3] "></div>A FEW
                  WORDS
                </div>
                <div className="flex flex-col gap-8">
                  <h1 className="font-bold text-[38px] lg:text-[56px] text-[#ffff]  leading-none font-poppins">
                    We do everything
                  </h1>
                  <div className="w-full]">
                    <span className="text-[18px]  text-[#A9AFC3]">
                      You may be interested in what we can offer you. More
                      services you can find below. We do everything at a high
                      level.
                    </span>
                  </div>
                  <div className="flex flex-col gap-[50px]">
                    <div className="flex gap-6">
                      <div className="w-[24px] h-[24px]">
                        <GoldCheckIcon />
                      </div>
                      <div className="flex flex-col gap-4">
                        <h6 className="text-[22px] text-[#ffff] font-medium leading-none">
                          Modern Technologies
                        </h6>
                        <span className="text-[18px] text-[#A9AFC3]">
                          Discussion is an important thing in the development
                          process. Thus new ideas and ingenious solutions are
                          born.{" "}
                        </span>
                      </div>
                    </div>
                    {/*  */}
                    <div className="flex gap-6 ">
                      <div className="w-[24px] h-[24px]">
                        <GoldCheckIcon />
                      </div>
                      <div className="flex flex-col gap-4">
                        <h6 className="text-[22px] text-[#ffff] font-medium leading-none">
                          Game Experience
                        </h6>
                        <span className="text-[18px] text-[#A9AFC3]">
                          Our company has been developing Game products for 5
                          years. We’ve got a lot of awards for our work.
                        </span>
                      </div>
                    </div>
                    {/*  */}
                    <div className="flex gap-6">
                      <div className="w-[24px] h-[24px]">
                        <GoldCheckIcon />
                      </div>
                      <div className="flex flex-col gap-4">
                        <h6 className="text-[22px] text-[#ffff] font-medium leading-none">
                          Design UX/UI Art Game, App Tech
                        </h6>
                        <span className="text-[18px] text-[#A9AFC3]">
                          With us you can creat everything
                        </span>
                      </div>
                    </div>
                    {/*  */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
