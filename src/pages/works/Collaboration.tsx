import MainLayout from "@/components/Layout/MainLayout";
import AnimatedImage from "@/components/UI/AnimatedImage";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";

interface CollaborationProject {
  id: string;
  name: string;
  partner: string;
  year: string;
  category: "艺术家" | "企业" | "文博机构";
  image: string;
  description: string;
}

const Collaboration = () => {
  const collaborationCategories = ["全部", "艺术家", "企业", "文博机构"];
  
  const collaborationProjects: CollaborationProject[] = [
    {
      id: "collab-1",
      name: "「梦」与毕加索跨时空联名",
      partner: "毕加索艺术基金会",
      year: "2023",
      category: "艺术家",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80",
      description: "聆花与毕加索艺术基金会合作，将毕加索的代表作「梦」通过掐丝珐琅工艺重新诠释，实现了东西方艺术的跨时空对话。"
    },
    {
      id: "collab-2",
      name: "「荔枝图」与齐白石跨时空创作",
      partner: "中国美术馆",
      year: "2023",
      category: "艺术家",
      image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&w=800&q=80",
      description: "以齐白石的经典作品「荔枝图」为灵感，融合掐丝珐琅工艺与水墨画风格，创造出兼具传统与现代审美的艺术珍品。"
    },
    {
      id: "collab-3",
      name: "华为Mate系列定制珐琅彩手机壳",
      partner: "华为消费者业务",
      year: "2022",
      category: "企业",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80",
      description: "为华为Mate系列旗舰手机打造限量版掐丝珐琅手机壳，将科技与非遗完美结合，展现东方美学与现代设计的和谐统一。"
    },
    {
      id: "collab-4",
      name: "苏州博物馆「十二月花神图」文创",
      partner: "苏州博物馆",
      year: "2024",
      category: "文博机构",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
      description: "与苏州博物馆合作，以馆藏《十二月花神图》为灵感，推出限量掐丝珐琅文创系列，融合江南美学与非遗技艺。"
    },
    {
      id: "collab-5",
      name: "茅台「国酿1935」定制礼盒",
      partner: "贵州茅台集团",
      year: "2022",
      category: "企业",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80",
      description: "为茅台「国酿1935」高端系列定制掐丝珐琅装饰礼盒，融合酒文化与非遗艺术，打造国礼级别的收藏珍品。"
    },
    {
      id: "collab-6",
      name: "「禅心」系列与少林寺文化合作",
      partner: "少林寺文化传播中心",
      year: "2021",
      category: "文博机构",
      image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&w=800&q=80",
      description: "与少林寺文化传播中心合作，以禅宗思想为核心，创作掐丝珐琅「禅心」系列，传递东方禅意与精神境界。"
    }
  ];

  // Featured project (first one)
  const featuredProject = collaborationProjects[0];
  // Other projects
  const otherProjects = collaborationProjects.slice(1);

  return (
    <MainLayout>
      <section className="pt-20 pb-16 bg-beige-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 opacity-0 animate-fade-in">
              合作与定制
              <span className="block text-xl font-garamond mt-2 text-beige-600">Collaborations & Customization</span>
            </h1>
            <p className="text-lg text-beige-700 mb-8 opacity-0 animate-fade-in-delayed">
              跨界融合，共创非遗新生
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container-custom">
          <p className="text-beige-800 max-w-3xl mx-auto text-center mb-16">
            聆花文化，以开放的姿态，融汇多元创意。我们不仅与国内外知名品牌、艺术家及文博机构深度合作，联袂创作跨界艺术品，
            更面向个人与企业提供高端掐丝珐琅定制服务。无论是独一无二的艺术收藏，还是彰显品位的企业礼赠，
            聆花都将以精湛工艺与原创设计，为您呈现专属的东方美学臻品。
          </p>

          {/* Featured Collaboration */}
          <div className="mb-20">
            <h2 className="text-2xl mb-10 text-center">代表合作</h2>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <AnimatedImage 
                  src={featuredProject.image}
                  alt={featuredProject.name}
                  className="image-frame"
                />
              </div>
              <div>
                <Badge className="mb-3 bg-seal-600">{featuredProject.category}</Badge>
                <h3 className="text-2xl mb-2">{featuredProject.name}</h3>
                <p className="text-beige-600 mb-6">合作方: {featuredProject.partner} | {featuredProject.year}</p>
                <p className="text-beige-800 mb-8">
                  {featuredProject.description}
                </p>
                <Link to={`/collaboration/${featuredProject.id}`} className="px-8 py-3 bg-seal-600 text-white rounded-md hover:bg-seal-700 transition-colors inline-block">
                  查看详情
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Collaborations */}
      <section className="py-20 bg-beige-50">
        <div className="container-custom">
          <h2 className="text-2xl mb-10 text-center">合作案例</h2>
          
          {/* Categories */}
          <div className="flex justify-center mb-10">
            <div className="flex space-x-1 bg-white rounded-full p-1 shadow-sm">
              {collaborationCategories.map((category, index) => (
                <button 
                  key={index}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    index === 0 ? "bg-seal-600 text-white" : "hover:bg-beige-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Projects Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {otherProjects.map((project) => (
              <Link 
                key={project.id} 
                to={`/collaboration/${project.id}`}
                className="group bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <AspectRatio ratio={4/3}>
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </AspectRatio>
                <div className="p-6">
                  <Badge className="mb-2 bg-seal-600">{project.category}</Badge>
                  <h3 className="text-lg mb-2 group-hover:text-seal-600 transition-colors">{project.name}</h3>
                  <p className="text-beige-600 text-sm mb-3">合作方: {project.partner}</p>
                  <p className="text-beige-700 text-sm line-clamp-2">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Service */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-2xl mb-10 text-center">专属定制</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <AnimatedImage 
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80"
                alt="聆花定制服务"
                className="image-frame"
              />
            </div>
            <div>
              <h3 className="text-xl mb-6">匠心为您，专属定制</h3>
              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="font-medium mb-2">服务对象</h4>
                  <p className="text-beige-700">个人收藏家、高净值家庭、企业机构、设计师等。</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">定制范围</h4>
                  <p className="text-beige-700">艺术臻品（唐卡、摆件、挂画）、高端饰品、企业形象礼品、空间艺术装置等。</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">定制流程</h4>
                  <ol className="text-beige-700 space-y-2 list-decimal list-inside">
                    <li>需求沟通</li>
                    <li>方案设计</li>
                    <li>样品确认（如需）</li>
                    <li>精工制作</li>
                    <li>品质检验</li>
                    <li>交付验收</li>
                  </ol>
                </div>
                <div>
                  <h4 className="font-medium mb-2">服务承诺</h4>
                  <p className="text-beige-700">原创设计、纯正工艺、品质保障、专属服务。</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="px-8 py-3 bg-seal-600 text-white rounded-md hover:bg-seal-700 transition-colors text-center">
                  洽谈合作
                </Link>
                <Link to="/contact" className="px-8 py-3 border border-seal-600 text-seal-600 rounded-md hover:bg-seal-50 transition-colors text-center">
                  定制专属臻品
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Collaboration;
