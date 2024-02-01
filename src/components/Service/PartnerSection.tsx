/* eslint-disable @next/next/no-img-element */
import { getStaticURL } from "@/utils/constants";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation ,Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ShareIcon } from "@/assets/icons/ShareIcon";

export const PartnerSection = () => {
  return (
    <>
      <div className="flex ">
        <div className="relative h-full w-full  pt-[80px]  bg-[#111319] ">
          <div className=" h-full relative w-[1080px] max-w-full mx-auto pb-[120px] flex flex-col justify-end gap-16">
            <div className="flex flex-col gap-6">
              <Swiper
                modules={[Pagination, Navigation,Autoplay]}
                className="mySwiper"
                loop={true}
                slidesPerView={5}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
              >
                <SwiperSlide>
                  <div className="aspect-video w-full bg-cover bg-center bg-no-repeat duration-300 ease-in-out bg-[#7DC70E] "></div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="aspect-video w-full bg-cover bg-center bg-no-repeat duration-300 ease-in-out bg-[#00B838] "></div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="aspect-video w-full bg-cover bg-center bg-no-repeat duration-300 ease-in-out bg-[#7DC70E] "></div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="aspect-video w-full bg-cover bg-center bg-no-repeat duration-300 ease-in-out bg-[#00B838] "></div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="aspect-video w-full bg-cover bg-center bg-no-repeat duration-300 ease-in-out bg-[#7DC70E] "></div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="aspect-video w-full bg-cover bg-center bg-no-repeat duration-300 ease-in-out bg-[#00B838] "></div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="aspect-video w-full bg-cover bg-center bg-no-repeat duration-300 ease-in-out bg-[#7DC70E] "></div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="aspect-video w-full bg-cover bg-center bg-no-repeat duration-300 ease-in-out bg-[#00B838] "></div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
