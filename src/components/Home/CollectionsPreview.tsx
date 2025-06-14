
import { Link } from "react-router-dom";
import AnimatedImage from "../UI/AnimatedImage";

const CollectionsPreview = () => {
  const collections = [
    {
      title: "艺术臻品",
      enTitle: "Art Collections", 
      description: "收藏级掐丝珐琅艺术品，传承东方美学精髓",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&q=80",
      link: "/collections"
    },
    {
      title: "文创生活",
      enTitle: "Lifestyle Products",
      description: "将非遗艺术融入日常生活的精美文创产品", 
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=600&q=80",
      link: "/lifestyle"
    },
    {
      title: "定制服务",
      enTitle: "Custom Design",
      description: "专属定制服务，打造独一无二的珐琅艺术品",
      image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&w=600&q=80", 
      link: "/collaboration"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">
            匠心之作 · 艺术典藏
          </h2>
          <p className="text-lg text-beige-700 max-w-3xl mx-auto">
            每一件聆花作品都承载着深厚的文化内涵与精湛的工艺技法
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {collections.map((collection, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <AnimatedImage
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl mb-2">
                {collection.title}
                <span className="block text-sm font-garamond italic text-beige-600 mt-1">
                  {collection.enTitle}  
                </span>
              </h3>
              <p className="text-beige-700 mb-4">{collection.description}</p>
              <Link 
                to={collection.link}
                className="highlight-text"
              >
                探索更多 →
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/collections"
            className="btn-primary"
          >
            查看全部作品
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CollectionsPreview;
