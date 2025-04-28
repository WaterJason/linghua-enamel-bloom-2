
import { useEffect } from "react";
import MainLayout from "../components/Layout/MainLayout";
import Hero from "../components/Home/Hero";
import FeaturedWorks from "../components/Home/FeaturedWorks";
import BrandEssence from "../components/Home/BrandEssence";
import Partners from "../components/Home/Partners";
import QuickNav from "../components/Home/QuickNav";
import ArtisticProcess from "../components/Home/ArtisticProcess";
import Testimonials from "../components/Home/Testimonials";
import FAQSection from "../components/FAQ/FAQSection";
import { initLocale } from "@/lib/i18n";

const Index = () => {
  // 初始化多语言设置
  useEffect(() => {
    initLocale();
  }, []);

  // FAQ示例数据
  const faqs = [
    {
      question: '什么是"固釉掐丝珐琅"工艺？',
      answer: "固釉掐丝珐琅是聆花文化的专利创新工艺，在传统掐丝珐琅工艺基础上，通过特殊材料与工艺将珐琅釉固化，使作品拥有宝石般的通透质感与持久色彩，同时更加轻盈、坚固耐用。"
    },
    {
      question: "聆花的手作体验需要预约吗？",
      answer: "是的，我们的手作体验需要提前预约。您可以通过网站预约系统、电话或微信预约，建议至少提前3天进行预约，以确保有足够的材料准备和场地安排。"
    },
    {
      question: "聆花的作品可以定制吗？",
      answer: "可以。聆花提供专业的掐丝珐琅艺术品定制服务，包括企业礼品、纪念品、收藏品等。您可以通过<a href='/contact' class='text-azure-600 hover:underline'>联系我们</a>页面提交定制需求，我们的设计师会与您详细沟通。"
    },
    {
      question: "聆花的艺术作品如何保养？",
      answer: "聆花的固釉掐丝珐琅作品比传统工艺更加耐用，但仍建议避免长时间阳光直射、剧烈碰撞和接触化学物质。日常可用柔软干布轻轻擦拭，若有顽固污渍，可用少量温和清洁剂和软布轻擦。"
    }
  ];

  return (
    <MainLayout className="overflow-x-hidden">
      <Hero />
      <QuickNav />
      <FeaturedWorks />
      <ArtisticProcess />
      <Testimonials />
      <BrandEssence />
      <FAQSection faqs={faqs} />
      <Partners />
    </MainLayout>
  );
};

export default Index;
