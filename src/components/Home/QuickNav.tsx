
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// 定义导航路径类型
type NavPath = {
  title: string;
  enTitle: string;
  description: string;
  path: string;
  icon: string;
};

const QuickNav = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // 导航路径数据
  const navPaths: NavPath[] = [
    {
      title: "品牌故事",
      enTitle: "Brand Story",
      description: "了解聆花的600年宫廷技艺传承与创新",
      path: "/about/story",
      icon: "📜"
    },
    {
      title: "工艺介绍",
      enTitle: "Craftsmanship",
      description: "探索掐丝珐琅的精湛工艺与创作过程",
      path: "/about/craft",
      icon: "🛠️"
    },
    {
      title: "艺术臻品",
      enTitle: "Collections",
      description: "欣赏聆花匠心打造的艺术珍品",
      path: "/collections",
      icon: "🏺"
    },
    {
      title: "体验预约",
      enTitle: "Workshop",
      description: "亲身参与掐丝珐琅手作体验",
      path: "/workshop",
      icon: "✨"
    }
  ];

  return (
    <section className="py-16 bg-beige-50">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-2xl mb-3">探索之旅</h2>
          <p className="text-beige-700">开启您的非遗艺术探索之旅</p>
        </div>
        
        <div 
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {navPaths.map((item, index) => (
            <Link 
              key={item.path} 
              to={item.path}
              className="bg-white rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-5px] flex flex-col h-full"
              style={{ 
                animationDelay: `${index * 150}ms`,
                opacity: 0,
                animation: 'fade-in 0.5s ease-out forwards'
              }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl mb-1">{item.title}</h3>
              <p className="text-sm text-beige-600 mb-1 font-garamond italic">{item.enTitle}</p>
              <p className="text-beige-700 text-sm flex-grow mb-4">{item.description}</p>
              <div className="flex items-center text-seal-600 text-sm font-medium">
                <span>立即探索</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickNav;
