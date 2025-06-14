
import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-beige-900 text-beige-100 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-12 gap-8 mb-12">
          {/* 品牌信息 */}
          <div className="md:col-span-4">
            <h3 className="text-2xl mb-4 text-white">聆花</h3>
            <p className="text-sm font-garamond italic text-beige-300 mb-4">LINGHUA ENAMEL</p>
            <p className="text-sm text-beige-300 mb-6 max-w-xs leading-relaxed">
              让非遗走进生活，用匠心温暖时光
              <br />
              <span className="font-garamond italic">Heritage of Craftsmanship, Beauty in Life</span>
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-beige-400 hover:text-white transition-colors">
                微信
              </a>
              <a href="#" className="text-beige-400 hover:text-white transition-colors">
                小红书
              </a>
              <a href="#" className="text-beige-400 hover:text-white transition-colors">
                微博
              </a>
            </div>
          </div>
          
          {/* 快速链接 */}
          <div className="md:col-span-2">
            <h5 className="font-medium mb-4 text-white">品牌</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/about/story" className="text-sm text-beige-300 hover:text-white transition-colors">
                  品牌故事
                </Link>
              </li>
              <li>
                <Link to="/about/founder" className="text-sm text-beige-300 hover:text-white transition-colors">
                  创始人
                </Link>
              </li>
              <li>
                <Link to="/about/craft" className="text-sm text-beige-300 hover:text-white transition-colors">
                  非遗工艺
                </Link>
              </li>
              <li>
                <Link to="/about/milestones" className="text-sm text-beige-300 hover:text-white transition-colors">
                  品牌历程
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h5 className="font-medium mb-4 text-white">作品</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/collections" className="text-sm text-beige-300 hover:text-white transition-colors">
                  艺术臻品
                </Link>
              </li>
              <li>
                <Link to="/lifestyle" className="text-sm text-beige-300 hover:text-white transition-colors">
                  文创生活
                </Link>
              </li>
              <li>
                <Link to="/collaboration" className="text-sm text-beige-300 hover:text-white transition-colors">
                  合作定制
                </Link>
              </li>
              <li>
                <Link to="/workshop" className="text-sm text-beige-300 hover:text-white transition-colors">
                  手作体验
                </Link>
              </li>
            </ul>
          </div>
          
          {/* 联系信息 */}
          <div className="md:col-span-4">
            <h5 className="font-medium mb-4 text-white">联系我们</h5>
            <div className="space-y-3">
              <div className="flex items-start text-sm text-beige-300">
                <MapPin className="w-4 h-4 mr-2 text-seal-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p>广州｜番禺区大学城岭南印象园</p>
                  <p>深圳｜南山区南头古城西集</p>
                </div>
              </div>
              <div className="flex items-center text-sm text-beige-300">
                <Phone className="w-4 h-4 mr-2 text-seal-400" />
                <span>VIP 热线: Jason 139 2888 2508</span>
              </div>
              <div className="flex items-center text-sm text-beige-300">
                <Mail className="w-4 h-4 mr-2 text-seal-400" />
                <a href="mailto:contact@linghuaart.com" className="hover:text-white transition-colors">
                  contact@linghuaart.com
                </a>
              </div>
              <div className="flex items-center text-sm text-beige-300">
                <Clock className="w-4 h-4 mr-2 text-seal-400" />
                <span>营业时间: 周一至周日 9:00-18:00</span>
              </div>
              
              {/* 快速联系按钮 */}
              <div className="pt-3">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center px-4 py-2 bg-seal-600 text-white rounded hover:bg-seal-700 transition-colors text-sm"
                >
                  立即咨询
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-beige-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-beige-400 mb-2 md:mb-0">
              Copyright © 2025 广州聆花文化传播有限公司. All Rights Reserved.
            </p>
            <div className="flex space-x-4">
              <Link to="/faq" className="text-xs text-beige-400 hover:text-white transition-colors">
                常见问题
              </Link>
              <Link to="/privacy" className="text-xs text-beige-400 hover:text-white transition-colors">
                隐私政策
              </Link>
              <Link to="/terms" className="text-xs text-beige-400 hover:text-white transition-colors">
                使用条款
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
