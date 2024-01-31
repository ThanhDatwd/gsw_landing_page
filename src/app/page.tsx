"use client";
import { useTranslation } from "react-i18next";
import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { useTheme } from "@/hooks/useTheme";
import { HeroSection } from "@/components/Home/HeroSection";
import { useEffect, useState } from "react";
import { AboutSection } from "@/components/Home/AboutSection";
import { OurServiceSection } from "@/components/Home/OurService";
import { RegisterSection } from "@/components/Home/RegisterSection";
import { InfoSection } from "@/components/Home/InfoSection";
import { PortfolioSection } from "@/components/Home/PortfolioSection";
import { RecentPostSection } from "@/components/Home/RecentPostSection";
import { NewsLetterSection } from "@/components/Home/NewsLetterSection";

export default function Home() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
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
      headerStyle={`${!isScroll && "bg-[transparent] py-4 shadow-none"}  `}
    >
      <HeroSection />
      <AboutSection/>
      <OurServiceSection/>
      <RegisterSection/>
      <InfoSection/>
      <PortfolioSection/>
      <RecentPostSection/>
      <NewsLetterSection/>
    </DefaultLayout>
  );
}
