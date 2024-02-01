/* eslint-disable @next/next/no-img-element */
import { getStaticURL } from "@/utils/constants";
import { url } from "inspector";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

export const AllCasesSection = () => {
  const searchParams = useSearchParams();

  const tab = searchParams.get("tab");
  console.log('this tab',tab)
  return (
    <>
      <div className="flex ">
        <div className="relative h-full w-full  pt-[80px] pb-[120px] bg-[#191c26] ">
          <div className="w-full flex items-center justify-end py-6 xs:px-5 lg:px-14">
            <div className="flex items-center gap-5 text-[#A9AFC3]">
              <div className="hidden lg:block w-[40px] h-[1px] bg-[#A9AFC3]"></div>
              <span>Home</span>
              <div className="hidden lg:block w-[40px] h-[1px] bg-[#A9AFC3]"></div>
              <span>Cases</span>
            </div>
          </div>
          <div className=" h-full relative w-[1080px] max-w-full mx-auto  px-5 lg:px-0  flex flex-col justify-end gap-16">
            <div className="flex  items-end flex-wrap">
              <div className=" flex-1 flex flex-col gap-2">
                <div className="flex items-center gap-5 text-[#A9AFC3]">
                  <div className="w-[60px] h-[1px] bg-[#A9AFC3] "></div>
                  PORTFOLIO
                </div>
                <div className="flex flex-col gap-4">
                  <h1 className="m-0 font-bold text-[56px] text-[#ffff]  leading-none font-poppins">
                    Our amazing cases
                  </h1>
                  <div className="w-full">
                    <span className="text-[18px]  text-[#A9AFC3]">
                      You may be interested in what we can offer you. More
                      services you can find below. We do everything at a high
                      level.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-10">
              <Link
                href={"/cases?tab=all"}
                className={`uppercase tracking-wider relative block py-2 whitespace-nowrap text-start text-[16px] hover:text-[#DBB070] after:content-[''] after:block  after:absolute after:w-full after:border-t-2 after:border-[#1111]  after:bottom-[6px] after:left-0 after:scale-x-0 hover:after:scale-x-100  ${
                  tab === "all" || tab === null
                    ? "after:scale-x-100 after:border-[#DBB070] text-[#DBB070]"
                    : "text-[#FFF]"
                }   hover:after:border-[#DBB070] after:transition-transform after:transition-border-color after:duration-300 ease-out`}
              >
                All
              </Link>
              <Link
                href={"/cases?tab=ui-ux"}
                className={`uppercase tracking-wider relative block py-2 whitespace-nowrap text-start text-[16px] hover:text-[#DBB070] after:content-[''] after:block  after:absolute after:w-full after:border-t-2 after:border-[#1111]  after:bottom-[6px] after:left-0 after:scale-x-0 hover:after:scale-x-100  ${
                  tab === "ui-ux" ? "after:scale-x-100 after:border-[#DBB070] text-[#DBB070]"
                    : "text-[#FFF]"
                }   hover:after:border-[#DBB070] after:transition-transform after:transition-border-color after:duration-300 ease-out`}
              >
                UI/UX and Brand
              </Link>
              <Link
                href={"/cases?tab=apps"}
                className={`uppercase tracking-wider relative block py-2 whitespace-nowrap text-start text-[16px] hover:text-[#DBB070] after:content-[''] after:block  after:absolute after:w-full after:border-t-2 after:border-[#1111]  after:bottom-[6px] after:left-0 after:scale-x-0 hover:after:scale-x-100  ${
                  tab === "apps" ? "after:scale-x-100 after:border-[#DBB070] text-[#DBB070]"
                    : "text-[#FFF]"
                }   hover:after:border-[#DBB070] after:transition-transform after:transition-border-color after:duration-300 ease-out`}
              >
                Apps
              </Link>
              <Link
                href={"/cases?tab=seo-smm"}
                className={`uppercase tracking-wider relative block py-2 whitespace-nowrap text-start text-[16px] hover:text-[#DBB070] after:content-[''] after:block  after:absolute after:w-full after:border-t-2 after:border-[#1111]  after:bottom-[6px] after:left-0 after:scale-x-0 hover:after:scale-x-100  ${
                  tab === "seo-smm" ? "after:scale-x-100 after:border-[#DBB070] text-[#DBB070]"
                    : "text-[#FFF]"
                }   hover:after:border-[#DBB070] after:transition-transform after:transition-border-color after:duration-300 ease-out`}
              >
                SEO & SMM
              </Link>
              <Link
                href={"/cases?tab=e-commerce"}
                className={`uppercase tracking-wider relative block py-2 whitespace-nowrap text-start text-[16px] hover:text-[#DBB070] after:content-[''] after:block  after:absolute after:w-full after:border-t-2 after:border-[#1111]  after:bottom-[6px] after:left-0 after:scale-x-0 hover:after:scale-x-100  ${
                  tab === "e-commerce" ? "after:scale-x-100 after:border-[#DBB070] text-[#DBB070]"
                    : "text-[#FFF]"
                }   hover:after:border-[#DBB070] after:transition-transform after:transition-border-color after:duration-300 ease-out`}
              >
                E-commerce
              </Link>
              <Link
                href={"/cases?tab=marketing"}
                className={`uppercase tracking-wider relative block py-2 whitespace-nowrap text-start text-[16px] hover:text-[#DBB070] after:content-[''] after:block  after:absolute after:w-full after:border-t-2 after:border-[#1111]  after:bottom-[6px] after:left-0 after:scale-x-0 hover:after:scale-x-100  ${
                  tab === "marketing" ? "after:scale-x-100 after:border-[#DBB070] text-[#DBB070]"
                    : "text-[#FFF]"
                }   hover:after:border-[#DBB070] after:transition-transform after:transition-border-color after:duration-300 ease-out`}
              >
                marketing
              </Link>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <Link href={"/cases/game"}>
                <div
                  className="bg-[#7DC70E] aspect-[3/4] bg-cover bg-center bg-no-repeat lg:opacity-[0.5] hover:opacity-[1] duration-300 ease-in-out hover:translate-y-[-10px] pt-[50px] px-[80px]"
                  // style={{
                  //   backgroundImage: `url('${getStaticURL()}/assets/images/game_1.png')`,
                  // }}
                ></div>
              </Link>
              <Link href={"/cases/game"}>
                <div
                  className="bg-[#00B838] aspect-[3/4] bg-cover bg-center bg-no-repeat lg:opacity-[0.5] hover:opacity-[1] duration-300 ease-in-out hover:translate-y-[-10px] pt-[50px] px-[80px]"
                  // style={{
                  //   backgroundImage: `url('${getStaticURL()}/assets/images/game_3.png')`,
                  // }}
                ></div>
              </Link>
              <Link href={"/cases/game"}>
                <div
                  className="bg-[#7DC70E] aspect-[3/4] bg-cover bg-center bg-no-repeat lg:opacity-[0.5] hover:opacity-[1] duration-300 ease-in-out hover:translate-y-[-10px] pt-[50px] px-[80px]"
                  // style={{
                  //   backgroundImage: `url('${getStaticURL()}/assets/images/game_2.png')`,
                  // }}
                ></div>
              </Link>
              <Link href={"/cases/game"}>
                <div
                  className="bg-[#00B838] aspect-[3/4] bg-cover bg-center bg-no-repeat lg:opacity-[0.5] hover:opacity-[1] duration-300 ease-in-out hover:translate-y-[-10px] pt-[50px] px-[80px]"
                  // style={{
                  //   backgroundImage: `url('${getStaticURL()}/assets/images/game_1.png')`,
                  // }}
                ></div>
              </Link>
            </div>
            <div className="flex justify-center">
              <button className="rounded-[50px] w-fit mt-4  py-[15px] px-[35px] border border-[#DBB070] text-[#fff]">
                VIEW MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
