"use client";
import { useTheme } from "@/hooks/useTheme";
import { useTranslation } from "react-i18next";
import "../../../i18n";
import Image from "next/image";
import { getStaticURL } from "@/utils/constants";
import { FooterData } from "@/utils/constants";
import Link from "next/link";
import { YoutubeIcon } from "@/assets/icons/YoutubeIcon";
import { IconFaceBook } from "@/assets/icons/IconFacebook";

export const Footer = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  return (
    <div className="w-[1080px] max-w-full mx-auto py-[50px] border-t border-t-[#3A3F50]">
      <div className="grid grid-cols-4 text-[#fff]">
        <div className="flex flex-col gap-3">
          <img src="" alt="" />
          <ul>
            <li className="text-[#A9AFC3]  font-normal py-1">
              Copyright © 2020 Crope.
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-bold">Working hours:</span>
          <ul>
            <li className="text-[#A9AFC3]  font-normal py-1">
              Mon - Fri: 9 am - 6 pm Sat
            </li>
            <li className="text-[#A9AFC3]  font-normal py-1">
              Sat, Sun: Holiday
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-bold">Address</span>
          <ul>
            <li className="text-[#A9AFC3]  font-normal py-1">
              199 Nam Kì Vũng Tàu
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-bold">Hit us up:</span>
          <ul>
            <li className="text-[#A9AFC3]  font-normal py-1">10334586570</li>
            <li className="text-[#A9AFC3]  font-normal py-1">
              goldenseavt@gmail.com
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
