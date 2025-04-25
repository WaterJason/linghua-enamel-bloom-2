
import MainLayout from "../components/Layout/MainLayout";
import Hero from "../components/Home/Hero";
import FeaturedWorks from "../components/Home/FeaturedWorks";
import BrandEssence from "../components/Home/BrandEssence";
import Partners from "../components/Home/Partners";

const Index = () => {
  return (
    <MainLayout className="overflow-x-hidden">
      <Hero />
      <FeaturedWorks />
      <BrandEssence />
      <Partners />
    </MainLayout>
  );
};

export default Index;
