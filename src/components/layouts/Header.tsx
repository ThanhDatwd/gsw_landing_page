/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/hooks/useTheme";
import { Logo } from "../Logo";
import Link from "next/link";
import { getStaticURL } from "@/utils/constants";
import { usePathname } from "next/navigation";
import { MenuIcon } from "@/assets/icons/MenuIcon";
import { CloseIcon } from "@/assets/icons/CloseIcon";

const Header = ({ headerStyle }: { headerStyle?: string }) => {
  const { t } = useTranslation();
  const [isShow, setIsShow] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const { i18n } = useTranslation();
  const { theme } = useTheme();
  const pathname = usePathname();
  return (
    <div className="w-full xs:pl-0 lg:pl-[120px] fixed top-0 z-50 flex  ">
      <nav
        className={` w-full xs:px-5 lg:px-14 bg-[#191c26] py-2 flex items-center justify-between transition-all shadow-md duration-250 ease-soft-in ${headerStyle}`}
        navbar-scroll="true"
      >
        <div className="flex items-center gap-14 ">
          <div><Logo /></div>
          <div className="hidden lg:flex items-center gap-14">
          <Link
            href={"/services"}
            className={`tracking-wider relative block py-2 whitespace-nowrap text-start text-[16px] hover:text-[#DBB070] after:content-[''] after:block  after:absolute after:w-full after:border-t-2 after:border-[#1111]  after:bottom-[6px] after:left-0 after:scale-x-0 hover:after:scale-x-100  ${
              pathname === "/services" ? "after:scale-x-100 after:border-[#DBB070] text-[#DBB070]":"text-[#FFF]"
            }   hover:after:border-[#DBB070] after:transition-transform after:transition-border-color after:duration-300 ease-out`}
          >
            Services
          </Link>
          <Link
            href={"/cases"}
            className={`tracking-wider relative block py-2 whitespace-nowrap text-start text-[16px] hover:text-[#DBB070] after:content-[''] after:block  after:absolute after:w-full after:border-t-2 after:border-[#1111]  after:bottom-[6px] after:left-0 after:scale-x-0 hover:after:scale-x-100  ${
              pathname === "/cases" ? "after:scale-x-100 after:border-[#DBB070] text-[#DBB070]":"text-[#FFF]"
            }  hover:after:border-[#DBB070] after:transition-transform after:transition-border-color after:duration-300 ease-out`}
          >
            Case
          </Link>
          <Link
            href={"/blog"}
            className={`tracking-wider relative block py-2 whitespace-nowrap text-start text-[16px] hover:text-[#DBB070] after:content-[''] after:block  after:absolute after:w-full after:border-t-2 after:border-[#1111]  after:bottom-[6px] after:left-0 after:scale-x-0 hover:after:scale-x-100  ${
              pathname === "/blog" ? "after:scale-x-100 after:border-[#DBB070] text-[#DBB070]":"text-[#FFF]"
            }  hover:after:border-[#DBB070] after:transition-transform after:transition-border-color after:duration-300 ease-out`}
          >
            Blog
          </Link>
          <Link
            href={"/contact-us"}
            className={`tracking-wider relative block py-2 whitespace-nowrap text-start text-[16px hover:text-[#DBB070] after:content-[''] after:block  after:absolute after:w-full after:border-t-2 after:border-[#1111]  after:bottom-[6px] after:left-0 after:scale-x-0 hover:after:scale-x-100  ${
              pathname === "/contact-us" ? "after:scale-x-100 after:border-[#DBB070] text-[#DBB070]":"text-[#FFF]"
            }  hover:after:border-[#DBB070] after:transition-transform after:transition-border-color after:duration-300 ease-out`}
          >
            Contact us
          </Link>
          </div>
        </div>
        <div className="flex justify-end items-center gap-24 ">
          <span className="hidden lg:block text-[#fff]">0334586570</span>
          <button className="rounded-[50px]  py-[15px] px-[35px] border border-[#DBB070] text-[#fff]">
            Get quote
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
