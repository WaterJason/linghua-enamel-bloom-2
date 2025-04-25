
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  // Animation states
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const titleTimer = setTimeout(() => setShowTitle(true), 400);
    const subtitleTimer = setTimeout(() => setShowSubtitle(true), 900);
    const buttonTimer = setTimeout(() => setShowButton(true), 1400);

    return () => {
      clearTimeout(titleTimer);
      clearTimeout(subtitleTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

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
            className={`text-white mb-6 opacity-0 transform ${
              showTitle ? "opacity-100 translate-y-0" : "translate-y-8"
            } transition-all duration-1000 ease-out`}
          >
            <span className="font-noto-serif-sc">聆花：</span>
            <br />
            <span className="block text-3xl md:text-4xl lg:text-5xl mt-2">千年珐琅，当代光华。</span>
          </h1>
          
          <p 
            className={`text-white/90 md:text-lg mb-8 max-w-xl opacity-0 transform ${
              showSubtitle ? "opacity-100 translate-y-0" : "translate-y-8"
            } transition-all duration-1000 ease-out`}
          >
            传承600年宫廷技艺，融合当代东方美学。
            探索聆花"固釉掐丝珐琅"的创新魅力，见证非遗在指尖绽放宝石般璀璨光芒。
          </p>
          
          <div 
            className={`opacity-0 transform ${
              showButton ? "opacity-100 translate-y-0" : "translate-y-8"
            } transition-all duration-1000 ease-out`}
          >
            <Link to="/about" className="btn-primary">
              探索聆花世界
            </Link>
          </div>
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
