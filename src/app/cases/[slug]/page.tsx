"use client";
import { AllCasesSection } from "@/components/Cases/AllCasesSection";
import { CaseDetailSection } from "@/components/Cases/CaseDetailSection";
import { RelatedCaseSection } from "@/components/Service/RelatedCaseSection";
import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { useTheme } from "@/hooks/useTheme";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function CasesPage() {
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
      <CaseDetailSection/>
      <RelatedCaseSection/>
    </DefaultLayout>
  );
}
