import { QuoteIcon } from "@/assets/icons/QuoteIcon";
import { SendIcon } from "@/assets/icons/SendIcon";
import { getStaticURL } from "@/utils/constants";

/* eslint-disable @next/next/no-img-element */
export const NewsLetterSection = () => {
  return (
    <>
      <div className="flex">
        <div className="relative w-full min-h-[1024px]">
          {/* <div className="absolute w-full h-full grid grid-cols-12">
            <div className="col-span-6 bg-[#191c26]"></div>
          </div> */}
          <div className="relative h-full w-[1080px] max-w-full px-5  mx-auto  flex items-center  ">
            <div className="w-full grid grid-cols-12  text-[#fff]  ">
              <div className="col-span-12 lg:col-span-6 py-10 lg:py-0 lg:pr-10">
                <div className="flex flex-col gap-8">
                  <div className="flex items-center gap-6">
                    {" "}
                    <div className="w-[60px] h-[1px] bg-[#A9AFC3]"></div> LET’S
                    GET STARTED
                  </div>
                  <div className="flex flex-col gap-6">
                    <h1 className=" flex flex-col font-bold md:text-[60px] 2xl:text-[64px] text-[#ffff] font-poppins">
                      <span>Be Always </span>
                      <span>In Touch</span>
                    </h1>
                    <div className="w-full">
                      <span className="md:text-[18px] 2xl:text-[22px] text-[#A9AFC3]">
                        We are grateful to know you are interested in our
                        content and services. Subscribe
                      </span>
                    </div>
                    <form action="" className="flex flex-col gap-9 mt-8">
                      <div className="flex gap-8">
                        <input
                          className="flex-1 outline-none border-b border-b-[#3A3F50] bg-transparent pb-4"
                          type="text"
                          placeholder="Email"
                        />

                        <button className="rounded-[50%] mt-4 w-[60px] h-[60px] bg-[#DBB070] text-[#fff]">
                          <SendIcon />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className=" col-span-12 lg:col-span-6  py-10 lg:py-0 lg:pl-10 text-[#fff] flex flex-col gap-10">
                <div className="flex gap-10">
                  <img className="w-[70px] h-[70px] bg-white rounded-[50%]" src={`${getStaticURL()}/assets/images/signature.png`} alt="" />
                  <div className="flex flex-col">
                    <span className="text-[22px] font-medium">
                      Huỳnh Tân Khoa 
                    </span>
                    <span className="text-[#A9AFC3]">
                      Founder at Green Software
                    </span>
                  </div>
                </div>
                <div>
                  <span className="text-[22px] text-[#A9AFC3]">
                    We working hard everyday. Hope that oneday we can change the
                    world!
                  </span>
                  <div className="flex justify-between items-end">
                    <img src={`${getStaticURL()}/assets/images/signature.png`} alt="" />
                    <QuoteIcon />
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
