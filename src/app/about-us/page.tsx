"use client";
import { AboutUsSection } from "@/components/AboutUs/AboutUsSection";
import { FriendlyTeamSection } from "@/components/AboutUs/FriendlyTeam";
import { NewsLetterSection } from "@/components/Home/NewsLetterSection";
import { RegisterSection } from "@/components/Home/RegisterSection";
import { AllServiceSection } from "@/components/Service/AllSerrviceSection";
import { PartnerSection } from "@/components/Service/PartnerSection";
import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { useTheme } from "@/hooks/useTheme";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function AboutUsPage() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScroll(true);
        return;
      }
      setIsScroll(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <DefaultLayout
      pageTitle="Dashboard"
      containerStyle="bg-[#000000] dark:bg-[#000000]"
      headerStyle={`${!isScroll && "bg-[transparent] py-4 shadow-none"}`}
    >
     
      <AboutUsSection />
      <FriendlyTeamSection/>
      <PartnerSection/>
      <RegisterSection />
      <NewsLetterSection />
    </DefaultLayout>
  );
}
