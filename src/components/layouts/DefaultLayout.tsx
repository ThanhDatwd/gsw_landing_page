"use client";

import { useState } from "react";

import Header from "./Header";
import "../../../i18n";
import { Footer } from "./Footer";
import { MenuIcon } from "@/assets/icons/MenuIcon";

export const DefaultLayout = ({
  children,
  pageTitle,
  containerStyle,
  headerStyle,
}: {
  children: React.ReactNode;
  pageTitle?: string;
  containerStyle: string;
  headerStyle?: string;
}) => {
  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if ((event.ctrlKey || event.metaKey) && event.key === "k") {
      event.preventDefault();
      // Xử lý sự kiện tại đây
      document.getElementById("input-search")?.focus();
    }
  };

  return (
    <main
      className={`ease-soft-in-out relative h-full transition-all duration-200 ${containerStyle}`}
    >
      <div className=" hidden lg:flex flex-col py-20 justify-between items-center fixed top-0 left-0 bg-[#080A12] w-[120px] h-[100vh] z-[999]">
        <MenuIcon />
        <div className="w-[50vh] py-[50px] flex items-center gap-5 text-[#A9AFC3] rotate-90">
           PORTFOLIO LINK
          <div className="w-[60px] h-[1px] bg-[#A9AFC3] "></div>
        </div>
      </div>
      <div className="w-full" onKeyDown={handleKeyPress} tabIndex={50}>
        <Header headerStyle={headerStyle} />
        <div className="relative w-full mx-auto  min-h-[90vh]" id="box">
          {children}
        </div>
        <Footer />
      </div>
    </main>
  );
};
