
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ArtisticProcess = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const craftSteps = [
    {
      id: 0,
      title: "制胎",
      description: "以优质铜片为基础，精心锤打塑形，形成作品的骨架。",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 1,
      title: "掐丝",
      description: "用细若发丝的扁铜丝在胎体上掐出纹样，巧夺天工地勾勒出图案轮廓。",
      image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "点蓝",
      description: "将研制的彩色珐琅釉料细致填入铜丝格子中，形成缤纷色彩。",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "烧蓝",
      description: "置于800℃高温烧制，使珐琅釉料熔化并与铜胎牢固结合。",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "磨光",
      description: "通过多次打磨抛光，使作品表面平整光滑，釉面晶莹剔透。",
      image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-2xl mb-3">匠心工艺</h2>
          <p className="text-beige-700 max-w-2xl mx-auto">
            一件掐丝珐琅作品，需经历108道工序，每一步都蕴含匠人数百年传承的智慧与耐心
          </p>
        </div>
        
        <div className="grid md:grid-cols-7 gap-6 items-center">
          {/* 步骤指示器 */}
          <div className="md:col-span-2">
            <div className="space-y-6">
              {craftSteps.map((step, index) => (
                <div 
                  key={step.id}
                  className={`cursor-pointer transition-all duration-300 p-4 rounded-lg ${
                    activeStep === index 
                      ? 'bg-beige-100 shadow-sm' 
                      : 'hover:bg-beige-50'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="flex items-center mb-2">
                    <div 
                      className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                        activeStep === index 
                          ? 'bg-seal-600 text-white' 
                          : 'bg-beige-200 text-beige-700'
                      }`}
                    >
                      {index + 1}
                    </div>
                    <h3 className={`font-medium ${
                      activeStep === index ? 'text-seal-600' : 'text-beige-800'
                    }`}>{step.title}</h3>
                  </div>
                  {activeStep === index && (
                    <p className="text-sm text-beige-700 pl-11">{step.description}</p>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-8 pl-11">
              <Link 
                to="/about/craft" 
                className="text-seal-600 font-medium hover:underline inline-flex items-center"
              >
                了解更多工艺细节
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* 图片展示 */}
          <div className="md:col-span-5 relative h-[400px] overflow-hidden rounded-lg">
            {craftSteps.map((step, index) => (
              <div
                key={step.id}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  activeStep === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <img
                  src={step.image}
                  alt={`${step.title}工艺展示`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                    <p className="text-white/80">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtisticProcess;
