
import { Link } from "react-router-dom";
import AnimatedImage from "../UI/AnimatedImage";

const BrandIntro = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl mb-6 text-tianqing-800">
              让非遗走进生活
              <span className="block text-lg font-garamond italic text-guanyao-600 mt-2">
                Bringing Heritage into Life
              </span>
            </h2>
            <div className="space-y-6 text-molin-800">
              <p className="text-lg leading-relaxed">
                聆花文化致力于传承与创新掐丝珐琅这一600年宫廷技艺，
                通过专利"固釉"工艺，让古老技艺焕发新生光彩。
              </p>
              <p className="leading-relaxed">
                我们相信，非遗不应仅存在于博物馆中，而应融入现代生活，
                成为温暖时光的艺术载体。每一件聆花作品，都承载着匠心传承与美育生活的理念。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  to="/about/story"
                  className="btn-primary"
                >
                  了解品牌故事
                </Link>
                <Link 
                  to="/about/craft"
                  className="btn-secondary"
                >
                  探索工艺奥秘
                </Link>
              </div>
            </div>
          </div>
          <div>
            <AnimatedImage
              src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80"
              alt="聆花掐丝珐琅艺术品"
              className="image-frame w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandIntro;
