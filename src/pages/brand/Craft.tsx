
import MainLayout from "@/components/Layout/MainLayout";
import AnimatedImage from "@/components/UI/AnimatedImage";

const Craft = () => {
  return (
    <MainLayout>
      <section className="pt-20 pb-16 bg-beige-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 opacity-0 animate-fade-in">
              非遗工艺
              <span className="block text-xl font-garamond mt-2 text-beige-600">The Art of Cloisonné</span>
            </h1>
            <p className="text-lg text-beige-700 mb-8 opacity-0 animate-fade-in-delayed">
              百年传承与当代创新
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="mb-20">
            <h2 className="text-2xl mb-10 text-center">景泰蓝 · 铜胎掐丝珐琅的精髓</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <AnimatedImage
                  src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&w=800&q=80"
                  alt="传统景泰蓝工艺"
                  className="image-frame"
                />
              </div>
              <div>
                <p className="text-beige-800 leading-relaxed">
                  传承600年的宫廷绝技，需经历制胎、掐丝、点蓝、烧蓝、磨光、镀金等六大核心工艺、108道繁复工序。
                  铜胎为骨，勾勒轮廓；千百根细若发丝的扁铜丝掐成筋脉；天然矿物釉料填充色彩灵魂；最后以鎏金点睛，方成一件流光溢彩的国之瑰宝。
                  每一道工序都凝聚着匠人的心血与智慧，是时间的艺术，也是耐心的修行。
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl mb-10 text-center">聆花创新 · 固釉掐丝珐琅的光芒</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <p className="text-beige-800 leading-relaxed">
                  在传承古法精髓的基础上，聆花文化潜心研发，开创荣获国家专利的"固釉掐丝珐琅"新工艺。
                  采用特殊调配的珐琅釉料与固化技术，无需传统高温反复烧制，色彩表现更稳定通透，能呈现出宝石般晶莹剔透的光泽质感。
                  其成品更加轻盈、坚固耐用，拓宽了掐丝珐琅的应用场景。
                  这项创新不仅提升了艺术表现力，也使得掐丝珐琅更易融入现代生活，是聆花对非遗"活态传承"的有力实践。
                </p>
              </div>
              <div className="order-1 md:order-2">
                <AnimatedImage
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80"
                  alt="聆花固釉创新工艺"
                  className="image-frame"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Craft;
