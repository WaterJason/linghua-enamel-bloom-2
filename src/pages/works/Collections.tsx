
import MainLayout from "@/components/Layout/MainLayout";
import AnimatedImage from "@/components/UI/AnimatedImage";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ArtCollection {
  id: string;
  name: string;
  artist: string;
  year: string;
  edition: string;
  image: string;
  featured?: boolean;
}

const Collections = () => {
  const artCollections: ArtCollection[] = [
    {
      id: "art-1",
      name: "掐丝珐琅唐卡「观音」",
      artist: "聆花 (邓汕)",
      year: "2023",
      edition: "限量10件",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: "art-2",
      name: "「荔枝图」与齐白石跨时空创作",
      artist: "聆花 (邓汕)",
      year: "2023",
      edition: "限量5件",
      image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "art-3",
      name: "「梦」与毕加索跨时空联名",
      artist: "聆花 (邓汕)",
      year: "2023",
      edition: "限量8件",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "art-4",
      name: "掐丝珐琅「九鱼图」",
      artist: "聆花 (邓汕)",
      year: "2023",
      edition: "限量12件",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "art-5",
      name: "「玉兰孔雀」",
      artist: "聆花 (邓汕)",
      year: "2023",
      edition: "限量7件",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "art-6",
      name: "掐丝珐琅「百鸟朝凤」",
      artist: "聆花 (邓汕)",
      year: "2022",
      edition: "限量15件",
      image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&w=800&q=80"
    }
  ];

  // Get featured collection
  const featuredCollection = artCollections.find(item => item.featured) || artCollections[0];
  // Get regular collections (excluding the featured one)
  const regularCollections = artCollections.filter(item => item.id !== featuredCollection.id);

  return (
    <MainLayout>
      <section className="pt-20 pb-16 bg-beige-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 opacity-0 animate-fade-in">
              艺术臻品
              <span className="block text-xl font-garamond mt-2 text-beige-600">Art Collections</span>
            </h1>
            <p className="text-lg text-beige-700 mb-8 opacity-0 animate-fade-in-delayed">
              传承千年瑰宝，续写当代华章
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container-custom">
          <p className="text-beige-800 max-w-3xl mx-auto text-center mb-16">
            聆花艺术臻品，为高端收藏家、艺术爱好者及追求极致东方美学的您，呈现纯手工打造的掐丝珐琅艺术杰作。
            每一件作品皆由大师亲制，限量发行，附有唯一编号与收藏证书，兼具深厚文化内涵与非凡艺术价值。
          </p>

          {/* Featured Collection */}
          <div className="mb-20">
            <h2 className="text-2xl mb-10 text-center">代表作品</h2>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <AnimatedImage 
                  src={featuredCollection.image}
                  alt={featuredCollection.name}
                  className="image-frame"
                />
              </div>
              <div>
                <h3 className="text-2xl mb-6">{featuredCollection.name}</h3>
                <div className="space-y-4 mb-8">
                  <div className="grid grid-cols-4 gap-4">
                    <span className="text-beige-600">艺术家</span>
                    <span className="col-span-3">{featuredCollection.artist}</span>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    <span className="text-beige-600">创作年份</span>
                    <span className="col-span-3">{featuredCollection.year}</span>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    <span className="text-beige-600">限量编号</span>
                    <span className="col-span-3">{featuredCollection.edition}</span>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    <span className="text-beige-600">材质</span>
                    <span className="col-span-3">紫铜胎、镀金、天然矿物珐琅釉料、固釉材料、黑檀木底座</span>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    <span className="text-beige-600">工艺</span>
                    <span className="col-span-3">纯手工掐丝珐琅、固釉掐丝珐琅工艺</span>
                  </div>
                </div>
                <p className="text-beige-800 mb-8">
                  这件作品融合了传统掐丝珐琅工艺与现代艺术审美，展现了东方文化的精髓与当代艺术的创新。
                  精美的铜丝勾勒出流畅的线条，瑰丽的珐琅釉彩呈现出丰富的色彩层次，整体呈现出典雅华贵的艺术气质。
                </p>
                <Link to={`/collections/${featuredCollection.id}`} className="inline-flex items-center text-seal-600 hover:text-seal-700">
                  查看详情 <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Collections */}
      <section className="py-20 bg-beige-50">
        <div className="container-custom">
          <h2 className="text-2xl mb-10 text-center">全部作品</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {regularCollections.map((collection) => (
              <Link 
                key={collection.id} 
                to={`/collections/${collection.id}`}
                className="group bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={collection.image} 
                    alt={collection.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-3 group-hover:text-seal-600 transition-colors">{collection.name}</h3>
                  <div className="flex justify-between items-center text-beige-600 mb-3">
                    <span>{collection.artist}</span>
                    <span>{collection.year}</span>
                  </div>
                  <div className="text-sm text-beige-500">{collection.edition}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Collect Info */}
      <section className="py-20">
        <div className="container-custom text-center">
          <h2 className="text-2xl mb-6">收藏咨询</h2>
          <p className="text-beige-800 max-w-2xl mx-auto mb-8">
            如果您对聆花艺术臻品感兴趣，欢迎联系我们的收藏顾问，获取更多作品信息或预约鉴赏。
            每件作品均附有官方收藏证书与艺术档案，确保收藏价值与真实性。
          </p>
          <div className="inline-flex flex-col md:flex-row justify-center gap-4">
            <Link to="/contact" className="px-8 py-3 bg-seal-600 text-white rounded-md hover:bg-seal-700 transition-colors">
              收藏咨询
            </Link>
            <Link to="/contact" className="px-8 py-3 border border-seal-600 text-seal-600 rounded-md hover:bg-seal-50 transition-colors">
              预约鉴赏
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Collections;
