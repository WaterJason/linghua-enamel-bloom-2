
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { t } from "@/lib/i18n";

interface Testimonial {
  id: string;
  name: string;
  avatar?: string;
  role: string;
  content: string;
  rating: number; // 1-5
}

const Testimonials = () => {
  // 示例评价数据
  const testimonials: Testimonial[] = [
    {
      id: "t1",
      name: "张女士",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
      role: "企业高管",
      content: "聆花的固釉掐丝珐琅工艺令人惊叹，作为生日礼物送给母亲，她非常喜欢。每一处细节都彰显精湛工艺，颜色持久饱满，是难得的艺术臻品。",
      rating: 5
    },
    {
      id: "t2",
      name: "王先生",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
      role: "收藏家",
      content: "作为掐丝珐琅艺术品收藏者，我认为聆花的创新工艺是传统与现代的完美结合。手作体验课程让我深入了解了这门古老工艺的奥秘，非常推荐。",
      rating: 5
    },
    {
      id: "t3",
      name: "李女士",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
      role: "艺术爱好者",
      content: "参加了聆花的亲子手作课程，孩子非常喜欢。老师耐心细致，让我们深刻体会到了非物质文化遗产的魅力。制作的小饰品现在成了我们家的珍贵纪念。",
      rating: 4
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // 处理轮播逻辑
  const handlePrev = () => {
    setActiveIndex((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  // 渲染星级评价
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-amber-400 fill-amber-400" : "text-beige-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-beige-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl mb-3">{t('testimonials.title')}</h2>
          <p className="text-beige-700">{t('testimonials.subtitle')}</p>
        </div>

        <div className="relative max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6 md:p-10">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 -left-4 md:-left-6 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-beige-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-beige-800" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute top-1/2 -right-4 md:-right-6 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-beige-50 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-beige-800" />
          </button>

          {/* Testimonial Content */}
          <div className="text-center">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className={`transition-opacity duration-500 ${
                  activeIndex === index ? "block opacity-100" : "hidden opacity-0"
                }`}
              >
                <div className="flex justify-center mb-4">
                  {testimonial.avatar ? (
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-16 h-16 object-cover rounded-full border-2 border-beige-100"
                    />
                  ) : (
                    <div className="w-16 h-16 bg-beige-100 rounded-full flex items-center justify-center text-beige-500 text-xl">
                      {testimonial.name.charAt(0)}
                    </div>
                  )}
                </div>
                
                <div className="flex justify-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                <blockquote className="text-beige-800 text-lg mb-6 italic">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="font-medium">{testimonial.name}</div>
                <div className="text-beige-600 text-sm">{testimonial.role}</div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 mx-1 rounded-full transition-all ${
                  activeIndex === index ? "bg-seal-600 w-6" : "bg-beige-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
