
import { Link } from "react-router-dom";
import AnimatedImage from "../UI/AnimatedImage";

// BrandEssenceCard component for the four core sections
interface BrandEssenceCardProps {
  title: string;
  enTitle: string;
  description: string;
  linkText: string;
  linkUrl: string;
  imageSrc: string;
  imageAlt: string;
  index: number;
}

const BrandEssenceCard = ({
  title,
  enTitle,
  description,
  linkText,
  linkUrl,
  imageSrc,
  imageAlt,
  index
}: BrandEssenceCardProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-6 md:gap-10 my-16 md:my-24">
      {/* Image section - alternates sides based on index */}
      <div className={index % 2 === 0 ? "order-1" : "order-1 md:order-2"}>
        <AnimatedImage
          src={imageSrc}
          alt={imageAlt}
          className="image-frame w-full h-auto"
          delay={index * 200}
        />
      </div>

      {/* Content section - alternates sides based on index */}
      <div className={`flex flex-col justify-center ${
        index % 2 === 0 ? "order-2" : "order-2 md:order-1"
      }`}>
        <h3 className="text-2xl md:text-3xl mb-2">
          {title}
          <span className="en-text ml-2 text-base">{enTitle}</span>
        </h3>
        <p className="text-beige-700 mb-6">{description}</p>
        <Link to={linkUrl} className="highlight-text self-start">
          {linkText}
        </Link>
      </div>
    </div>
  );
};

const BrandEssence = () => {
  const essenceItems = [
    {
      title: "关于聆花 · 传承之源",
      enTitle: "About LINGHUA · Source of Heritage",
      description: "创始人聆花16载匠心坚守，融汇唐卡艺术精髓，开创现代掐丝珐琅新篇章。",
      linkText: "了解更多",
      linkUrl: "/about",
      imageSrc: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80",
      imageAlt: "聆花创始人"
    },
    {
      title: "创新工艺 · 固釉生辉",
      enTitle: "Innovative Craft · Solid Enamel Glows",
      description: "从百年景泰蓝到聆花专利\"固釉\"创新，揭秘指尖上的非遗传奇。",
      linkText: "探索工艺",
      linkUrl: "/about/craft",
      imageSrc: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&w=800&q=80",
      imageAlt: "掐丝珐琅工艺"
    },
    {
      title: "艺术之作 · 融入生活",
      enTitle: "Works of Art · Integrated into Life",
      description: "收藏级掐丝珐琅唐卡、东方美学家居，诠释极致匠心与艺术价值。",
      linkText: "鉴赏臻品",
      linkUrl: "/collections",
      imageSrc: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80",
      imageAlt: "掐丝珐琅艺术作品"
    },
    {
      title: "手作之乐 · 亲近非遗",
      enTitle: "Joy of Crafting · Approach Heritage",
      description: "在聆花手作馆，亲手体验掐丝珐琅的魅力，创作属于你的非遗作品。",
      linkText: "预约体验",
      linkUrl: "/workshop",
      imageSrc: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
      imageAlt: "手作体验"
    }
  ];

  return (
    <section className="py-24 bg-beige-50">
      <div className="container-custom">
        <h2 className="text-center mb-16">品牌精粹</h2>

        {essenceItems.map((item, index) => (
          <BrandEssenceCard
            key={index}
            {...item}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default BrandEssence;
