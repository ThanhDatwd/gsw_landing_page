/* eslint-disable @next/next/no-img-element */
import { getStaticURL } from "@/utils/constants";
import { url } from "inspector";
import Link from "next/link";
import React from "react";

export const RelatedCaseSection = () => {
  return (
    <>
      <div className="flex ">
        <div className="relative h-full w-full  pt-[80px]  bg-[#111319] ">
          <div className=" h-full relative w-[1080px] max-w-full mx-auto pb-[120px] flex flex-col justify-end gap-16">
            <div className="flex items-end flex-wrap  px-5 lg:px-0">
              <div className="w-full lg:w-1/2 flex-1 flex flex-col gap-8">
                <div className="flex items-center gap-5 text-[#A9AFC3]">
                  <div className="w-[60px] h-[1px] bg-[#A9AFC3] "></div>
                  PORTFOLIO
                </div>
                <div className="flex flex-col gap-8">
                  <h1 className="font-bold md:text-[60px] 2xl:text-[56px] text-[#ffff]  leading-none font-poppins">
                    Related cases
                  </h1>
                  <div className="w-full">
                    <span className="md:text-[18px]  text-[#A9AFC3]">
                      We always try to implement our creative ideas at the
                      highest level. You can see it by looking at our portfolio.
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex justify-end">
                <Link href={"/cases"}>
                  <div className="flex items-center gap-3 py-2 border-b border-b-[#DBB070] w-fit cursor-pointer">
                    <span className="text-[#DBB070]">VIEW ALL CASES</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4">
              <Link href={"cases/game"}>
                <div
                  className="bg-[#7DC70E] aspect-[3/4] bg-cover bg-center bg-no-repeat lg:opacity-[0.5] hover:opacity-[1] duration-300 ease-in-out hover:translate-y-[-10px] pt-[50px] px-[80px]"
                  // style={{
                  //   backgroundImage: `url('${getStaticURL()}/assets/images/game_1.png')`,
                  // }}
                ></div>
              </Link>
              <Link href={"cases/game"}>
                <div
                  className="bg-[#00B838] aspect-[3/4] bg-cover bg-center bg-no-repeat lg:opacity-[0.5] hover:opacity-[1] duration-300 ease-in-out hover:translate-y-[-10px] pt-[50px] px-[80px]"
                  // style={{
                  //   backgroundImage: `url('${getStaticURL()}/assets/images/game_3.png')`,
                  // }}
                ></div>
              </Link>
              <Link href={"cases/game"}>
                <div
                  className="bg-[#7DC70E] aspect-[3/4] bg-cover bg-center bg-no-repeat lg:opacity-[0.5] hover:opacity-[1] duration-300 ease-in-out hover:translate-y-[-10px] pt-[50px] px-[80px]"
                  // style={{
                  //   backgroundImage: `url('${getStaticURL()}/assets/images/game_2.png')`,
                  // }}
                ></div>
              </Link>
              <Link href={"cases/game"}>
                <div
                  className="bg-[#00B838] aspect-[3/4] bg-cover bg-center bg-no-repeat lg:opacity-[0.5] hover:opacity-[1] duration-300 ease-in-out hover:translate-y-[-10px] pt-[50px] px-[80px]"
                  // style={{
                  //   backgroundImage: `url('${getStaticURL()}/assets/images/game_1.png')`,
                  // }}
                ></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
