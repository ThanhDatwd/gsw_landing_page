/* eslint-disable @next/next/no-img-element */
import { SendIcon } from "@/assets/icons/SendIcon";
import { getStaticURL } from "@/utils/constants";
import React from "react";

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
                  <img
                    src={`${getStaticURL()}/assets/images/app_service.png`}
                    alt=""
                  />
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
                </div>
                <div className="mt-10">
                  <h5 className="text-[32px] text-white mb-8">
                    Working Process
                  </h5>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="flex flex-col gap-6">
                      <span className="text-[#DBB070]">STEP 1</span>
                      <div className="flex flex-col gap-3">
                        <span className="text-[20px] text-white font-medium">
                          Plannig & Strategy
                        </span>
                        <span className="text-[#A9AFC3]">
                          We will help you to outperform your competitors.
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-6">
                      <span className="text-[#DBB070]">STEP 2</span>
                      <div className="flex flex-col gap-3">
                        <span className="text-[20px] text-white font-medium">
                          Design & Development
                        </span>
                        <span className="text-[#A9AFC3]">
                          Your product will look attractive to customers.
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-6">
                      <span className="text-[#DBB070]">STEP 3</span>
                      <div className="flex flex-col gap-3">
                        <span className="text-[20px] text-white font-medium">
                          Testing & Launch
                        </span>
                        <span className="text-[#A9AFC3]">
                          Your product is finished. It is time to make money.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-8 mt-12">
                  <span className="text-[#A9AFC3]">
                    Front-end development tools are focused on the UI/UX and
                    provide UI design tools, SDKs to access device features,
                    cross-platform support.
                  </span>
                  <span className="text-[#A9AFC3]">
                    Back-end tools pick up where the front-end tools leave off,
                    and provide a set of reusable services that are centrally
                    managed and controlled and provide the following abilities:
                  </span>
                  <ul>
                    <li className="flex items-center gap-2 py-2">
                      <div className="w-[5px] h-[5px] rounded-[50%] bg-[#DBB070]"></div>
                      <span className="text-[#A9AFC3]">
                        Integration with back-end systems
                      </span>
                    </li>
                    <li className="flex items-center gap-2 py-2">
                      <div className="w-[5px] h-[5px] rounded-[50%] bg-[#DBB070]"></div>
                      <span className="text-[#A9AFC3]">Data services</span>
                    </li>
                    <li className="flex items-center gap-2 py-2">
                      <div className="w-[5px] h-[5px] rounded-[50%] bg-[#DBB070]"></div>
                      <span className="text-[#A9AFC3]">
                        User authentication-authorization
                      </span>
                    </li>
                    <li className="flex items-center gap-2 py-2">
                      <div className="w-[5px] h-[5px] rounded-[50%] bg-[#DBB070]"></div>
                      <span className="text-[#A9AFC3]">
                        Reusable business logic
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-3 flex flex-col gap-12">
                <ul className="w-full p-10 flex flex-col gap-6 bg-[#111319]">
                  <li className="text-[#A9AFC3]">
                    <a href="">UI/UX and Brand</a>
                  </li>
                  <li className="text-[#A9AFC3]">
                    <a href="">Game Design</a>
                  </li>
                  <li className="text-[#fff]">
                    <a className="text-[#fff]" href="">
                      App development
                    </a>
                  </li>
                  <li className="text-[#A9AFC3]">
                    <a href="">Web development</a>
                  </li>
                  <li className="text-[#A9AFC3]">
                    <a href="">Social Media</a>
                  </li>
                  <li className="text-[#A9AFC3]">
                    <a href="">Graphic Design </a>
                  </li>
                </ul>
                <div className="w-full p-10 flex flex-col gap-6 bg-[#000]">
                  <span className="text-white text-[24px]">
                    How can we help you?
                  </span>
                  <span className="text-[#A9AFC3] text-[16px]">
                    Don’t know where to start? We’ll help you.
                  </span>
                  <div className="flex items-center gap-3 py-2 border-b border-b-[#DBB070] w-fit cursor-pointer">
                    <span className="text-[#DBB070]">CONTACT US</span>
                  </div>
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
                      <span className="text-[#A9AFC3]">FB</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-[5px] h-[5px] rounded-[50%] bg-[#DBB070]"></div>
                      <span className="text-[#A9AFC3]">LIN</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-[5px] h-[5px] rounded-[50%] bg-[#DBB070]"></div>
                      <span className="text-[#A9AFC3]">INST</span>
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
