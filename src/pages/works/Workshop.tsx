
import MainLayout from "@/components/Layout/MainLayout";
import AnimatedImage from "@/components/UI/AnimatedImage";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, Users } from "lucide-react";

const Workshop = () => {
  const workshopPrograms = [
    {
      id: "program-1",
      title: "初识掐丝珐琅 · 个人体验",
      duration: "约2小时",
      participants: "1人起",
      description: "适合对掐丝珐琅艺术感兴趣的初学者，在导师指导下完成一件小型掐丝珐琅作品，体验非遗工艺的魅力。",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "program-2",
      title: "亲子手作 · 共创珐琅",
      duration: "约2.5小时",
      participants: "1成人+1儿童",
      description: "专为家庭设计的亲子互动体验，在制作掐丝珐琅作品的过程中增进亲子感情，培养孩子的动手能力和审美观。",
      image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "program-3",
      title: "企业团建 · 匠心凝聚",
      duration: "可定制",
      participants: "10人起",
      description: "为企业团队量身定制的非遗体验活动，通过共同完成掐丝珐琅艺术品，培养团队协作精神和创新思维。",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <MainLayout>
      <section className="pt-20 pb-16 bg-beige-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 opacity-0 animate-fade-in">
              手作体验
              <span className="block text-xl font-garamond mt-2 text-beige-600">Workshop Experience</span>
            </h1>
            <p className="text-lg text-beige-700 mb-8 opacity-0 animate-fade-in-delayed">
              亲手触摸非遗，感受指尖传承
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <AnimatedImage 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80"
                alt="手作体验"
                className="image-frame"
              />
            </div>
            <div>
              <h2 className="text-2xl mb-6">体验掐丝珐琅的创作魅力</h2>
              <p className="text-beige-800 mb-4">
                在聆花手作馆，开启一场沉浸式的非遗文化之旅。我们提供专业的掐丝珐琅手作体验课程与团建活动，
                让您在专业导师的指导下，亲手体验掐丝、点蓝的乐趣，创作一件独一无二的珐琅艺术品，感受指尖传承的温度与魅力。
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-beige-50 p-4 rounded-md">
                  <h3 className="text-lg mb-2">专业指导</h3>
                  <p className="text-beige-700 text-sm">资深导师一对一教学</p>
                </div>
                <div className="bg-beige-50 p-4 rounded-md">
                  <h3 className="text-lg mb-2">材料齐全</h3>
                  <p className="text-beige-700 text-sm">专业工具与优质材料</p>
                </div>
                <div className="bg-beige-50 p-4 rounded-md">
                  <h3 className="text-lg mb-2">作品带回</h3>
                  <p className="text-beige-700 text-sm">成品可带回收藏</p>
                </div>
                <div className="bg-beige-50 p-4 rounded-md">
                  <h3 className="text-lg mb-2">体验证书</h3>
                  <p className="text-beige-700 text-sm">官方体验纪念证书</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Programs */}
      <section className="py-20 bg-beige-50">
        <div className="container-custom">
          <h2 className="text-2xl mb-10 text-center">体验项目</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {workshopPrograms.map((program) => (
              <div key={program.id} className="bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-4">{program.title}</h3>
                  <div className="flex items-center text-beige-600 mb-2">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{program.duration}</span>
                  </div>
                  <div className="flex items-center text-beige-600 mb-4">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="text-sm">{program.participants}</span>
                  </div>
                  <p className="text-beige-700 mb-6">{program.description}</p>
                  <Button className="w-full bg-seal-600 hover:bg-seal-700">
                    立即预约
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environment */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-2xl mb-10 text-center">手作环境</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <AnimatedImage 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80"
                alt="手作体验环境"
                className="image-frame h-full"
              />
            </div>
            <div className="grid grid-rows-2 gap-6">
              <AnimatedImage 
                src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&w=800&q=80"
                alt="手作体验环境"
                className="image-frame h-full"
                delay={200}
              />
              <AnimatedImage 
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80"
                alt="手作体验环境"
                className="image-frame h-full"
                delay={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section className="py-20 bg-beige-50">
        <div className="container-custom text-center">
          <h2 className="text-2xl mb-6">预约体验</h2>
          <p className="text-beige-800 max-w-2xl mx-auto mb-8">
            欢迎来到聆花手作馆，开启掐丝珐琅艺术体验之旅。您可以通过以下方式预约体验课程或咨询企业团建方案。
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button className="bg-seal-600 hover:bg-seal-700">
              立即预约
            </Button>
            <Button variant="outline" className="border-seal-600 text-seal-600 hover:bg-seal-50">
              咨询团建方案
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Workshop;
