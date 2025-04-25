
import MainLayout from "@/components/Layout/MainLayout";
import AnimatedImage from "@/components/UI/AnimatedImage";

const Founder = () => {
  return (
    <MainLayout>
      <section className="pt-20 pb-16 bg-beige-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 opacity-0 animate-fade-in">
              创始人
              <span className="block text-xl font-garamond mt-2 text-beige-600">Founder</span>
            </h1>
            <p className="text-lg text-beige-700 mb-8 opacity-0 animate-fade-in-delayed">
              聆花（邓汕）· 掐丝珐琅艺术传承者与创新者
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl mb-4">核心身份</h2>
                  <p className="text-beige-800">
                    聆花，本名邓汕，掐丝珐琅艺术传承者与创新者，聆花文化品牌创始人。
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl mb-4">艺术之路</h2>
                  <ul className="space-y-4 text-beige-800">
                    <li>· 2006年，远赴西藏圣地，于拉萨大昭寺拜师学艺，潜心研习传统唐卡绘画。</li>
                    <li>· 2012年，开创性地将掐丝珐琅工艺与唐卡艺术融合，创作出独具风格的掐丝珐琅唐卡。</li>
                    <li>· 16年专注，潜心于掐丝珐琅艺术的研究与创新，探索传统技艺的当代可能性。</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl mb-4">创新贡献</h2>
                  <ul className="space-y-4 text-beige-800">
                    <li>· 开创"固釉掐丝珐琅"新工艺，荣获国家专利。</li>
                    <li>· 建立现代掐丝珐琅工艺体系，推动非遗的标准化与创新发展。</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <AnimatedImage
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80"
                alt="聆花（邓汕）"
                className="image-frame"
              />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Founder;
