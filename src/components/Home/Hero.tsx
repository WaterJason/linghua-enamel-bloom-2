
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { t } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  // Animation states
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showInnovation, setShowInnovation] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const titleTimer = setTimeout(() => setShowTitle(true), 400);
    const subtitleTimer = setTimeout(() => setShowSubtitle(true), 900);
    const innovationTimer = setTimeout(() => setShowInnovation(true), 1200);
    const buttonTimer = setTimeout(() => setShowButton(true), 1500);

    return () => {
      clearTimeout(titleTimer);
      clearTimeout(subtitleTimer);
      clearTimeout(innovationTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-transparent to-beige-50/50">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0 opacity-80">
        <div className="absolute inset-0 bg-gradient-to-r from-beige-900/20 to-transparent" />
        <img
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=3840&q=80"
          alt="背景"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-12">
        <div className="max-w-3xl">
          <h1 
            className={`text-white mb-4 opacity-0 transform ${
              showTitle ? "opacity-100 translate-y-0" : "translate-y-8"
            } transition-all duration-1000 ease-out`}
          >
            <span className="font-noto-serif-sc text-4xl md:text-5xl lg:text-6xl">
              {t('brand.name')}
            </span>
            <br />
            <span className="block text-2xl md:text-3xl lg:text-4xl mt-3">
              {t('brand.slogan')}
            </span>
          </h1>

          {/* 创新工艺亮点 - 突出显示 */}
          <div 
            className={`bg-white/20 backdrop-blur-sm px-5 py-4 rounded-md border-l-4 border-seal-500 mb-8 max-w-xl opacity-0 transform ${
              showInnovation ? "opacity-100 translate-y-0" : "translate-y-8"
            } transition-all duration-1000 ease-out delay-200`}
          >
            <h2 className="text-white text-xl md:text-2xl mb-2 font-medium">
              {t('brand.innovation')}
            </h2>
            <p className="text-white/90">
              色泽饱满耐久 · 晶莹通透 · 轻盈坚固 · 宝石级质感
            </p>
          </div>
          
          <p 
            className={`text-white/90 md:text-lg mb-8 max-w-xl opacity-0 transform ${
              showSubtitle ? "opacity-100 translate-y-0" : "translate-y-8"
            } transition-all duration-1000 ease-out`}
          >
            传承600年宫廷技艺，融合当代东方美学。
            探索聆花"固釉掐丝珐琅"的创新魅力，见证非遗在指尖绽放宝石般璀璨光芒。
          </p>
          
          <div 
            className={`space-x-4 opacity-0 transform ${
              showButton ? "opacity-100 translate-y-0" : "translate-y-8"
            } transition-all duration-1000 ease-out`}
          >
            <Link to="/workshop">
              <Button size="lg" variant="default" className="bg-seal-600 hover:bg-seal-700">
                立即预约体验
              </Button>
            </Link>
            <Link to="/about/craft">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                了解工艺
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToNext}
            className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center hover:bg-white/50 transition-colors"
            aria-label="向下滚动"
          >
            <ArrowDown className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Vertical Chinese text */}
        <div className="hidden lg:block absolute right-16 top-1/2 -translate-y-1/2 vertical-text text-white/80">
          <p className="text-lg tracking-widest">固釉生辉，东方美学新境。</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
