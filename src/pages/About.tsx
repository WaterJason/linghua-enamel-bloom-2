
import MainLayout from "../components/Layout/MainLayout";
import AnimatedImage from "../components/UI/AnimatedImage";

const About = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-beige-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 opacity-0 animate-fade-in">
              关于聆花
              <span className="block text-xl font-garamond mt-2 text-beige-600">About LINGHUA</span>
            </h1>
            <p className="text-lg text-beige-700 mb-8 opacity-0 animate-fade-in-delayed">
              让非遗走进生活，用匠心温暖时光
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="section-title mb-10">
            <span>品牌故事 · 让非遗走进生活</span>
          </h2>

          <div className="asymmetric-layout items-center">
            <div className="asymmetric-layout-left">
              <AnimatedImage 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80"
                alt="聆花品牌故事"
                className="image-frame"
              />
            </div>
            <div className="asymmetric-layout-right">
              <div className="space-y-4 text-beige-800">
                <p>
                  <strong className="text-foreground">源起：</strong>景泰蓝，亦称"铜胎掐丝珐琅"，六百年皇家气韵，凝结东方工艺美学的巅峰。它曾是深宫秘藏，象征尊贵与典雅。
                </p>
                <p>
                  <strong className="text-foreground">使命：</strong>在现代社会，聆花文化肩负"让非遗走进生活"的使命，致力于将这门古老技艺与当代审美相融合，赋予其新的生命力。
                </p>
                <p>
                  <strong className="text-foreground">愿景：</strong>我们立志成为最懂东方美学的公司，创造最有温度的非遗产品，打造最受信赖的掐丝珐琅艺术品牌，向世界讲好中国故事。
                </p>
                <p>
                  <strong className="text-foreground">行动：</strong>通过创新工艺、现代设计和文化传播，聆花正努力让掐丝珐琅不再是博物馆里的陈设，而是能融入人们衣食住行的生活美学载体。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-beige-50">
        <div className="container-custom">
          <h2 className="section-title mb-10">
            <span>创始人 · 聆花 (邓汕)</span>
          </h2>

          <div className="asymmetric-layout items-center">
            <div className="asymmetric-layout-right order-1 md:order-2">
              <AnimatedImage 
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80"
                alt="聆花（邓汕）"
                className="image-frame"
              />
            </div>
            <div className="asymmetric-layout-left order-2 md:order-1">
              <h3 className="text-xl mb-4">核心身份</h3>
              <p className="mb-6 text-beige-800">
                聆花，本名邓汕，掐丝珐琅艺术传承者与创新者，聆花文化品牌创始人。
              </p>

              <h3 className="text-xl mb-4">艺术之路</h3>
              <ul className="space-y-2 mb-6 text-beige-800">
                <li>· 2006年，远赴西藏圣地，于拉萨大昭寺拜师学艺，潜心研习传统唐卡绘画。</li>
                <li>· 2012年，开创性地将掐丝珐琅工艺与唐卡艺术融合，创作出独具风格的掐丝珐琅唐卡，奠定艺术创新之路。</li>
                <li>· 16年专注，潜心于掐丝珐琅艺术的研究与创新，探索传统技艺的当代可能性。</li>
              </ul>

              <h3 className="text-xl mb-4">创新贡献</h3>
              <ul className="space-y-2 text-beige-800">
                <li>· 开创"固釉掐丝珐琅"新工艺，荣获国家专利，解决了传统工艺的部分局限，带来独特的视觉效果。</li>
                <li>· 建立现代掐丝珐琅工艺体系，推动非遗的标准化与创新发展。</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Craft Section */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="section-title mb-10">
            <span>非遗工艺 · 百年传承与当代创新</span>
          </h2>

          <div className="mb-16">
            <h3 className="text-2xl mb-6">景泰蓝 · 铜胎掐丝珐琅的精髓</h3>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <AnimatedImage 
                  src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&w=800&q=80"
                  alt="传统景泰蓝工艺"
                  className="image-frame mb-6"
                />
              </div>
              <div className="flex items-center">
                <p className="text-beige-800">
                  传承600年的宫廷绝技，需经历制胎、掐丝、点蓝、烧蓝、磨光、镀金等六大核心工艺、108道繁复工序。
                  铜胎为骨，勾勒轮廓；千百根细若发丝的扁铜丝掐成筋脉；天然矿物釉料填充色彩灵魂；最后以鎏金点睛，方成一件流光溢彩的国之瑰宝。
                  每一道工序都凝聚着匠人的心血与智慧，是时间的艺术，也是耐心的修行。
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl mb-6">聆花创新 · 固釉掐丝珐琅的光芒</h3>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="order-2 md:order-1 flex items-center">
                <p className="text-beige-800">
                  在传承古法精髓的基础上，聆花文化潜心研发，开创荣获国家专利的"固釉掐丝珐琅"新工艺。
                  采用特殊调配的珐琅釉料与固化技术，无需传统高温反复烧制，色彩表现更稳定通透，能呈现出宝石般晶莹剔透的光泽质感。
                  其成品更加轻盈、坚固耐用，拓宽了掐丝珐琅的应用场景。
                  这项创新不仅提升了艺术表现力，也使得掐丝珐琅更易融入现代生活，是聆花对非遗"活态传承"的有力实践。
                </p>
              </div>
              <div className="order-1 md:order-2">
                <AnimatedImage 
                  src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80"
                  alt="聆花固釉创新工艺"
                  className="image-frame mb-6"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-20 bg-beige-50">
        <div className="container-custom">
          <h2 className="section-title mb-10">
            <span>品牌历程 · 一路生花</span>
          </h2>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute h-full w-0.5 bg-beige-300 left-0 md:left-1/2 transform -translate-x-1/2"></div>
            
            {/* Timeline items */}
            {[
              { year: "2006", title: "艺术启蒙", description: "聆花远赴西藏学习唐卡。" },
              { year: "2012", title: "非遗融合", description: "首创掐丝珐琅唐卡。" },
              { year: "2017", title: "创立聆花文化", description: "开启非遗传承创新之路。" },
              { year: "2020", title: "文化融合", description: "与国潮品牌东来也合作。" },
              { year: "2023", title: "文化出海", description: "跨时空与毕加索联名《梦》。深圳旗舰店开业。与齐白石跨时空创作《荔枝图》，获国家工艺美术金奖。" },
              { year: "2024", title: "手作艺术空间启用", description: "全国首家掐丝珐琅馆。" }
            ].map((item, index) => (
              <div key={item.year} className={`relative flex mb-12 md:mb-24 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}>
                {/* Content */}
                <div className="w-full md:w-5/12 px-4 py-6 md:py-0 ml-8 md:ml-0">
                  <div className="bg-white p-6 rounded-md shadow-sm">
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

export default About;
