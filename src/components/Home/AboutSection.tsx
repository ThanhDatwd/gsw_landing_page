/* eslint-disable @next/next/no-img-element */
import { getStaticURL } from "@/utils/constants";
import { url } from "inspector";
import React from "react";

export const AboutSection = () => {
  return (
    <>
      <div className="flex  ">
        <div
          className=" relative w-full py-20 lg:p-0 lg:min-h-[1024px] "
        >
          <div className=" absolute w-full top-0 left-0 h-full  grid grid-cols-12 text-[#fff] items-center ">
            <div
              className="h-full col-span-12 lg:col-span-7 bg-contain bg-center bg-no-repeat brightness-50 opacity-[0.5] hover:opacity-[1] duration-300 ease-in-out"
              style={{
                backgroundImage: `url('assets/images/wolf.svg')`,
              }}
            ></div>
            {/* <div className="col-span-5 bg-[#111319]  h-full flex items-center justify-center">
              {" "}
            </div> */}
          </div>
          <div className=" relative w-[1080px] max-w-full px-5  mx-auto h-full  grid grid-cols-12 text-[#fff] items-center  ">
            <div className="col-span-6 h-1 hidden lg:flex "></div>
            <div className="col-span-12 lg:col-span-6  h-full flex items-center justify-center">
              <div className="flex flex-col gap-8 w-full">
                <div className="flex items-center gap-6 text-[#A9AFC3]">
                  {" "}
                  <div className="w-[60px] h-[1px] bg-[#A9AFC3]"></div> ABOUT US
                </div>
                <div className="flex flex-col gap-6">
                  <h1 className="font-bold md:text-[60px] 2xl:text-[64px] text-[#ffff]  leading-none font-poppins">
                    We are Experts in Our Field
                  </h1>
                  <div className=" flex flex-col gap-8">
                    <span className="text-[18px] 2xl:text-[22px] text-[#A9AFC3]">
                      Our Technology company of professionals has been
                      developing products for 5 years.
                    </span>
                    <span className="text-[18px] 2xl:text-[22px] text-[#A9AFC3]">
                      We’ve got a lot of awards for our work and develop
                      applications and game that became popular in the world
                      (Plantvsundead.com ). Discussion is an important thing in
                      the development process. Thus new ideas and ingenious
                      solutions are born. Then we get to work with renewed vigor
                      and inspiration. We are never bored.
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 py-2 border-b border-b-[#DBB070] w-fit cursor-pointer">
                  <span className="text-[#DBB070]">READ MORE</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                  >
                    <path
                      d="M9.62264 4.86463C10.1258 5.14702 10.1258 5.85298 9.62264 6.13537L1.13208 10.9006C0.628932 11.183 -2.53955e-08 10.83 0 10.2652L4.28549e-07 0.734753C4.53945e-07 0.169983 0.628931 -0.182999 1.13208 0.0993859L9.62264 4.86463Z"
                      fill="#DBB070"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
