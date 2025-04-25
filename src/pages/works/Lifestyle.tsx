
import MainLayout from "@/components/Layout/MainLayout";
import AnimatedImage from "@/components/UI/AnimatedImage";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface LifestyleItem {
  id: string;
  name: string;
  series: string;
  image: string;
  description: string;
  category: string;
}

const Lifestyle = () => {
  const categories = ["全部", "珐琅彩饰", "家居摆件", "文创礼品"];
  
  const lifestyleItems: LifestyleItem[] = [
    {
      id: "item-1",
      name: "「花语」系列珐琅彩手链",
      series: "花语系列",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80",
      description: "以传统花卉为灵感，巧妙融合掐丝珐琅工艺与现代首饰设计，呈现出典雅脱俗的东方美学。",
      category: "珐琅彩饰"
    },
    {
      id: "item-2",
      name: "「君子兰」珐琅胸针",
      series: "花卉系列",
      image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&w=800&q=80",
      description: "以君子兰为主题，象征着高洁、典雅的品格，是送礼或日常佩戴的理想之选。",
      category: "珐琅彩饰"
    },
    {
      id: "item-3",
      name: "「山水」掐丝珐琅茶杯",
      series: "品茗系列",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80",
      description: "将传统山水画意境融入掐丝珐琅工艺，每一杯茶都是一次艺术与文化的享受。",
      category: "家居摆件"
    },
    {
      id: "item-4",
      name: "「祥云」珐琅彩餐垫",
      series: "家宴系列",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
      description: "以传统祥云纹为主题，为您的餐桌增添一抹东方雅韵，提升用餐体验。",
      category: "家居摆件"
    },
    {
      id: "item-5",
      name: "「四季花鸟」掐丝珐琅书签",
      series: "文房系列",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80",
      description: "以四季花鸟为题材，将传统与实用完美结合，是读书人的雅致伴侣。",
      category: "文创礼品"
    },
    {
      id: "item-6",
      name: "「福寿」珐琅彩香插",
      series: "居室系列",
      image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&w=800&q=80",
      description: "以传统福寿图案为灵感，为您的居室增添一抹东方禅意与美好祝愿。",
      category: "家居摆件"
    }
  ];

  // Featured items (first two)
  const featuredItems = lifestyleItems.slice(0, 2);
  // Regular items (remaining)
  const regularItems = lifestyleItems.slice(2);

  return (
    <MainLayout>
      <section className="pt-20 pb-16 bg-beige-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 opacity-0 animate-fade-in">
              文创生活
              <span className="block text-xl font-garamond mt-2 text-beige-600">Creative Life</span>
            </h1>
            <p className="text-lg text-beige-700 mb-8 opacity-0 animate-fade-in-delayed">
              将掐丝珐琅的传世之美，融入现代生活场景
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container-custom">
          <p className="text-beige-800 max-w-3xl mx-auto text-center mb-16">
            聆花非遗文创系列，以创新设计演绎传统工艺，打造兼具实用性与艺术性的东方珐琅彩饰品、家居摆件及定制礼品。
            为追求品质生活的您，带来触手可及的东方美学与文化温度。
          </p>

          {/* Featured Items */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {featuredItems.map((item) => (
              <div key={item.id} className="bg-white rounded-md overflow-hidden shadow-sm">
                <AspectRatio ratio={4/3}>
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
                <div className="p-6">
                  <span className="text-sm text-seal-600 mb-2 inline-block">{item.series}</span>
                  <h3 className="text-xl mb-3">{item.name}</h3>
                  <p className="text-beige-700 mb-4">{item.description}</p>
                  <Link to={`/lifestyle/${item.id}`} className="text-seal-600 hover:text-seal-700 underline">
                    查看详情
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Items */}
      <section className="py-20 bg-beige-50">
        <div className="container-custom">
          <h2 className="text-2xl mb-10 text-center">全部产品</h2>
          
          {/* Categories */}
          <div className="flex justify-center mb-10">
            <div className="flex space-x-1 bg-white rounded-full p-1 shadow-sm">
              {categories.map((category, index) => (
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
          
          {/* Items Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {regularItems.map((item) => (
              <Link 
                key={item.id} 
                to={`/lifestyle/${item.id}`}
                className="group bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <AspectRatio ratio={1}>
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </AspectRatio>
                <div className="p-6">
                  <span className="text-sm text-seal-600 mb-1 inline-block">{item.series}</span>
                  <h3 className="text-lg mb-2 group-hover:text-seal-600 transition-colors">{item.name}</h3>
                  <p className="text-beige-700 text-sm line-clamp-2">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Order */}
      <section className="py-20">
        <div className="container-custom text-center">
          <h2 className="text-2xl mb-6">定制服务</h2>
          <p className="text-beige-800 max-w-2xl mx-auto mb-8">
            聆花文化提供掐丝珐琅产品定制服务，无论是企业礼品、个人收藏还是特殊场合的纪念品，
            我们都能根据您的需求，打造独具东方美学韵味的非遗艺术品。
          </p>
          <div className="inline-flex flex-col md:flex-row justify-center gap-4">
            <Link to="/contact" className="px-8 py-3 bg-seal-600 text-white rounded-md hover:bg-seal-700 transition-colors">
              咨询定制
            </Link>
            <Link to="/contact" className="px-8 py-3 border border-seal-600 text-seal-600 rounded-md hover:bg-seal-50 transition-colors">
              了解购买渠道
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Lifestyle;
