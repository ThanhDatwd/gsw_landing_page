/* eslint-disable @next/next/no-img-element */
import { getStaticURL } from "@/utils/constants";
import { url } from "inspector";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ShareIcon } from "@/assets/icons/ShareIcon";

export const CaseDetailSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
      <div className="flex ">
        <div className="relative h-full w-full  pt-[80px]  bg-[#191c26] ">
          <div className="w-full flex items-center justify-end py-6 xs:px-5 lg:px-14">
            <div className="flex items-center gap-5 text-[#A9AFC3]">
              <div className="w-[60px] h-[1px] bg-[#A9AFC3] "></div>
              Home
              <div className="w-[60px] h-[1px] bg-[#A9AFC3] "></div>
              Case
              <div className="w-[60px] h-[1px] bg-[#A9AFC3] "></div>
              Case detail
            </div>
          </div>
          <div className=" h-full relative w-[1080px] max-w-full mx-auto pb-[120px] flex flex-col justify-end gap-16">
            <div className="flex items-end flex-wrap  px-5 lg:px-0">
              <div className="w-full lg:w-1/2 flex-1 flex flex-col gap-5">
                <div className="flex items-center gap-5 text-[#A9AFC3]">
                  <div className="w-[60px] h-[1px] bg-[#A9AFC3] "></div>
                  PORTFOLIO
                </div>
                <div className="flex flex-col gap-8">
                  <h1 className="font-bold text-[56px] text-[#ffff]  leading-none font-poppins">
                    PLANT VS UNDEAD
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <Swiper
                modules={[Pagination, Navigation]}
                className="mySwiper"
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                allowTouchMove={false}
              >
                <SwiperSlide>
                  <div
                    className="aspect-video w-full bg-cover bg-center bg-no-repeat duration-300 ease-in-out "
                    style={{
                      backgroundImage: `url('${getStaticURL()}/assets/images/plant_and_undead_banner.png')`,
                    }}
                  ></div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="aspect-video w-full bg-cover bg-center bg-no-repeat duration-300 ease-in-out bg-[red] "></div>
                </SwiperSlide>
              </Swiper>
              <div className="flex justify-between">
                <button
                  ref={prevRef}
                  className="w-fit py-3 pr-3 border-b border-b-[#DBB070] text-[#DBB070] uppercase "
                >
                  Prev
                </button>
                <button
                  ref={nextRef}
                  className="w-fit py-3 pl-3 border-b border-b-[#DBB070] text-[#DBB070] uppercase  "
                >
                  Next
                </button>
              </div>
            </div>
            <div className="grid grid-cols-12">
              <div className="col-span-2"></div>
              <div className="col-span-10 flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <span className="text-[22px] font-medium text-white">
                    About project
                  </span>
                  <div>
                    <span className="text-[18px] text-[#A9AFC3]">
                      Plant vs Undead is a blockchain game built on Binance
                      Smart Chain. The NFT game is inspired by the traditional
                      Plants and Zombies. The player joins the game, owning the
                      seeds and plants in the game in the form of NFTs as
                      assets.
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 text-[18px] py-10 border-y border-y-[#3A3F50]">
                  <div className="">
                    <div className="flex gap-4 py-2">
                      <strong className="text-white ">Client:</strong>
                      <span className="text-[#A9AFC3]">Private</span>
                    </div>
                    <div className="flex gap-4 py-2">
                      <strong className="text-white ">Category:</strong>
                      <span className="text-[#A9AFC3]">Private</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-4 py-2">
                      <strong className="text-white ">Start date:</strong>
                      <span className="text-[#A9AFC3]">Private</span>
                    </div>
                    <div className="flex gap-4 py-2">
                      <strong className="text-white ">Finish date:</strong>
                      <span className="text-[#A9AFC3]">Private</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6 ">
                  <button className="rounded-[50px] w-fit   py-[15px] px-[35px] border border-[#DBB070] text-[#fff]">
                    VIEW MORE
                  </button>
                  <div className="text-white flex items-center gap-2 cursor-pointer">
                    <ShareIcon /> SHARE
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
