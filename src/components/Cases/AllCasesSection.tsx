/* eslint-disable @next/next/no-img-element */
import { getStaticURL } from "@/utils/constants";
import { url } from "inspector";
import Link from "next/link";
import React from "react";

export const AllCasesSection = () => {
  return (
    <>
      <div className="flex ">
        <div className="relative h-full w-full  pt-[80px] pb-[120px] bg-[#191c26] ">
          <div className="w-full flex items-center justify-end py-6 xs:px-5 lg:px-14">
            <div className="flex items-center gap-5 text-[#A9AFC3]">
              <div className="w-[60px] h-[1px] bg-[#A9AFC3] "></div>
              Home
              <div className="w-[60px] h-[1px] bg-[#A9AFC3] "></div>
              Cases
            </div>
          </div>
          <div className=" h-full relative w-[1080px] max-w-full mx-auto  px-5 lg:px-0  flex flex-col justify-end gap-16">
            <div className="flex  items-end flex-wrap">
              <div className=" flex-1 flex flex-col gap-2">
                <div className="flex items-center gap-5 text-[#A9AFC3]">
                  <div className="w-[60px] h-[1px] bg-[#A9AFC3] "></div>
                  PORTFOLIO
                </div>
                <div className="flex flex-col gap-4">
                  <h1 className="m-0 font-bold text-[56px] text-[#ffff]  leading-none font-poppins">
                    Our amazing cases
                  </h1>
                  <div className="w-full">
                    <span className="text-[18px]  text-[#A9AFC3]">
                      You may be interested in what we can offer you. More
                      services you can find below. We do everything at a high
                      level.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-10">
              <div className="w-fit py-3 border-b border-b-[#DBB070] text-[#DBB070] uppercase ">
                All
              </div>
              <div className="w-fit py-3 border-b border-b-[#DBB070] text-[#DBB070] uppercase">
                UI/UX and Brand
              </div>
              <div className="w-fit py-3 border-b border-b-[#DBB070] text-[#DBB070] uppercase">
                Apps
              </div>
              <div className="w-fit py-3 border-b border-b-[#DBB070] text-[#DBB070] uppercase">
                SEO & SMM
              </div>
              <div className="w-fit py-3 border-b border-b-[#DBB070] text-[#DBB070] uppercase">
                E-commerce
              </div>
              <div className="w-fit py-3 border-b border-b-[#DBB070] text-[#DBB070] uppercase">
                marketing
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <Link href={"/cases/game"}>
                <div
                  className="aspect-[3/4] bg-cover bg-center bg-no-repeat lg:opacity-[0.5] hover:opacity-[1] duration-300 ease-in-out hover:translate-y-[-10px] pt-[50px] px-[80px]"
                  style={{
                    backgroundImage: `url('${getStaticURL()}/assets/images/game_1.png')`,
                  }}
                ></div>
              </Link>
              <Link href={"/cases/game"}>
                <div
                  className="aspect-[3/4] bg-cover bg-center bg-no-repeat lg:opacity-[0.5] hover:opacity-[1] duration-300 ease-in-out hover:translate-y-[-10px] pt-[50px] px-[80px]"
                  style={{
                    backgroundImage: `url('${getStaticURL()}/assets/images/game_3.png')`,
                  }}
                ></div>
              </Link>
              <Link href={"/cases/game"}>
                <div
                  className="aspect-[3/4] bg-cover bg-center bg-no-repeat lg:opacity-[0.5] hover:opacity-[1] duration-300 ease-in-out hover:translate-y-[-10px] pt-[50px] px-[80px]"
                  style={{
                    backgroundImage: `url('${getStaticURL()}/assets/images/game_2.png')`,
                  }}
                ></div>
              </Link>
              <Link href={"/cases/game"}>
                <div
                  className="aspect-[3/4] bg-cover bg-center bg-no-repeat lg:opacity-[0.5] hover:opacity-[1] duration-300 ease-in-out hover:translate-y-[-10px] pt-[50px] px-[80px]"
                  style={{
                    backgroundImage: `url('${getStaticURL()}/assets/images/game_1.png')`,
                  }}
                ></div>
              </Link>
            </div>
            <div className="flex justify-center">
              <button className="rounded-[50px] w-fit mt-4  py-[15px] px-[35px] border border-[#DBB070] text-[#fff]">
                VIEW MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
