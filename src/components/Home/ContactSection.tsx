
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-beige-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">
            联系我们 · 开启艺术之旅
          </h2>
          <p className="text-lg text-beige-700">
            欢迎联系聆花文化，我们期待与您分享掐丝珐琅的艺术之美
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl mb-6">体验馆地址</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg">
                  <MapPin className="w-6 h-6 text-seal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">广州馆</h4>
                    <p className="text-beige-700">番禺区大学城岭南印象园.聆花掐丝珐琅馆</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg">
                  <MapPin className="w-6 h-6 text-seal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">深圳馆</h4>
                    <p className="text-beige-700">南山区南头古城西集.景之蓝</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-seal-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium mb-1">VIP热线</h4>
                  <p className="text-beige-700">Jason 139 2888 2508</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-seal-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium mb-1">邮箱咨询</h4>
                  <p className="text-beige-700">contact@linghuaart.com</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-seal-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium mb-1">营业时间</h4>
                <p className="text-beige-700">
                  周一至周日 9:00-18:00<br />
                  节假日正常营业
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg">
            <h3 className="text-xl mb-6">快速咨询</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">姓名</label>
                <input 
                  type="text"
                  className="w-full px-4 py-2 border border-beige-300 rounded focus:ring-2 focus:ring-azure-500 focus:border-transparent"
                  placeholder="请输入您的姓名"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">联系方式</label>
                <input 
                  type="tel"
                  className="w-full px-4 py-2 border border-beige-300 rounded focus:ring-2 focus:ring-azure-500 focus:border-transparent"
                  placeholder="请输入手机号码"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">咨询内容</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-2 border border-beige-300 rounded focus:ring-2 focus:ring-azure-500 focus:border-transparent"
                  placeholder="请描述您的需求或问题"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full btn-primary"
              >
                提交咨询
              </button>
            </form>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/contact"
            className="btn-secondary"
          >
            查看详细联系信息
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
