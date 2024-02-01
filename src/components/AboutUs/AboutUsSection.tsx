/* eslint-disable @next/next/no-img-element */
import { getStaticURL } from "@/utils/constants";
import { url } from "inspector";
import Link from "next/link";
import React from "react";

export const AboutUsSection = () => {
  return (
    <>
      <div className="flex ">
        <div className="relative h-full w-full  pt-20 pb-10 lg:pb-20  bg-[#111319] ">
          <div className=" relative z-10 w-full flex items-center justify-end py-6 xs:px-5 lg:px-14">
            <div className="flex items-center gap-5 text-[#A9AFC3]">
              <div className="hidden lg:block w-[40px] h-[1px] bg-[#A9AFC3]"></div>
              <span>Home</span>
              <div className="hidden lg:block w-[40px] h-[1px] bg-[#A9AFC3]"></div>
              <span>About Us</span>
            </div>
          </div>
          <div className="absolute  h-full bottom-0 right-0 w-1/4">
            <img
              className="h-full "
              src={`${getStaticURL()}/assets/images/group_line_service_page.svg`}
              alt=""
            />
          </div>
          <div className=" h-full relative w-[1080px] px-5 lg:p-0  max-w-full mx-auto  flex flex-col justify-end gap-16">
            <div className="w-full flex flex-col gap-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="w-full  flex-1 flex flex-col gap-2 ">
                  <div className="flex items-center gap-5 text-[#A9AFC3]">
                    <div className="w-[60px] h-[1px] bg-[#A9AFC3] "></div> ABOUT
                    US
                  </div>
                  <div className="flex flex-col gap-4">
                    <h1 className="m-0 font-bold text-[56px] text-[#ffff]  leading-none font-poppins">
                      We are creative & strong team
                    </h1>
                    <div className="w-full flex flex-col gap-5">
                      <span className="md:text-[18px]  text-[#A9AFC3]">
                        Our creative and professional agency has been developing
                        products for 5 years. We are special.
                      </span>
                      <span className="md:text-[18px]  text-[#A9AFC3]">
                        We’ve got a lot of work and develop applications that
                        became popular in the world. We try not to miss
                        important details in each area.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full flex items-end justify-center">
                  <div className="w-2/3 lg:w-1/2 aspect-[1/1] rounded-[50%] border border-[#DBB070] flex flex-col justify-center items-center gap-4 ">
                    <span className="text-[#fff] text-[28px] font-bold">9</span>
                    <span className="text-[22px] font-bold text-[#DBB070]">
                      Years experience
                    </span>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
                <div className="w-full flex items-center justify-center  order-2 lg:order-1">
                  <div className="w-2/3 lg:w-1/2 aspect-[1/1] rounded-[50%] border border-[#DBB070] flex flex-col justify-center items-center gap-4 ">
                    <span className="text-[#fff] text-[28px] font-bold">
                      354
                    </span>
                    <span className="text-[22px] font-bold text-[#DBB070]">
                      Successful projects
                    </span>
                  </div>
                </div>
                <div className="w-full  flex-1 flex flex-col gap-2 order-1 lg:order-2">
                  <div className="flex flex-col gap-4">
                    <h3 className="m-0 font-bold text-[30px] text-[#ffff]  leading-none font-poppins">
                      How our working day starts
                    </h3>
                    <div className="w-full flex flex-col gap-5">
                      <span className="md:text-[18px]  text-[#A9AFC3]">
                        Working at 9 am and chilling
                      </span>
                      <span className="md:text-[18px]  text-[#A9AFC3]">
                        Thus new ideas and ingenious solutions are born. Then we
                        get to work with renewed vigor and inspiration. We are
                        never bored.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
                <div className="w-full  flex-1 flex flex-col gap-2">
                  <div className="flex flex-col gap-4">
                    <h3 className="m-0 font-bold text-[30px] text-[#ffff]  leading-none font-poppins">
                      Individual approach
                    </h3>
                    <div className="w-full flex flex-col gap-5">
                      <span className="md:text-[18px]  text-[#A9AFC3]">
                        Every morning in our company begins with hot coffee and
                        a stand-up.
                      </span>
                      <span className="md:text-[18px]  text-[#A9AFC3]">
                        Discussion is an important thing in the development
                        process. Thus new ideas and ingenious solutions are
                        born. Then we get to work with renewed vigor and
                        inspiration. We are never bored.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full flex items-center justify-center">
                  <div className="w-2/3 lg:w-1/2 aspect-[1/1] rounded-[50%] border border-[#DBB070] flex flex-col justify-center items-center gap-4 ">
                    <span className="text-[#fff] text-[28px] font-bold">2</span>
                    <span className="text-[22px] font-bold text-[#DBB070]">
                      Game Famous
                    </span>
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
