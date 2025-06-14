
import { Link } from "react-router-dom";
import AnimatedImage from "../UI/AnimatedImage";
import { Users, Clock, Award } from "lucide-react";

const WorkshopIntro = () => {
  const features = [
    {
      icon: Users,
      title: "专业指导",
      description: "资深匠师全程指导，零基础也能创作精美作品"
    },
    {
      icon: Clock,
      title: "灵活安排", 
      description: "多种体验时长可选，适合个人及团体预约"
    },
    {
      icon: Award,
      title: "成果丰富",
      description: "完成属于自己的珐琅艺术品，收获满满成就感"
    }
  ];

  return (
    <section className="py-20 bg-beige-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl mb-6">
              亲手体验非遗之美
              <span className="block text-lg font-garamond italic text-beige-600 mt-2">
                Hands-on Heritage Experience
              </span>
            </h2>
            <p className="text-lg text-beige-800 mb-8">
              在聆花手作体验馆，您可以亲身感受掐丝珐琅的独特魅力，
              在专业老师的指导下，创作属于自己的珐琅艺术品。
            </p>
            
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-azure-100 rounded-full flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-azure-600" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1">{feature.title}</h3>
                    <p className="text-beige-700">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/workshop"
                className="btn-primary"
              >
                立即预约体验
              </Link>
              <Link 
                to="/workshop#pricing"
                className="btn-secondary"
              >
                查看体验详情
              </Link>
            </div>
          </div>
          <div>
            <AnimatedImage
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80"
              alt="掐丝珐琅手作体验"
              className="image-frame w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopIntro;
