
import MainLayout from "@/components/Layout/MainLayout";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Milestones = () => {
  const milestones = [
    { year: "2006", title: "艺术启蒙", description: "聆花远赴西藏学习唐卡。" },
    { year: "2012", title: "非遗融合", description: "首创掐丝珐琅唐卡。" },
    { year: "2017", title: "创立聆花文化", description: "开启非遗传承创新之路。" },
    { year: "2020", title: "文化融合", description: "与国潮品牌东来也合作。" },
    { 
      year: "2023", 
      title: "文化出海", 
      description: "跨时空与毕加索联名《梦》。深圳旗舰店开业。与齐白石跨时空创作《荔枝图》，获国家工艺美术金奖。" 
    },
    { 
      year: "2024", 
      title: "手作艺术空间启用", 
      description: "全国首家掐丝珐琅馆。" 
    }
  ];

  return (
    <MainLayout>
      <section className="pt-20 pb-16 bg-beige-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 opacity-0 animate-fade-in">
              品牌历程
              <span className="block text-xl font-garamond mt-2 text-beige-600">Milestones</span>
            </h1>
            <p className="text-lg text-beige-700 mb-8 opacity-0 animate-fade-in-delayed">
              一路生花
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute h-full w-0.5 bg-beige-300 left-0 md:left-1/2 transform -translate-x-1/2"></div>
            
            {/* Timeline items */}
            {milestones.map((item, index) => (
              <div key={item.year} className={`relative flex mb-12 md:mb-24 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}>
                {/* Content */}
                <div className="w-full md:w-5/12 px-4 py-6 md:py-0 ml-8 md:ml-0">
                  <div className="bg-white p-6 rounded-md shadow-sm opacity-0 animate-fade-in" style={{animationDelay: `${index * 200}ms`}}>
                    <span className="text-seal-600 text-sm">{item.year}</span>
                    <h4 className="text-lg mb-2">{item.title}</h4>
                    <p className="text-beige-700">{item.description}</p>
                  </div>
                </div>
                
                {/* Circle marker */}
                <div className="absolute -left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-seal-500 mt-6 md:mt-0"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Milestones;
