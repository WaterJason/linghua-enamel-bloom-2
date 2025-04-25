
import { useEffect, useState } from "react";

const Partners = () => {
  // Placeholder company names for demonstration
  const partners = [
    "华为", "茅台", "故宫博物馆", "国家博物馆", 
    "广州博物馆", "雍和宫", "芝柏表", "东来也"
  ];
  
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.2 }
    );
    
    const element = document.getElementById('partners-section');
    if (element) {
      observer.observe(element);
    }
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="partners-section" className="py-20 bg-white">
      <div className="container-custom">
        <h3 className="section-title text-center mb-12">
          <span>信赖之选 · 携手同行</span>
          <span className="en-text ml-2">Trusted Choice · Walking Together</span>
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          {partners.map((partner, index) => (
            <div 
              key={partner} 
              className={`flex items-center justify-center h-24 bg-beige-50 rounded opacity-0 transform translate-y-4 transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : ''
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <span className="text-beige-600 font-noto-serif-sc text-xl">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
