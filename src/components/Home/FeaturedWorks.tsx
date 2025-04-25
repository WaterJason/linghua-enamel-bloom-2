
import { useState } from "react";
import AnimatedImage from "../UI/AnimatedImage";

const FeaturedWorks = () => {
  // Simulated image states for the interactive feature
  const [activeImage, setActiveImage] = useState(0);
  const images = [
    "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80"
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container-custom">
        <div className="mb-16">
          <h3 className="section-title">
            <span>触碰 · 光华流转</span>
            <span className="en-text ml-2">Touch · Flowing Radiance</span>
          </h3>
          <p className="text-beige-700 max-w-2xl">
            聆花文化专利"固釉掐丝珐琅"工艺，赋予古老技艺新生光彩，色泽恒久，玲珑剔透。
          </p>
        </div>

        <div className="asymmetric-layout items-center">
          <div className="asymmetric-layout-left">
            <div className="relative">
              {/* Interactive image showcase */}
              <div className="image-frame">
                <img 
                  src={images[activeImage]} 
                  alt="珐琅作品" 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Interactive controls */}
              <div className="mt-6 flex justify-center">
                <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 inline-flex space-x-2">
                  <span className="text-sm text-beige-700">拖动光影</span>
                  <input
                    type="range"
                    min="0"
                    max="2"
                    step="1"
                    value={activeImage}
                    onChange={(e) => setActiveImage(parseInt(e.target.value))}
                    className="w-48 accent-azure-600"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="asymmetric-layout-right mt-8 md:mt-0">
            <h4 className="text-xl md:text-2xl mb-4">亲身感受聆花"固釉"工艺带来的宝石般质感与光泽变幻</h4>
            <p className="text-beige-700 mb-6">
              聆花文化通过创新专利的"固釉"工艺，让传统掐丝珐琅焕发新生。
              这一突破性的工艺使作品拥有更加晶莹剔透的效果，同时保留了传统技艺的精湛和韵味。
            </p>
            <a href="#" className="highlight-text">了解工艺细节</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;
