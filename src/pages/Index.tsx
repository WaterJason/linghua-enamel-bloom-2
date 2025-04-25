
import MainLayout from "../components/Layout/MainLayout";
import Hero from "../components/Home/Hero";
import FeaturedWorks from "../components/Home/FeaturedWorks";
import BrandEssence from "../components/Home/BrandEssence";
import Partners from "../components/Home/Partners";
import QuickNav from "../components/Home/QuickNav";
import ArtisticProcess from "../components/Home/ArtisticProcess";

const Index = () => {
  return (
    <MainLayout className="overflow-x-hidden">
      <Hero />
      <QuickNav />
      <FeaturedWorks />
      <ArtisticProcess />
      <BrandEssence />
      <Partners />
    </MainLayout>
  );
};

export default Index;
