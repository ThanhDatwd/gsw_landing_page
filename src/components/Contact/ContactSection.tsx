/* eslint-disable @next/next/no-img-element */
import { ChatIcon } from "@/assets/icons/ChatIcon";
import { ClockIcon } from "@/assets/icons/ClockIcon";
import { GlobeIcon } from "@/assets/icons/GlobeIcon";
import { getStaticURL } from "@/utils/constants";
import { url } from "inspector";
import Link from "next/link";
import React from "react";

export const ContactSection = () => {
  return (
    <>
      <div className="flex ">
        <div className="relative h-full w-full  pt-20 pb-10 lg:pb-20  bg-[#111319] ">
          <div className="w-full flex items-center justify-end py-6 xs:px-5 lg:px-14">
            <div className="flex items-center gap-5 text-[#A9AFC3]">
              <div className="hidden lg:block w-[40px] h-[1px] bg-[#A9AFC3]"></div>
              <span>Home</span>
              <div className="hidden lg:block w-[40px] h-[1px] bg-[#A9AFC3]"></div>
              <span>Contact</span>
            </div>
          </div>
          <div className=" h-full relative w-[1080px] px-5 lg:p-0 max-w-full mx-auto pb-[120px] flex flex-col justify-end gap-16">
            <div className="w-full grid grid-cols-12 gap-8">
              <div className=" col-span-12 lg:col-span-5 flex flex-col gap-8 text-[#fff] order-2 lg:order-1 ">
                <div className=" p-6 flex items-center gap-6 bg-[#191C26]">
                  <div className="">
                    <GlobeIcon />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="font-bold">Address</span>
                    <ul>
                      <li className="text-[#A9AFC3]  font-normal py-1">
                        174 Đường số 1, Bình Trị Đông A, Bình Tân
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="p-6 flex items-center gap-6 bg-[#191C26]">
                  <div className="">
                    <ChatIcon />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="font-bold">Hit us up:</span>
                    <ul>
                      <li className="text-[#A9AFC3]  font-normal py-1">
                        0375026694
                      </li>
                      <li className="text-[#A9AFC3]  font-normal py-1">
                        admin@greensoftware.asia
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="p-6 flex items-center gap-6 bg-[#191C26]">
                  <div className="">
                    <ClockIcon />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="font-bold">Working schedule:</span>
                    <ul>
                      <li className="text-[#A9AFC3]  font-normal py-1">24/7</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-7 order-1 lg:order-2">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-6 text-[#fff]">
                    {" "}
                    <div className="w-[60px] h-[1px] bg-[#A9AFC3]"></div> CONTACT US
                  </div>
                  <div className="flex flex-col gap-2">
                    <h1 className=" flex flex-col font-bold text-[38px] lg:text-[56px] text-[#ffff] font-poppins">
                      Send a message
                    </h1>
                    <div className="w-full">
                      <span className="md:text-[18px] 2xl:text-[22px] text-[#A9AFC3] ">
                        We always try to implement our creative ideas at the
                        highest level. Tell us about your project and we will
                        make it work.
                      </span>
                    </div>
                    <form action="" className="flex flex-col gap-9 mt-8 text-[#fff]">
                      <div className="flex gap-8">
                        <input
                          className="flex-1 outline-none border-b border-b-[#3A3F50] bg-transparent pb-4"
                          type="text"
                          placeholder="Name"
                        />
                        <input
                          className="flex-1 outline-none border-b border-b-[#3A3F50] bg-transparent pb-4"
                          type="text"
                          placeholder="Email"
                        />
                      </div>
                      <div className="flex flex-col gap-8">
                        <span className="text-[#fff]">Message</span>
                        <textarea
                          className="outline-none border-b border-b-[#3A3F50] bg-transparent resize-none"
                          cols={20}
                        ></textarea>
                      </div>
                      <button className="rounded-[50px] w-fit mt-4  py-[15px] px-[35px] border border-[#DBB070] text-[#fff]">
                        Send message
                      </button>
                    </form>
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
