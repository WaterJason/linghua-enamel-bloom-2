
import { useState } from "react";
import MainLayout from "@/components/Layout/MainLayout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";
import { MapPin, Phone, Mail, Clock, Share2 } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [formSubmitting, setFormSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitting(true);
    
    console.log("Form submitted:", formData);
    
    // Simulate API call with timeout
    setTimeout(() => {
      // Show success notification using sonner toast
      toast("消息已发送", {
        description: "感谢您的留言，我们会尽快与您取得联系。",
      });
      
      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
      setFormSubmitting(false);
    }, 800);
  };

  return (
    <MainLayout>
      <section className="pt-20 pb-16 bg-beige-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 opacity-0 animate-fade-in">
              联系我们
              <span className="block text-xl font-garamond mt-2 text-beige-600">Contact Us</span>
            </h1>
            <p className="text-lg text-beige-700 mb-8 opacity-0 animate-fade-in-delayed">
              期待与您交流，共赏非遗之美
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact information */}
            <div className="space-y-8">
              <h2 className="text-2xl mb-6 border-b border-beige-200 pb-3">联系方式</h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex gap-4 items-start">
                  <div className="bg-beige-100 p-2 rounded-md">
                    <MapPin className="h-5 w-5 text-seal-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">展览中心</h3>
                    <p className="text-beige-700">广州｜番禺区大学城岭南印象园.聆花掐丝珐琅馆</p>
                    <p className="text-beige-700 mt-2">深圳｜南山区南头古城西集.景之蓝</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-beige-100 p-2 rounded-md">
                    <Phone className="h-5 w-5 text-seal-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">VIP 热线</h3>
                    <p className="text-beige-700">Jason 139 2888 2508</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-beige-100 p-2 rounded-md">
                    <Mail className="h-5 w-5 text-seal-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">官方邮箱</h3>
                    <p className="text-beige-700">
                      <a href="mailto:contact@linghuaart.com" className="hover:text-seal-600 transition-colors">
                        contact@linghuaart.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-beige-100 p-2 rounded-md">
                    <Clock className="h-5 w-5 text-seal-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">工作时间</h3>
                    <p className="text-beige-700">周一至周五: 09:00 - 18:00</p>
                    <p className="text-beige-700">周末: 10:00 - 17:00</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-4 flex items-center">
                  <Share2 className="h-4 w-4 mr-2 text-seal-600" />
                  社交媒体
                </h3>
                <div className="flex space-x-4">
                  <div className="w-24 h-24 bg-beige-100 flex items-center justify-center rounded-md shadow-sm transition-transform hover:scale-105 cursor-pointer">
                    <span className="text-xs text-beige-600">微信公众号二维码</span>
                  </div>
                  <div className="flex flex-col space-y-3">
                    <a href="#" className="text-beige-700 hover:text-seal-600 transition-colors flex items-center">
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.11,15.39c-0.23-0.05-0.46-0.11-0.7-0.15c-2.17-0.38-4.09,0.93-4.29,2.93C6.92,20.14,8.69,22,10.8,21.95 c2.18-0.05,4.19-2.06,4.19-4.28C15,16.5,13.82,15.62,12.11,15.39z M11.4,20.42c-0.35,0.4-0.94,0.58-1.51,0.35 c-0.84-0.34-1.05-1.51-0.5-2.26c0.57-0.77,1.59-0.75,2.16,0.03C11.99,19.22,11.85,19.92,11.4,20.42z M12.92,18.38 c-0.06,0.11-0.19,0.17-0.3,0.12c-0.11-0.05-0.15-0.18-0.09-0.29c0.06-0.11,0.19-0.17,0.3-0.12S12.98,18.27,12.92,18.38z M10.86,17.43c-0.18-0.15-0.13-0.44,0.11-0.56c0.24-0.12,0.49-0.03,0.61,0.2c0.11,0.23,0.05,0.48-0.16,0.59S11.02,17.59,10.86,17.43z"></path>
                        <path d="M20.35,7.2c0.28-0.89,0.43-1.84,0.35-2.81C20.55,2.71,19.13,1.22,17.45,1C14.89,0.65,12.29,1.8,11.03,4.04 c-0.52,0.93-0.78,2.1-0.58,3.17c0.27,1.47,1.7,2.63,3.19,2.62c0.87-0.01,1.7-0.45,2.53-0.19c0.33,0.1,0.55,0.38,0.83,0.55 c0.46,0.28,1.12,0.12,1.45-0.29c0.19-0.23,0.14-0.57,0.37-0.8c0.44-0.45,1.2-0.29,1.77-0.11C19.96,9.15,20.06,8.09,20.35,7.2z M15.63,3.29c0.7,0.01,1.19,0.49,1.2,1.13s-0.47,1.1-1.11,1.12c-0.64,0.02-1.19-0.49-1.2-1.07C14.51,3.78,14.92,3.28,15.63,3.29z M12.91,5.65c-0.06-0.32,0.05-0.66,0.31-0.87c0.36-0.29,0.89-0.29,1.22,0c0.28,0.25,0.37,0.63,0.23,0.97c-0.14,0.36-0.5,0.57-0.88,0.55C13.39,6.29,12.97,6.02,12.91,5.65z"></path>
                      </svg>
                      小红书
                    </a>
                    <a href="#" className="text-beige-700 hover:text-seal-600 transition-colors flex items-center">
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 512 512" fill="currentColor">
                        <path d="M407,107.9c-41.8-41-97.3-63.6-156.3-63.6c-59.6,0-115.5,22.8-157.5,64.2c-86.8,85.6-86.8,225.2,0,310.8C134.5,459.6,190.4,482,250,482c0.3,0,0.5,0,0.8,0c59.1-0.1,114.6-23.1,156.4-64.9C494.4,331.8,494.4,194.4,407,107.9z M390,390.5c-36.9,36.9-86,57.2-138.3,56.9c-52.1-0.2-101-20.8-137.7-58.1c-76-77.7-76-203.7,0-281.4c36.7-37.3,85.7-57.9,137.7-58.1c0.2,0,0.4,0,0.7,0c52.1,0,101,20.7,137.6,57.5C466.3,187.1,466.3,314.3,390,390.5z"></path>
                        <path d="M338.3,159.9c1.1-2.3,1.7-4.8,1.7-7.7c0-10.1-8.3-18.2-18.4-18c-7.3,0.2-13.6,4.7-16.2,11.1l-1,2.4l-2.5-0.6c-7-1.8-14.3-2.7-21.8-2.7c-48.8,0-88.1,39.2-88.1,87.7c0,7.9,1.1,15.6,3.2,22.9l0.6,2.2l-2.2,0.7c-8.3,2.7-13.8,10.2-13.8,19c0,10.9,8.9,19.8,19.8,19.8c2.4,0,4.7-0.4,6.8-1.2l2.4-0.9l1,2.3c13.5,30.9,44.6,50.8,78.4,50.8c47.3,0,86-37.7,86-84c0-33.5-19.9-62-48.5-75.4l-2.8-1.3L338.3,159.9z M256,326.8c-27.1,0-52.4-16-64-40.4l-1.2-2.5l2.5-1.3c6.4-3.4,10.4-10.1,10.4-17.3c0-10.9-8.9-19.8-19.8-19.8c-1.4,0-2.8,0.1-4.1,0.4l-2.7,0.6l-0.4-2.7c-0.7-5-1.1-10-1.1-15c0-39.7,32.5-72.1,72.4-72.1c6.7,0,13.2,0.9,19.4,2.6l2.7,0.7l0.3,2.8c1.2,10.1,10.4,17.6,20.9,17.6c10.9,0,19.8-8.9,19.8-19.8c0-1.2-0.1-2.3-0.3-3.5l-0.5-2.7l2.6-0.8c22.5,6.6,38.2,26.9,38.2,50.3C351.2,284.7,308.9,326.8,256,326.8z"></path>
                      </svg>
                      微博
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact form */}
            <div>
              <h2 className="text-2xl mb-6 border-b border-beige-200 pb-3">在线留言</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">姓名</label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="focus:border-seal-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">电话</label>
                    <Input 
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="focus:border-seal-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">邮箱</label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="focus:border-seal-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">主题</label>
                  <Input 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="focus:border-seal-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">留言内容</label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="focus:border-seal-500"
                  />
                </div>
                
                <div className="text-sm text-beige-600 italic">
                  * 我们重视您的隐私，您的信息仅用于回复咨询，不会用于其他商业用途
                </div>
                
                <Button 
                  type="submit" 
                  className="bg-seal-600 hover:bg-seal-700 w-full md:w-auto px-8"
                  disabled={formSubmitting}
                >
                  {formSubmitting ? '发送中...' : '发送留言'}
                </Button>
              </form>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl mb-6 border-b border-beige-200 pb-3">地理位置</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium mb-4">广州展览中心</h3>
                <div className="bg-beige-100 h-[300px] w-full rounded-md flex items-center justify-center mb-3 overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.9323516516156!2d113.36745261466065!3d23.04007698494752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403a9f34d4705e3%3A0x569804f4fb75e78f!2z5bq35YWL5aSn5a2m5Z-O!5e0!3m2!1szh-CN!2scn!4v1587123456789!5m2!1szh-CN!2scn"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    title="广州展览中心地图"
                  ></iframe>
                </div>
                <p className="text-beige-700 text-sm">广州｜番禺区大学城岭南印象园.聆花掐丝珐琅馆</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-4">深圳展厅</h3>
                <div className="bg-beige-100 h-[300px] w-full rounded-md flex items-center justify-center mb-3 overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.1908473487857!2d113.92480231469704!3d22.542391539600186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403f5c0faaaaaaa%3A0x5679539c70d9bcee!2z5Y2X5aS05ZG85rKz!5e0!3m2!1szh-CN!2scn!4v1587654321987!5m2!1szh-CN!2scn"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    title="深圳展厅地图"
                  ></iframe>
                </div>
                <p className="text-beige-700 text-sm">深圳｜南山区南头古城西集.景之蓝</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Contact;
