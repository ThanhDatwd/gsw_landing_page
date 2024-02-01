/* eslint-disable @next/next/no-img-element */
import { getStaticURL } from "@/utils/constants";
import { url } from "inspector";
import Link from "next/link";
import React from "react";

export const AllBlogSection = () => {
  return (
    <>
      <div className="flex ">
        <div className="relative h-full w-full  pt-[80px] pb-[120px] bg-[#191c26] ">
          <div className="w-full flex items-center justify-end py-6 xs:px-5 lg:px-14">
            <div className="flex items-center gap-5 text-[#A9AFC3]">
              <div className="hidden lg:block w-[40px] h-[1px] bg-[#A9AFC3]"></div>
              <span>Home</span>
              <div className="hidden lg:block w-[40px] h-[1px] bg-[#A9AFC3]"></div>
              <span>Blog</span>
            </div>
          </div>
          <div className=" h-full relative w-[1080px] max-w-full mx-auto  px-5 lg:px-0  flex flex-col justify-end gap-16">
            <div className="flex  items-end flex-wrap">
              <div className=" flex-1 flex flex-col gap-2">
                <div className="flex items-center gap-5 text-[#A9AFC3]">
                  <div className="w-[60px] h-[1px] bg-[#A9AFC3] "></div>
                  BLOG
                </div>
                <div className="flex flex-col gap-4">
                  <h1 className="m-0 font-bold text-[56px] text-[#ffff]  leading-none font-poppins">
                    Articles & News At Crope
                  </h1>
                  <div className="w-full">
                    <span className="text-[18px]  text-[#A9AFC3]">
                      You may be interested in our technologies. We want to
                      share more helpful infomation with you about our digital
                      life and methods.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Link href={"/blog/slug"}>
                <div
                  className="relative group aspect-[1/1] bg-cover bg-center bg-no-repeat  duration-300 ease-in-out "
                  style={{
                    backgroundImage: `url('${getStaticURL()}/assets/images/game_1.png')`,
                  }}
                >
                  <div className="absolute w-full bottom-0 left-0 h-full group-hover:h-0 bg-[#00000099] duration-300 ease-in-out"></div>
                  <div className="w-full absolute bottom-0 left-0 p-8 flex flex-col duration-300 ease-in-out group-hover:bottom-[50px]">
                    <div className="flex items-center gap-5">
                      <div className="w-fit px-4 text-white bg-[#DBB070] text-[14px]">
                        Corporate
                      </div>
                      <span className="text-[14px] text-[#A9AFC3]">
                        Apr 06, 2020
                      </span>
                    </div>
                    <h5 className="m-0 text-[22px] font-medium text-white pt-6">
                      Best 20 useful tools for people who like to spend time in
                      drawing
                    </h5>
                  </div>
                </div>
              </Link>
              <div
                className="relative group aspect-[1/1] bg-cover bg-center bg-no-repeat  duration-300 ease-in-out "
                style={{
                  backgroundImage: `url('${getStaticURL()}/assets/images/game_2.png')`,
                }}
              >
                <div className="absolute w-full bottom-0 left-0 h-full group-hover:h-0 bg-[#00000099] duration-300 ease-in-out"></div>
                <div className="w-full absolute bottom-0 left-0 p-8 flex flex-col duration-300 ease-in-out group-hover:bottom-[50px]">
                  <div className="flex items-center gap-5">
                    <div className="w-fit px-4 text-white bg-[#DBB070] text-[14px]">
                      Corporate
                    </div>
                    <span className="text-[14px] text-[#A9AFC3]">
                      Apr 06, 2020
                    </span>
                  </div>
                  <h5 className="m-0 text-[22px] font-medium text-white pt-6">
                    Best 20 useful tools for people who like to spend time in
                    drawing
                  </h5>
                </div>
              </div>
              <div
                className="relative group aspect-[1/1] bg-cover bg-center bg-no-repeat  duration-300 ease-in-out "
                style={{
                  backgroundImage: `url('${getStaticURL()}/assets/images/game_3.png')`,
                }}
              >
                <div className="absolute w-full bottom-0 left-0 h-full group-hover:h-0 bg-[#00000099] duration-300 ease-in-out"></div>
                <div className="w-full absolute bottom-0 left-0 p-8 flex flex-col duration-300 ease-in-out group-hover:bottom-[50px]">
                  <div className="flex items-center gap-5">
                    <div className="w-fit px-4 text-white bg-[#DBB070] text-[14px]">
                      Corporate
                    </div>
                    <span className="text-[14px] text-[#A9AFC3]">
                      Apr 06, 2020
                    </span>
                  </div>
                  <h5 className="m-0 text-[22px] font-medium text-white pt-6">
                    Best 20 useful tools for people who like to spend time in
                    drawing
                  </h5>
                </div>
              </div>
              <div
                className="relative group aspect-[1/1] bg-cover bg-center bg-no-repeat  duration-300 ease-in-out "
                style={{
                  backgroundImage: `url('${getStaticURL()}/assets/images/game_1.png')`,
                }}
              >
                <div className="absolute w-full bottom-0 left-0 h-full group-hover:h-0 bg-[#00000099] duration-300 ease-in-out"></div>
                <div className="w-full absolute bottom-0 left-0 p-8 flex flex-col duration-300 ease-in-out group-hover:bottom-[50px]">
                  <div className="flex items-center gap-5">
                    <div className="w-fit px-4 text-white bg-[#DBB070] text-[14px]">
                      Corporate
                    </div>
                    <span className="text-[14px] text-[#A9AFC3]">
                      Apr 06, 2020
                    </span>
                  </div>
                  <h5 className="m-0 text-[22px] font-medium text-white pt-6">
                    Best 20 useful tools for people who like to spend time in
                    drawing
                  </h5>
                </div>
              </div>
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
