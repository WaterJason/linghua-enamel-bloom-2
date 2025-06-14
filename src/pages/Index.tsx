
import React, { useEffect } from "react";
import MainLayout from "../components/Layout/MainLayout";
import Hero from "../components/Home/Hero";
import BrandIntro from "../components/Home/BrandIntro";
import FeaturedWorks from "../components/Home/FeaturedWorks";
import CraftIntroduction from "../components/Home/CraftIntroduction";
import CollectionsPreview from "../components/Home/CollectionsPreview";
import WorkshopIntro from "../components/Home/WorkshopIntro";
import NewsSection from "../components/Home/NewsSection";
import ContactSection from "../components/Home/ContactSection";
import { initLocale } from "@/lib/i18n";

const Index = () => {
  // 初始化多语言设置
  useEffect(() => {
    initLocale();
  }, []);

  return (
    <MainLayout className="overflow-x-hidden">
      <Hero />
      <BrandIntro />
      <FeaturedWorks />
      <CraftIntroduction />
      <CollectionsPreview />
      <WorkshopIntro />
      <NewsSection />
      <ContactSection />
    </MainLayout>
  );
};

export default Index;
