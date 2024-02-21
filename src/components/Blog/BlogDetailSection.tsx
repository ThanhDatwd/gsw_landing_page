/* eslint-disable @next/next/no-img-element */
import { SendIcon } from "@/assets/icons/SendIcon";
import { ShareIcon } from "@/assets/icons/ShareIcon";
import { getStaticURL } from "@/utils/constants";
import Link from "next/link";
import React from "react";
import { RecentBlogSection } from "./RecentBlogSection";
import { QuoteIcon } from "@/assets/icons/QuoteIcon";
import { SearchIcon } from "@/assets/icons/SearchIcon";
import { CommentBlogSection } from "./CommentBlogSection";

export const BlogDetailSection = () => {
  return (
    <>
      <div className="flex ">
        <div className="relative h-full w-full  pt-[80px]  bg-[#191C26] ">
          <div className="w-full flex items-center justify-end py-6 xs:px-5 lg:px-14">
            <div className="flex items-center gap-5 text-[#A9AFC3]">
              <div className="hidden lg:block w-[40px] h-[1px] bg-[#A9AFC3]"></div>
              <span>Home</span>
              <div className="hidden lg:block w-[40px] h-[1px] bg-[#A9AFC3]"></div>
              <span>Blog</span>
              <div className="hidden lg:block w-[40px] h-[1px] bg-[#A9AFC3]"></div>
              <span>Blog detail</span>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/4 h-full">
            <img
              className="h-full"
              src={`${getStaticURL()}/assets/images/group_line_service_page.svg`}
              alt=""
            />
          </div>
          <div className=" h-full relative w-[1080px] max-w-full px-5 mx-auto pb-[120px] flex flex-col justify-end gap-6">
            <div className="flex-col gap-6">
              <div className="flex items-center gap-5 text-[#A9AFC3]">
                <div className="w-[60px] h-[1px] bg-[#A9AFC3] "></div> BLOG
              </div>
              <div className="flex flex-col gap-8">
                <h1 className="font-bold text-[56px] text-[#ffff]  font-poppins">
                  Where to find clients and how to develop cool products
                </h1>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 lg:col-span-9">
                <div className=" flex flex-col gap-10">
                  {/* <img
                    src={`${getStaticURL()}/assets/images/app_service.png`}
                    alt=""
                  /> */}
                  <div className="w-full aspect-video bg-[#7DC70E]"></div>
                  <div className="text-[#A9AFC3]">
                    <span>
                      Mobile app development is the act or process by which a
                      mobile app is developed for mobile devices, such as
                      personal digital assistants, enterprise digital assistants
                      or mobile phones. These applications can be pre-installed
                      on phones during manufacturing platforms, or delivered as
                      web applications using server-side or client-side
                      processing (e.g., JavaScript) to provide an
                      application-like experience within a Web browser.
                      Application software developers also must consider a long
                      array of screen sizes, hardware specifications
                    </span>
                  </div>
                  <div className="flex flex-col p-12 gap-6 bg-[#111319] text-[#A9AFC3] ">
                    <span>
                      Mobile app development is the act or process by which a
                      mobile app is developed for mobile devices, such as
                      personal digital assistants, enterprise digital assistants
                      or mobile phones.
                    </span>
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col ">
                        <h6 className="text-[#fff]">Marina Luidance</h6>
                        <span className="text-[#A9AFC3]">
                          Project Coordinator
                        </span>
                      </div>
                      <div className="scale-50">
                        <QuoteIcon />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-10 flex flex-col gap-4">
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <div className="text-white flex items-center gap-2 cursor-pointer ">
                      <ShareIcon /> SHARE
                    </div>
                    <div className="flex items-center flex-wrap gap-5">
                      <div className="px-4 py-2 text-center bg-[#111319] text-[#A9AFC3]">
                        Portfolio
                      </div>
                      <div className="px-4 py-2 text-center bg-[#111319] text-[#A9AFC3]">
                        Business
                      </div>
                      <div className="px-4 py-2 text-center bg-[#111319] text-[#A9AFC3]">
                        Creative
                      </div>
                      <div className="px-4 py-2 text-center bg-[#111319] text-[#A9AFC3]">
                        Web
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap p-8 gap-6 bg-[#111319]">
                    <div className="w-[100px] h-[100px] bg-black">
                      <img
                        className="w-[100px] h-[100px] bg-black"
                        src=""
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col gap-4">
                      <h4 className="text-[#fff]">Tony shweekenberg</h4>
                      <span className="text-[#A9AFC3]">
                        Mobile app development is the act or process by which a
                        mobile app is developed for mobile devices, such as
                        personal digital assistants, enterprise digital
                        assistants or mobile phones.{" "}
                      </span>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          <div className="w-[5px] h-[5px] rounded-[50%] bg-[#DBB070]"></div>
                          <span className="text-[#A9AFC3]">FACEBOOK</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-[5px] h-[5px] rounded-[50%] bg-[#DBB070]"></div>
                          <span className="text-[#A9AFC3]">LINKEDIN</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-[5px] h-[5px] rounded-[50%] bg-[#DBB070]"></div>
                          <span className="text-[#A9AFC3]">INSTAGRAM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-[18px] py-10 border-y border-y-[#3A3F50] mt-12">
                  <div className="flex justify-between">
                    <Link href={"/blog/slug"} className="flex flex-col gap-3">
                      <button className="w-fit py-3 pr-3 border-b border-b-[#fff] text-[#fff] uppercase ">
                        Prev post
                      </button>
                      <span className="hidden lg:block text-[#fff]">
                        Site Development for Claros
                      </span>
                    </Link>
                    <Link
                      href={"/blog/slug"}
                      className="flex flex-col gap-3 items-end"
                    >
                      <button className="w-fit py-3 pl-3 border-b border-b-[#DBB070] text-[#DBB070] uppercase  ">
                        Next post
                      </button>
                      <span className="hidden lg:block text-[#DBB070]">
                        SEO Optimization for Marvelius
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="mt-20">
                  <RecentBlogSection />
                </div>
                {/* COMMENT */}
                <div className="mt-20">
                <CommentBlogSection/>
                </div>
                {/* COMMENT */}

                <div className="flex flex-col gap-2 mt-20">
                  <div className="flex flex-col gap-2">
                    <h1 className=" flex flex-col font-bold text-[30px] text-[#ffff] font-poppins">
                      Leave a reply
                    </h1>
                    <div className="w-full">
                      <span className="md:text-[18px] 2xl:text-[22px] text-[#A9AFC3] ">
                        Leave your comment below.
                      </span>
                    </div>
                    <form
                      action=""
                      className="flex flex-col gap-9 mt-8 text-[#fff]"
                    >
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
                        <input
                          className="flex-1 outline-none border-b border-b-[#3A3F50] bg-transparent pb-4"
                          type="text"
                          placeholder="Company"
                        />
                      </div>
                      <div className="flex flex-col gap-8">
                        <span className="text-[#fff]">Your comment</span>
                        <textarea
                          className="outline-none border-b border-b-[#3A3F50] bg-transparent resize-none"
                          cols={20}
                        ></textarea>
                      </div>
                      <button className="rounded-[50px] w-fit mt-4  py-[15px] px-[35px] border border-[#DBB070] text-[#fff]">
                        Post comment
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-3 flex flex-col gap-12">
              <div className="w-full p-8 flex flex-col gap-6 bg-[#000]">
                  <div className="flex relative ">
                    <input
                      className="w-full outline-none border-b border-b-[#3A3F50] bg-transparent pb-4 text-[#fff]"
                      type="text"
                      placeholder="Search"
                    />

                    <div className="absolute  right-0 fill-[#DBB070]">
                      <SearchIcon />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <span className="text-[#fff] text-[28px] font-bold">
                    Category
                  </span>
                  <ul className="w-full  flex flex-col">
                    <li className="text-[#A9AFC3] flex items-center gap-4 border-t border-t-[#3A3F50]">
                      <div className="w-[60px] h-[60px]  bg-gradient-to-b from-black via-back-500 to-transparent"></div>
                      <a className="text-[#fff]" href="">
                        UI/UX and Brand (15)
                      </a>
                    </li>
                    <li className="text-[#A9AFC3] flex items-center gap-4 border-t border-t-[#3A3F50]">
                      <div className="w-[60px] h-[60px]  bg-gradient-to-b from-black via-back-500 to-transparent"></div>
                      <a className="text-[#fff]" href="">
                        Game Design (18)
                      </a>
                    </li>
                    <li className="text-[#A9AFC3] flex items-center gap-4 border-t border-t-[#3A3F50]">
                      <div className="w-[60px] h-[60px]  bg-gradient-to-b from-black via-back-500 to-transparent"></div>
                      <a className="text-[#fff]" href="">
                        App development (11)
                      </a>
                    </li>
                    <li className="text-[#A9AFC3] flex items-center gap-4 border-t border-t-[#3A3F50]">
                      <div className="w-[60px] h-[60px]  bg-gradient-to-b from-black via-back-500 to-transparent"></div>
                      <a className="text-[#fff]" href="">
                        Web development (5)
                      </a>
                    </li>
                    <li className="text-[#A9AFC3] flex items-center gap-4 border-t border-t-[#3A3F50]">
                      <div className="w-[60px] h-[60px]  bg-gradient-to-b from-black via-back-500 to-transparent"></div>
                      <a className="text-[#fff]" href="">
                        Social Media (21)
                      </a>
                    </li>
                    <li className="text-[#A9AFC3] flex items-center gap-4 border-t border-t-[#3A3F50]">
                      <div className="w-[60px] h-[60px]  bg-gradient-to-b from-black via-back-500 to-transparent"></div>
                      <a className="text-[#fff]" href="">
                        Graphic Design (20)
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full p-10 flex flex-col gap-6 bg-[#000]">
                  <span className="text-white text-[24px]">Newletter</span>
                  <div className="flex relative ">
                    <input
                      className="w-full outline-none border-b border-b-[#3A3F50] bg-transparent pb-4"
                      type="text"
                      placeholder="Email"
                    />

                    <div className="absolute right-0 fill-[#DBB070]">
                      <SendIcon />
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-[5px] h-[5px] rounded-[50%] bg-[#DBB070]"></div>
                      <Link
                        href={"https://www.facebook.com/greensoftware.asia"}
                        target="_blank"
                      >
                        <span className="text-[#A9AFC3]">FB</span>
                      </Link>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-[5px] h-[5px] rounded-[50%] bg-[#DBB070]"></div>
                      <Link
                        href={"https://www.tiktok.com/@greensoftware.asia"}
                        target="_blank"
                      >
                        <span className="text-[#A9AFC3]">TT</span>
                      </Link>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-[5px] h-[5px] rounded-[50%] bg-[#DBB070]"></div>
                      <Link
                        href={"https://t.me/greensoftwarechat"}
                        target="_blank"
                      >
                        <span className="text-[#A9AFC3]">TG</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <span className="text-[#fff] text-[28px] font-bold">
                    Tags
                  </span>
                  <div className="flex flex-wrap gap-3">
                    <div className="px-4 py-2 text-center bg-[#111319] text-[#A9AFC3]">
                      Portfolio
                    </div>
                    <div className="px-4 py-2 text-center bg-[#111319] text-[#A9AFC3]">
                      Business
                    </div>
                    <div className="px-4 py-2 text-center bg-[#111319] text-[#A9AFC3]">
                      Web
                    </div>
                    <div className="px-4 py-2 text-center bg-[#111319] text-[#A9AFC3]">
                      Corporate
                    </div>
                    <div className="px-4 py-2 text-center bg-[#111319] text-[#A9AFC3]">
                      Creative
                    </div>
                    <div className="px-4 py-2 text-center bg-[#111319] text-[#A9AFC3]">
                      Application
                    </div>
                    <div className="px-4 py-2 text-center bg-[#111319] text-[#A9AFC3]">
                      Development
                    </div>
                    <div className="px-4 py-2 text-center bg-[#111319] text-[#A9AFC3]">
                      Interface
                    </div>
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
