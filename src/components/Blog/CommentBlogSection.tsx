/* eslint-disable @next/next/no-img-element */
import React from "react";

export const CommentItem = () => {
  return (
    <div className="flex flex-col gap-4 border-b border-b-[#3A3F50] py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-[50px] h-[50px] bg-black rounded-[50%] "></div>
          <span className="text-[20px] text-white">Mark Srew</span>
          <div className="w-[10px] h-[10px] rounded-[50%] bg-[#DBB070]"></div>
          <span className="text-[18px] text-white">Jan 17, 2020 at 3:46pm</span>
        </div>
        <div className="flex items-center gap-3 py-2  w-fit cursor-pointer">
          <span className="text-[#DBB070]">REPLY</span>
        </div>
      </div>
      <span className="text-[#A9AFC3]">
        Very helpful article. Now I understand how everything works. I learned
        new tools for myself, and now I really see that the number of sales is
        increasing.
      </span>
    </div>
  );
};
export const CommentBlogSection = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className=" flex flex-col font-bold text-[30px] text-[#ffff] font-poppins">
        Comment (3)
      </h1>
      <div className="flex flex-col gap-2">
        <CommentItem />
        <div className="pl-10">
          <CommentItem />
        </div>
      </div>
    </div>
  );
};
