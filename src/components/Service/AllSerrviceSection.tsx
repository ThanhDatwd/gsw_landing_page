/* eslint-disable @next/next/no-img-element */
import { getStaticURL } from "@/utils/constants";
import { url } from "inspector";
import Link from "next/link";
import React from "react";

export const AllServiceSection = () => {
  return (
    <>
      <div className="flex ">
        <div className="relative h-full w-full  pt-[80px]  bg-[#111319] ">
          <div className="w-full flex items-center justify-end py-6 xs:px-5 lg:px-14">
            <div className="flex items-center gap-5 text-[#A9AFC3]">
              <div className="w-[60px] h-[1px] bg-[#A9AFC3] "></div>
              Home
              <div className="w-[60px] h-[1px] bg-[#A9AFC3] "></div>
              Services
            </div>
          </div>
          <div className="absolute  h-full bottom-0 right-0 w-1/4">
            <img
              className="h-full "
              src={`${getStaticURL()}/assets/images/group_line_service_page.svg`}
              alt=""
            />
          </div>
          <div className=" h-full relative w-[1080px] max-w-full mx-auto pb-[120px] flex flex-col justify-end gap-16">
            <div className="flex items-end px-5 lg:p-0">
              <div className="w-full lg:w-1/2 flex-1 flex flex-col gap-2">
                <div className="flex items-center gap-5 text-[#A9AFC3]">
                  <div className="w-[60px] h-[1px] bg-[#A9AFC3] "></div> OUR
                  SERVICE
                </div>
                <div className="flex flex-col gap-4">
                  <h1 className="m-0 font-bold md:text-[60px] 2xl:text-[56px] text-[#ffff]  leading-none font-poppins">
                    We offer the best services
                  </h1>
                  <div className="w-full">
                    <span className="md:text-[18px]  text-[#A9AFC3]">
                      We always try to implement our creative ideas at the
                      highest level. You can see it by looking at our portfolio.
                    </span>
                  </div>
                </div>
              </div>
              {/* <div className="w-1/2">
                <img
                  // className="w-full"
                  src={`${getStaticURL()}/assets/images/group_line_service.svg`}
                  alt=""
                />
              </div> */}
            </div>
            <div className="grid  grid-cols-1 lg:grid-cols-3">
              <Link href={"/services/ux-ui-and-brand"}>
                <div className="aspect-[3/4] pt-[50px] px-[80px] flex flex-col items-center justify-start gap-12 bg-gradient-to-b from-gray-900 via-gray-800 to-transparent">
                  <div className="flex flex-col items-center gap-9">
                    <div className="w-[120px] h-[120px] p-5 bg-[#8080802a] rounded-[50%] flex items-center justify-center "></div>
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-center text-[20px] text-[#A9AFC3] font-medium">
                        UI/UX and Brand
                      </span>
                      <span className="text-center text-[20px] text-[#A9AFC3] font-medium">
                        Identity
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 py-2 border-b border-b-[#DBB070] w-fit cursor-pointer">
                    <span className="text-[#DBB070]">READ MORE</span>
                  </div>
                </div>
              </Link>
              <Link href={"/services/ux-ui-and-brand"}>
                <div className="aspect-[3/4] pt-[50px] px-[80px] flex flex-col items-center justify-start gap-12 bg-gradient-to-b from-black via-black-800 to-transparent">
                  <div className="flex flex-col items-center gap-9">
                    <div className="w-[120px] h-[120px] p-5 bg-[#8080802a] rounded-[50%] flex items-center justify-center "></div>
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-center text-[20px] text-[#A9AFC3] font-medium">
                        App
                      </span>
                      <span className="text-center text-[20px] text-[#A9AFC3] font-medium">
                        Development
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 py-2 border-b border-b-[#DBB070] w-fit cursor-pointer">
                    <span className="text-[#DBB070]">READ MORE</span>
                  </div>
                </div>
              </Link>
              <Link href={"/services/ux-ui-and-brand"}>
                <div className="aspect-[3/4] pt-[50px] px-[80px] flex flex-col items-center justify-start gap-12 bg-gradient-to-b from-gray-900 via-gray-800 to-transparent">
                  <div className="flex flex-col items-center gap-9">
                    <div className="w-[120px] h-[120px] p-5 bg-[#8080802a] rounded-[50%] flex items-center justify-center "></div>
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-center text-[20px] text-[#A9AFC3] font-medium">
                        GAME Design
                      </span>
                      <span className="text-center text-[20px] text-[#A9AFC3] font-medium">
                        Development
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 py-2 border-b border-b-[#DBB070] w-fit cursor-pointer">
                    <span className="text-[#DBB070]">READ MORE</span>
                  </div>
                </div>
              </Link>
              <Link href={"/services/ux-ui-and-brand"}>
                <div className="aspect-[3/4] pt-[50px] px-[80px] flex flex-col items-center justify-start gap-12 bg-gradient-to-b from-black via-black-800 to-transparent">
                  <div className="flex flex-col items-center gap-9">
                    <div className="w-[120px] h-[120px] p-5 bg-[#8080802a] rounded-[50%] flex items-center justify-center "></div>
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-center text-[20px] text-[#A9AFC3] font-medium">
                        Web
                      </span>
                      <span className="text-center text-[20px] text-[#A9AFC3] font-medium">
                        Development
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 py-2 border-b border-b-[#DBB070] w-fit cursor-pointer">
                    <span className="text-[#DBB070]">READ MORE</span>
                  </div>
                </div>
              </Link>
              <Link href={"/services/ux-ui-and-brand"}>
                <div className="aspect-[3/4] pt-[50px] px-[80px] flex flex-col items-center justify-start gap-12 bg-gradient-to-b from-gray-900 via-gray-800 to-transparent">
                  <div className="flex flex-col items-center gap-9">
                    <div className="w-[120px] h-[120px] p-5 bg-[#8080802a] rounded-[50%] flex items-center justify-center "></div>
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-center text-[20px] text-[#A9AFC3] font-medium">
                        Social Media
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 py-2 border-b border-b-[#DBB070] w-fit cursor-pointer">
                    <span className="text-[#DBB070]">READ MORE</span>
                  </div>
                </div>
              </Link>
              <Link href={"/services/ux-ui-and-brand"}>
                <div className="aspect-[3/4] pt-[50px] px-[80px] flex flex-col items-center justify-start gap-12 bg-gradient-to-b from-black via-black-800 to-transparent">
                  <div className="flex flex-col items-center gap-9">
                    <div className="w-[120px] h-[120px] p-5 bg-[#8080802a] rounded-[50%] flex items-center justify-center "></div>
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-center text-[20px] text-[#A9AFC3] font-medium">
                        Graphic Design
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 py-2 border-b border-b-[#DBB070] w-fit cursor-pointer">
                    <span className="text-[#DBB070]">READ MORE</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
