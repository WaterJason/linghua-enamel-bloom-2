
import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import { t } from "@/lib/i18n";

const Footer = () => {
  return (
    <footer className="bg-beige-50 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-4">
            <h3 className="text-2xl mb-4">{t('brand.name')}</h3>
            <p className="text-sm font-garamond italic text-beige-600 mb-4">LINGHUA ENAMEL</p>
            <p className="text-sm text-beige-700 mb-6 max-w-xs">
              匠心传承 美育生活 <br />
              <span className="font-garamond italic">Heritage of Craftsmanship, Beauty in Life</span>
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-beige-600 hover:text-azure-600 transition-colors">
                微信
              </a>
              <a href="#" className="text-beige-600 hover:text-azure-600 transition-colors">
                小红书
              </a>
              <a href="#" className="text-beige-600 hover:text-azure-600 transition-colors">
                微博
              </a>
            </div>
          </div>
          <div className="md:col-span-2">
            <h5 className="font-medium mb-4">品牌</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-beige-700 hover:text-azure-700 transition-colors">
                  品牌故事
                </Link>
              </li>
              <li>
                <Link to="/about/founder" className="text-sm text-beige-700 hover:text-azure-700 transition-colors">
                  创始人
                </Link>
              </li>
              <li>
                <Link to="/about/craft" className="text-sm text-beige-700 hover:text-azure-700 transition-colors">
                  非遗工艺
                </Link>
              </li>
              <li>
                <Link to="/about/milestones" className="text-sm text-beige-700 hover:text-azure-700 transition-colors">
                  品牌历程
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-beige-700 hover:text-azure-700 transition-colors">
                  常见问题
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h5 className="font-medium mb-4">作品</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/collections" className="text-sm text-beige-700 hover:text-azure-700 transition-colors">
                  艺术臻品
                </Link>
              </li>
              <li>
                <Link to="/lifestyle" className="text-sm text-beige-700 hover:text-azure-700 transition-colors">
                  文创生活
                </Link>
              </li>
              <li>
                <Link to="/collaboration" className="text-sm text-beige-700 hover:text-azure-700 transition-colors">
                  合作与定制
                </Link>
              </li>
              <li>
                <Link to="/workshop" className="text-sm text-beige-700 hover:text-azure-700 transition-colors">
                  手作体验
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <h5 className="font-medium mb-4">联系我们</h5>
            <address className="not-italic space-y-3">
              <p className="text-sm text-beige-700">广州｜番禺区大学城岭南印象园.聆花掐丝珐琅馆</p>
              <p className="text-sm text-beige-700">深圳｜南山区南头古城西集.景之蓝</p>
              <div className="flex items-center text-sm text-beige-700">
                <Phone className="w-4 h-4 mr-2 text-seal-600" />
                <span>VIP 热线: Jason 139 2888 2508</span>
              </div>
              <div className="flex items-center text-sm text-beige-700">
                <Mail className="w-4 h-4 mr-2 text-seal-600" />
                <a href="mailto:contact@linghuaart.com" className="hover:text-azure-700 transition-colors">
                  contact@linghuaart.com
                </a>
              </div>
              
              {/* 快速联系按钮 */}
              <div className="pt-3">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center px-4 py-2 bg-seal-600 text-white rounded hover:bg-seal-700 transition-colors text-sm"
                >
                  在线咨询
                </Link>
              </div>
            </address>
          </div>
        </div>
        <div className="border-t border-beige-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-beige-500 mb-2 md:mb-0">
              Copyright © 2025 广州聆花文化传播有限公司. All Rights Reserved.
            </p>
            <div className="flex space-x-4">
              <Link to="/privacy" className="text-xs text-beige-500 hover:text-azure-700 transition-colors">
                隐私政策
              </Link>
              <Link to="/terms" className="text-xs text-beige-500 hover:text-azure-700 transition-colors">
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
