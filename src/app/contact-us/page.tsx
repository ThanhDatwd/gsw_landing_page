"use client";
/* eslint-disable @next/next/no-img-element */
import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

const PageContact = () => {
  const { t } = useTranslation();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <DefaultLayout
      pageTitle="Dashboard"
      containerStyle="bg-[#F0EDE7] dark:bg-[#222327]"
    >
      <div
        className="relative bg-cover "
        style={{
          width: "100vw",
          height: "100vh",
        }}
      >
        Contact-page 
      </div>
    </DefaultLayout>
  );
};
export default PageContact;
