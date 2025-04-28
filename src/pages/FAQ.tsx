
import React, { useEffect } from 'react';
import MainLayout from '../components/Layout/MainLayout';
import FAQSection from '../components/FAQ/FAQSection';
import { initLocale, t } from '@/lib/i18n';

const FAQ = () => {
  // 初始化多语言设置
  useEffect(() => {
    initLocale();
  }, []);

  // 完整FAQ数据
  const fullFaqs = [
    {
      question: '什么是"固釉掐丝珐琅"工艺？',
      answer: '固釉掐丝珐琅是聆花文化的专利创新工艺，在传统掐丝珐琅工艺基础上，通过特殊材料与工艺将珐琅釉固化，使作品拥有宝石般的通透质感与持久色彩，同时更加轻盈、坚固耐用。'
    },
    {
      question: '聆花的手作体验需要预约吗？',
      answer: '是的，我们的手作体验需要提前预约。您可以通过网站预约系统、电话或微信预约，建议至少提前3天进行预约，以确保有足够的材料准备和场地安排。'
    },
    {
      question: '聆花的作品可以定制吗？',
      answer: '可以。聆花提供专业的掐丝珐琅艺术品定制服务，包括企业礼品、纪念品、收藏品等。您可以通过<a href=\'/contact\' class=\'text-azure-600 hover:underline\'>联系我们</a>页面提交定制需求，我们的设计师会与您详细沟通。'
    },
    {
      question: '聆花的艺术作品如何保养？',
      answer: '聆花的固釉掐丝珐琅作品比传统工艺更加耐用，但仍建议避免长时间阳光直射、剧烈碰撞和接触化学物质。日常可用柔软干布轻轻擦拭，若有顽固污渍，可用少量温和清洁剂和软布轻擦。'
    },
    {
      question: '聆花文化有实体店铺吗？',
      answer: '是的，聆花文化在广州和深圳设有实体体验馆。广州馆位于番禺区大学城岭南印象园，深圳馆位于南山区南头古城西集。欢迎前来参观，建议提前电话预约。'
    },
    {
      question: '如何鉴别真正的掐丝珐琅作品？',
      answer: '真正的掐丝珐琅作品有以下特点：金属丝网清晰可见；釉料色彩纯正，表面光滑平整；整体质感厚重；在光照下有独特的釉面光泽。聆花创新的固釉工艺作品还具有通透质感和更轻盈的特点。'
    },
    {
      question: '参加聆花手作体验需要具备什么基础？',
      answer: '聆花手作体验不需要任何艺术或工艺基础，我们的专业老师会提供全程指导。无论是孩子还是成人，都可以在我们的引导下完成属于自己的珐琅艺术品。'
    },
    {
      question: '聆花的作品价格区间是多少？',
      answer: '聆花作品根据工艺复杂度、材质、尺寸等因素，价格区间较广。入门级文创产品从几百元起，艺术臻品和限量收藏系列则从数千元至数万元不等。详细价格可查看具体产品页面或咨询客服。'
    },
    {
      question: '聆花提供哪些企业定制服务？',
      answer: '聆花为企业客户提供多种定制服务，包括但不限于：企业礼品定制、活动纪念品、VIP客户礼遇、文化衍生品开发、企业团建手作活动等。我们曾与华为、茅台、故宫博物院等知名机构合作，为其提供专属定制方案。'
    },
    {
      question: '聆花作品是否提供国际快递？',
      answer: '是的，聆花提供国际快递服务。国际订单的运费和关税将根据目的地国家和包裹重量单独计算。大型或高价值艺术品我们会使用专业的艺术品物流服务，确保安全送达。'
    }
  ];

  return (
    <MainLayout>
      <div className="pt-24 pb-16">
        <div className="container-custom max-w-5xl">
          <h1 className="text-3xl md:text-4xl mb-8 text-center">常见问题</h1>
          <p className="text-center text-beige-700 mb-12 max-w-3xl mx-auto">
            以下是关于聆花文化与掐丝珐琅艺术的常见问题解答。如有其他疑问，欢迎<a href="/contact" className="text-azure-600 hover:underline">联系我们</a>。
          </p>
          
          <FAQSection 
            faqs={fullFaqs} 
            title="" 
            showMoreLink={false} 
            className="bg-beige-50 py-12 px-6 rounded-lg"
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default FAQ;
