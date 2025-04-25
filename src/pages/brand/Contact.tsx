import { useState } from "react";
import MainLayout from "@/components/Layout/MainLayout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
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
            <div>
              <h2 className="text-2xl mb-6">联系方式</h2>
              
              <div className="space-y-6 mb-10">
                <div>
                  <h3 className="text-lg font-medium mb-2">公司名称</h3>
                  <p className="text-beige-700">广州聆花文化传播有限公司</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">展览中心</h3>
                  <p className="text-beige-700">广州｜番禺区大学城岭南印象园.聆花掐丝珐琅馆</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">深圳展厅</h3>
                  <p className="text-beige-700">深圳｜南山区南头古城西集.景之蓝</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">VIP 热线</h3>
                  <p className="text-beige-700">Jason 139 2888 2508</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">官方邮箱</h3>
                  <p className="text-beige-700">contact@linghuaart.com</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">工作时间</h3>
                  <p className="text-beige-700">周一至周五: 09:00 - 18:00</p>
                  <p className="text-beige-700">周末: 10:00 - 17:00</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-4">社交媒体</h3>
                <div className="flex space-x-4">
                  <div className="w-24 h-24 bg-beige-200 flex items-center justify-center rounded">
                    <span className="text-xs text-beige-600">微信公众号二维码</span>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <a href="#" className="text-beige-700 hover:text-seal-600">小红书</a>
                    <a href="#" className="text-beige-700 hover:text-seal-600">微博</a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact form */}
            <div>
              <h2 className="text-2xl mb-6">在线留言</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">姓名</label>
                  <Input 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
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
                  />
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
                  />
                </div>
                
                <Button type="submit" className="bg-seal-600 hover:bg-seal-700">
                  发送留言
                </Button>
              </form>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl mb-6">地理位置</h2>
            <div className="bg-beige-100 h-[400px] w-full rounded-md flex items-center justify-center">
              <p className="text-beige-600">地图将在这里显示</p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Contact;
