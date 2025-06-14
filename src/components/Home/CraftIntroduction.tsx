
import { Link } from "react-router-dom";
import AnimatedImage from "../UI/AnimatedImage";

const CraftIntroduction = () => {
  const craftSteps = [
    {
      step: "01",
      name: "制胎",
      description: "精选优质紫铜，锻造器型胎体"
    },
    {
      step: "02", 
      name: "掐丝",
      description: "细若发丝的铜丝勾勒精美图案"
    },
    {
      step: "03",
      name: "点釉",
      description: "天然矿物釉料填充色彩灵魂"
    },
    {
      step: "04",
      name: "固釉",
      description: "聆花专利工艺，宝石般质感"
    }
  ];

  return (
    <section className="py-20 bg-ruyao-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-tianqing-800">
            六百年宫廷技艺的当代演绎
          </h2>
          <p className="text-lg text-guanyao-700 max-w-3xl mx-auto">
            从传统景泰蓝到聆花创新"固釉"工艺，每道工序都凝聚着匠人的心血与智慧
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <AnimatedImage
              src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&w=800&q=80"
              alt="掐丝珐琅工艺制作过程"
              className="image-frame w-full"
            />
          </div>
          <div className="space-y-8">
            {craftSteps.map((step, index) => (
              <div key={step.step} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-geyao-600 text-white rounded-full flex items-center justify-center font-medium">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-tianqing-800">{step.name}</h3>
                  <p className="text-guanyao-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link 
            to="/about/craft"
            className="btn-primary"
          >
            深入了解工艺详情
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CraftIntroduction;
