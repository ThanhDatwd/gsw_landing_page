/* eslint-disable @next/next/no-img-element */
import { getStaticURL } from "@/utils/constants";
import { url } from "inspector";
import Link from "next/link";
import React from "react";

export const RecentPostSection = () => {
  return (
    <>
      <div className="flex ">
        <div className="relative h-full w-full  pt-[80px]  bg-[#111319] ">
          <div className="absolute top-0 right-0 w-1/2">
            <img
              // className="w-full"
              src={`${getStaticURL()}/assets/images/group_line_recent.svg`}
              alt=""
            />
          </div>
          <div className=" h-full relative w-[1080px] max-w-full mx-auto px-5 pb-[120px] flex flex-col justify-end gap-16">
            <div className="flex items-end">
              <div className=" w-1/2 flex-1 flex flex-col gap-8">
                <div className="flex items-center gap-5 text-[#A9AFC3]">
                  <div className="w-[60px] h-[1px] bg-[#A9AFC3] "></div>
                  RECENT POSTS
                </div>
                <div className="flex flex-col gap-8">
                  <h1 className="font-bold md:text-[60px] 2xl:text-[56px] text-[#ffff]  leading-none font-poppins">
                    Latest in crope
                  </h1>
                  <div className="w-full">
                    <span className="md:text-[18px]  text-[#A9AFC3]">
                      You may be interested in our technologies. We want to
                      share more helpful infomation with you about our digital
                      life and methods.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-10">
              <Link href={"/blog/slug"}>
                <div className="grid grid-cols-12 items-center gap-6 ">
                  <div className="col-span-12 lg:col-span-4 w-full aspect-video lg:aspect-[1/1] bg-[red]"></div>
                  <div className="col-span-12 lg:col-span-8 flex flex-col">
                    <div className="flex items-center gap-5">
                      <div className="w-fit px-4 text-white bg-[#DBB070] text-[14px]">
                        Corporate
                      </div>
                      <span className="text-[14px] text-[#A9AFC3]">
                        Apr 06, 2020
                      </span>
                    </div>
                    <h5 className="text-[22px] font-medium text-white pt-6">
                      The SEC has ruled against Celsius’s proposed use of
                      Coinbase as an international distribution agent.
                    </h5>
                    <div className="flex items-center gap-3 py-2 border-b border-b-[#DBB070] w-fit cursor-pointer">
                      <span className="text-[#DBB070]">VIEW MORE</span>
                    </div>
                  </div>
                </div>
              </Link>
              {/*  */}
              <Link href={"/blog/slug"}>
                <div className="grid grid-cols-12 items-center gap-6 ">
                  <div className="col-span-12 lg:col-span-4 w-full aspect-video lg:aspect-[1/1] bg-[red]"></div>
                  <div className="col-span-12 lg:col-span-8 flex flex-col">
                    <div className="flex items-center gap-5">
                      <div className="w-fit px-4 text-white bg-[#DBB070] text-[14px]">
                        Corporate
                      </div>
                      <span className="text-[14px] text-[#A9AFC3]">
                        Apr 06, 2020
                      </span>
                    </div>
                    <h5 className="text-[22px] font-medium text-white pt-6">
                      The SEC has ruled against Celsius’s proposed use of
                      Coinbase as an international distribution agent.
                    </h5>
                    <div className="flex items-center gap-3 py-2 border-b border-b-[#DBB070] w-fit cursor-pointer">
                      <span className="text-[#DBB070]">VIEW MORE</span>
                    </div>
                  </div>
                </div>
              </Link>
              {/*  */}
              <Link href={"/blog/slug"}>
                <div className="grid grid-cols-12 items-center gap-6 ">
                  <div className="col-span-12 lg:col-span-4 w-full aspect-video lg:aspect-[1/1] bg-[red]"></div>
                  <div className="col-span-12 lg:col-span-8 flex flex-col">
                    <div className="flex items-center gap-5">
                      <div className="w-fit px-4 text-white bg-[#DBB070] text-[14px]">
                        Corporate
                      </div>
                      <span className="text-[14px] text-[#A9AFC3]">
                        Apr 06, 2020
                      </span>
                    </div>
                    <h5 className="text-[22px] font-medium text-white pt-6">
                      The SEC has ruled against Celsius’s proposed use of
                      Coinbase as an international distribution agent.
                    </h5>
                    <div className="flex items-center gap-3 py-2 border-b border-b-[#DBB070] w-fit cursor-pointer">
                      <span className="text-[#DBB070]">VIEW MORE</span>
                    </div>
                  </div>
                </div>
              </Link>
              {/*  */}
              <Link href={"/blog/slug"}>
                <div className="grid grid-cols-12 items-center gap-6 ">
                  <div className="col-span-12 lg:col-span-4 w-full aspect-video lg:aspect-[1/1] bg-[red]"></div>
                  <div className="col-span-12 lg:col-span-8 flex flex-col">
                    <div className="flex items-center gap-5">
                      <div className="w-fit px-4 text-white bg-[#DBB070] text-[14px]">
                        Corporate
                      </div>
                      <span className="text-[14px] text-[#A9AFC3]">
                        Apr 06, 2020
                      </span>
                    </div>
                    <h5 className="text-[22px] font-medium text-white pt-6">
                      The SEC has ruled against Celsius’s proposed use of
                      Coinbase as an international distribution agent.
                    </h5>
                    <div className="flex items-center gap-3 py-2 border-b border-b-[#DBB070] w-fit cursor-pointer">
                      <span className="text-[#DBB070]">VIEW MORE</span>
                    </div>
                  </div>
                </div>
              </Link>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
