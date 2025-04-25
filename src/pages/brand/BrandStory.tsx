
import MainLayout from "@/components/Layout/MainLayout";
import AnimatedImage from "@/components/UI/AnimatedImage";

const BrandStory = () => {
  return (
    <MainLayout>
      <section className="pt-20 pb-16 bg-beige-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 opacity-0 animate-fade-in">
              品牌故事
              <span className="block text-xl font-garamond mt-2 text-beige-600">Brand Story</span>
            </h1>
            <p className="text-lg text-beige-700 mb-8 opacity-0 animate-fade-in-delayed">
              让非遗走进生活，用匠心温暖时光
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <AnimatedImage
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80"
                alt="品牌故事"
                className="image-frame"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-3">源起</h3>
                <p className="text-beige-800">
                  景泰蓝，亦称"铜胎掐丝珐琅"，六百年皇家气韵，凝结东方工艺美学的巅峰。它曾是深宫秘藏，象征尊贵与典雅。
                </p>
              </div>
              <div>
                <h3 className="text-xl mb-3">使命</h3>
                <p className="text-beige-800">
                  在现代社会，聆花文化肩负"让非遗走进生活"的使命，致力于将这门古老技艺与当代审美相融合，赋予其新的生命力。
                </p>
              </div>
              <div>
                <h3 className="text-xl mb-3">愿景</h3>
                <p className="text-beige-800">
                  我们立志成为最懂东方美学的公司，创造最有温度的非遗产品，打造最受信赖的掐丝珐琅艺术品牌，向世界讲好中国故事。
                </p>
              </div>
              <div>
                <h3 className="text-xl mb-3">行动</h3>
                <p className="text-beige-800">
                  通过创新工艺、现代设计和文化传播，聆花正努力让掐丝珐琅不再是博物馆里的陈设，而是能融入人们衣食住行的生活美学载体。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default BrandStory;
