/* eslint-disable @next/next/no-img-element */
import { getStaticURL } from "@/utils/constants";
import { url } from "inspector";
import Link from "next/link";
import React from "react";

export const RecentBlogSection = () => {
  return (
    <>
          <div className="  flex flex-col justify-end gap-16">
            <div className="flex  items-end flex-wrap">
              <div className=" flex-1 flex flex-col gap-2">
                <div className="flex flex-col gap-4">
                  <h1 className="m-0 font-bold text-[30px] text-[#ffff]  leading-none font-poppins">
                    Recent posts
                  </h1>
                  <div className="w-full">
                    <span className="text-[18px]  text-[#A9AFC3]">
                      We’ve got a lot of awards for our products and services
                      that became popular in the world.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Link href={"/blog/slug"}>
                <div
                  className=" bg-[#00B838] relative group aspect-[1/1] bg-cover bg-center bg-no-repeat  duration-300 ease-in-out "
                  // style={{
                  //   backgroundImage: `url('${getStaticURL()}/assets/images/game_1.png')`,
                  // }}
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
                    <h5 className=" line-clamp-2 m-0 text-[22px] font-medium text-white pt-6">
                      Best 20 useful tools for people who like to spend time in
                      drawing
                    </h5>
                  </div>
                </div>
              </Link>
              <Link href={"/blog/slug"}>
                <div
                  className=" bg-[#7DC70E] relative group aspect-[1/1] bg-cover bg-center bg-no-repeat  duration-300 ease-in-out "
                  // style={{
                  //   backgroundImage: `url('${getStaticURL()}/assets/images/game_2.png')`,
                  // }}
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
                    <h5 className=" line-clamp-2 m-0 text-[22px] font-medium text-white pt-6">
                      Best 20 useful tools for people who like to spend time in
                      drawing
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
          </div>
    </>
  );
};
