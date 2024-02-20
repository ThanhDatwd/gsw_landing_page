import { DirectIcon } from "@/assets/icons/DirectIcon";
import Link from "next/link";
import React, { useState } from "react";
import LazyLoad from "react-lazyload";
import Loader from "../common/Loader";
import { getStaticURL } from "@/utils/constants";
import { Logo } from "../Logo";

export const MenuBar = ({ onClose }: { onClose: any }) => {
  const [openTrailer, setOpenTrailer] = useState(false);
  return (
    <>
      <div className="fixed z-[999] h-screen w-[100vw] overflow-auto bg-[#00000099] xs:p-0 lg:p-[50px] ">
        <div className="relative min-h-full w-full overflow-hidden bg-[#111319] pt-[60px] xs:rounded-none xs:px-[20px] xs:py-5 lg:rounded-[35px] lg:p-20">
          <div className="flex flex-col gap-14">
            <div className="flex items-center justify-between">
              <Logo/>
              <div
                className="group flex cursor-custom items-center cursor-pointer"
                onClick={onClose}
              >
                <div
                  style={{ animationDelay: "750ms" }}
                  className="animated-slide-out animate-active text-right text-[12px] text-[#fff] group-hover:text-[#DBB070] font-bold"
                >
                  CLOSE MENU
                </div>
                <div
                  style={{ animationDelay: "500ms" }}
                  className="animated-scale-out animate-active"
                >
                  <div className="ml-[10px] flex  h-[32px] w-[32px] rotate-0 items-center justify-center rounded-[50%]  bg-[#000] fill-[#fff] duration-300 ease-linear group-hover:rotate-90 group-hover:bg-[#fff] group-hover:fill-[#DBB070] ">
                    <svg viewBox="0 0 16 16" width="16" height="16">
                      <path d="m13.205 4.205-1.41-1.41-3.79 3.79-3.8-3.79-1.41 1.41 3.79 3.8-3.79 3.79 1.41 1.41 3.8-3.79 3.79 3.79 1.41-1.41-3.79-3.79 3.79-3.8Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="grid grid-cols-12 items-end">
                <ul className="xs:col-span-12 lg:col-span-8">
                  <li className="relative overflow-hidden  " onClick={onClose}>
                    <Link
                      href={"/"}
                      className="animated-show-from-b flex cursor-custom  items-start gap-3 text-[#fff] delay-100"
                    >
                      <span className="font-bold leading-tight duration-300 ease-linear hover:text-[#DBB070] xs:text-[36px] lg:text-[58px]">
                        HOME
                      </span>
                      <small className="mt-4 text-[9px] text-[#fff]">
                        01 /
                      </small>
                    </Link>
                  </li>
                  <li className="relative overflow-hidden  " onClick={onClose}>
                    <Link
                      href={"/services"}
                      style={{ animationDelay: "150ms" }}
                      className="animated-show-from-b flex cursor-custom   items-start gap-3 text-[#fff] delay-[5000ms]"
                    >
                      <span className="font-bold leading-tight duration-300 ease-linear hover:text-[#DBB070] xs:text-[36px] lg:text-[58px]">
                        SERVICES
                      </span>
                      <small className="mt-4 text-[9px] text-[#fff]">
                        02 /
                      </small>
                    </Link>
                  </li>
                  <li className="relative overflow-hidden  " onClick={onClose}>
                    <Link
                      href={"/cases"}
                      style={{ animationDelay: "250ms" }}
                      className="animated-show-from-b flex cursor-custom   items-start gap-3 text-[#fff] delay-[7000ms]"
                    >
                      <span className="font-bold leading-tight duration-300 ease-linear hover:text-[#DBB070] xs:text-[36px] lg:text-[58px]">
                        CASES
                      </span>
                      <small className="mt-4 text-[9px] text-[#fff]">
                        03 /
                      </small>
                    </Link>
                  </li>
                  <li className="relative overflow-hidden  " onClick={onClose}>
                    <Link
                      href={"/blog"}
                      style={{ animationDelay: "350ms" }}
                      className="animated-show-from-b flex cursor-custom   items-start gap-3 text-[#fff] delay-[7000ms]"
                    >
                      <span className="font-bold leading-tight duration-300 ease-linear hover:text-[#DBB070] xs:text-[36px] lg:text-[58px]">
                        BLOG
                      </span>
                      <small className="mt-4 text-[9px] text-[#fff]">
                        04 /
                      </small>
                    </Link>
                  </li>
                  <li className="relative overflow-hidden  " onClick={onClose}>
                    <Link
                      href={"/about-us"}
                      style={{ animationDelay: "450ms" }}
                      className="animated-show-from-b flex cursor-custom   items-start gap-3 text-[#fff] delay-[7000ms]"
                    >
                      <span className="font-bold leading-tight duration-300 ease-linear hover:text-[#DBB070] xs:text-[36px] lg:text-[58px]">
                        ABLUT US
                      </span>
                      <small className="mt-4 text-[9px] text-[#fff]">
                        05 /
                      </small>
                    </Link>
                  </li>
                  <li className="relative overflow-hidden  " onClick={onClose}>
                    <Link
                      href={"/contact-us"}
                      style={{ animationDelay: "550ms" }}
                      className="animated-show-from-b flex cursor-custom   items-start gap-3 text-[#fff] delay-[7000ms]"
                    >
                      <span className="font-bold leading-tight duration-300 ease-linear hover:text-[#DBB070] xs:text-[36px] lg:text-[58px]">
                        CONTACT US
                      </span>
                      <small className="mt-4 text-[9px] text-[#fff]">
                        06 /
                      </small>
                    </Link>
                  </li>
                 
                </ul>
                <ul className="mb-2 flex flex-col xs:col-span-12 lg:col-span-4">
                  <li className="overflow-hidden xs:mt-0 xs:py-[10px] lg:mt-[30px] lg:py-0 ">
                    <Link
                      href={"https://www.facebook.com/greensoftware.asia"}
                      target="_blank"
                      className="animated-show-from-b flex cursor-custom items-end justify-between text-[#fff] hover:text-[#DBB070]"
                    >
                      <span className="text-[12px] font-bold  duration-300 ease-linear">
                        VIEW ON FACEBOOK
                      </span>
                      <DirectIcon color="#DBB070" />
                    </Link>
                  </li>
                  <li className="overflow-hidden xs:mt-0 xs:py-[10px] lg:mt-[30px] lg:py-0 ">
                    <Link
                      href={"https://www.tiktok.com/@greensoftware.asia"}
                      target="_blank"
                      className="animated-show-from-b flex cursor-custom items-end justify-between text-[#fff] hover:text-[#DBB070]"
                    >
                      <span className="text-[12px] font-bold  duration-300 ease-linear">
                        VIEW ON TIKTOK
                      </span>
                      <DirectIcon color="#DBB070" />
                    </Link>
                  </li>
                  <li className="overflow-hidden xs:mt-0 xs:py-[10px] lg:mt-[30px] lg:py-0 ">
                    <Link
                    
                      href={"https://t.me/greensoftwarechat"}
                      target="_blank"
                      style={{ animationDelay: "150ms" }}
                      className="animated-show-from-b flex cursor-custom items-end justify-between text-[#fff] hover:text-[#DBB070]"
                    >
                      <span className="text-[12px] font-bold  duration-300 ease-linear">
                        JOIN OUR TELEGRAM
                      </span>
                      <DirectIcon color="#DBB070" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-[50px] flex items-center border-t-2  border-t-[#000] pt-[30px] xs:flex-col xs:justify-center lg:flex-row lg:justify-between">
                <div className="flex xs:justify-center lg:justify-start">
                  <button
                    onClick={() => {
                      setOpenTrailer(true);
                    }}
                    className={` animated-scale-out animate-active group flex items-center rounded-[26px]  p-[10px]  border border-[#DBB070] text-[#fff]`}
                  >
                    <div
                      style={{ animationDelay: "500ms" }}
                      className={`animated-slide-out animate-active flex items-center gap-[10xp] `}
                    >
                      <span
                        style={{ animationDelay: "500ms" }}
                        className={`animated-slide-out animate-active text-[12px] font-bold  `}
                      >
                        PLAY INTRODUCE
                      </span>
                    </div>
                    <div
                      className={` flex h-[32px] w-[32px] items-center justify-center rounded-[50%]  bg-[#000] fill-[#fff] duration-300 ease-linear group-hover:bg-[#fff] group-hover:fill-[#000] `}
                    >
                      <svg viewBox="0 0 16 16" width="16" height="16">
                        <path d="M3.765 2.35v11.3L12.235 8l-8.47-5.65Z"></path>
                      </svg>
                    </div>
                  </button>
                </div>
                <div className=" w-full border-b-[#000]  pb-[30px] xs:mb-[24px] xs:border-b lg:hidden"></div>
                <div className="flex items-center xs:flex-col xs:gap-0 lg:flex-row lg:gap-6">
                  <Link
                    href={"/coming-soon"}
                    className="cursor-custom py-[10px] text-[10px] font-bold text-[#fff] hover:text-[#DBB070]"
                  >
                    TERM & CONDITIONS
                  </Link>
                  <Link
                    href={"/coming-soon"}
                    className="cursor-custom py-[10px] text-[10px] font-bold text-[#fff]  hover:text-[#DBB070]"
                  >
                    PRIVACY POLICY
                  </Link>
                </div>
              </div>
              <div className="h-[60px]"></div>
            </div>
          </div>
          {/* TEXT RUNNING */}
          <div className="absolute bottom-0 left-0   flex translate-y-[50%] items-center">
            <div className="scroll-text whitespace-nowrap text-center font-bold text-[#fff] xs:text-[100px]  lg:text-[200px] ">
              
              <span className="mr-[70vw]">GREEN SOFTWARE</span>
              <span className="mr-[70vw]">GREEN SOFTWARE</span>
              <span className="mr-[70vw]">GREEN SOFTWARE</span>
              <span className="mr-[70vw]">GREEN SOFTWARE</span>
              <span className="">GREEN SOFTWARE</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
