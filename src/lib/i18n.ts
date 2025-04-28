
/**
 * 多语言国际化工具
 * 为网站提供多语言支持的基础结构
 */

import { createEvent } from '@/lib/utils';

export type SupportedLocale = 'zh-CN' | 'en-US';

interface TranslationRecord {
  [key: string]: string;
}

interface Translations {
  [locale: string]: TranslationRecord;
}

// 创建语言变更事件
export const localeChangeEvent = createEvent<SupportedLocale>('localeChange');

// 翻译内容
const translations: Translations = {
  'zh-CN': {
    'brand.name': '聆花',
    'brand.slogan': '千年珐琅，当代光华。',
    'brand.innovation': '固釉掐丝珐琅 - 国家专利技术',
    'nav.home': '首页',
    'nav.about': '关于我们',
    'nav.brand_story': '品牌故事',
    'nav.founder': '创始人',
    'nav.craft': '非遗工艺',
    'nav.milestones': '品牌历程',
    'nav.collections': '艺术臻品',
    'nav.art_collections': '艺术珍品',
    'nav.limited_editions': '限量系列',
    'nav.custom_design': '定制服务',
    'nav.lifestyle': '文创生活',
    'nav.home_decor': '家居饰品',
    'nav.accessories': '个人配饰',
    'nav.gift_sets': '礼品套装',
    'nav.workshop': '手作体验',
    'nav.individual_workshop': '个人体验',
    'nav.group_workshop': '亲子手作',
    'nav.corporate_events': '企业团建',
    'nav.news': '资讯',
    'nav.contact': '联系我们',
    'nav.faq': '常见问题',
    'nav.language_switch': '切换到英文',
    'craft.title': '固釉掐丝珐琅',
    'craft.description': '传承600年宫廷技艺，融合当代东方美学。',
    'testimonials.title': '用户体验',
    'testimonials.subtitle': '聆听用户的声音',
    'cta.book_now': '立即预约',
    'cta.contact_us': '联系我们',
    'cta.explore': '探索更多',
    'faq.title': '常见问题',
    'faq.more': '查看更多问题',
    'faq.intro': '以下是关于聆花文化与掐丝珐琅艺术的常见问题解答',
    'faq.contact_prompt': '如有其他疑问，欢迎联系我们',
    'notfound.title': '页面未找到',
    'notfound.description': '抱歉，您访问的页面不存在或正在建设中。',
    'notfound.back_home': '返回首页',
  },
  'en-US': {
    'brand.name': 'LINGHUA',
    'brand.slogan': 'Ancient Enamel Art, Contemporary Elegance.',
    'brand.innovation': 'Solid Enamel Cloisonné - Patented Technology',
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.brand_story': 'Brand Story',
    'nav.founder': 'Founder',
    'nav.craft': 'Craftsmanship',
    'nav.milestones': 'Milestones',
    'nav.collections': 'Collections',
    'nav.art_collections': 'Art Collections',
    'nav.limited_editions': 'Limited Editions',
    'nav.custom_design': 'Custom Design',
    'nav.lifestyle': 'Lifestyle',
    'nav.home_decor': 'Home Decor',
    'nav.accessories': 'Accessories',
    'nav.gift_sets': 'Gift Sets',
    'nav.workshop': 'Workshop',
    'nav.individual_workshop': 'Individual Workshop',
    'nav.group_workshop': 'Family Workshop',
    'nav.corporate_events': 'Corporate Events',
    'nav.news': 'News',
    'nav.contact': 'Contact',
    'nav.faq': 'FAQ',
    'nav.language_switch': 'Switch to Chinese',
    'craft.title': 'Solid Enamel Cloisonné',
    'craft.description': 'Inheriting 600 years of imperial craftsmanship, combined with contemporary oriental aesthetics.',
    'testimonials.title': 'Testimonials',
    'testimonials.subtitle': 'Hear from our clients',
    'cta.book_now': 'Book Now',
    'cta.contact_us': 'Contact Us',
    'cta.explore': 'Explore More',
    'faq.title': 'FAQ',
    'faq.more': 'View More Questions',
    'faq.intro': 'Here are answers to frequently asked questions about Linghua and cloisonné enamel art',
    'faq.contact_prompt': 'If you have other questions, please contact us',
    'notfound.title': 'Page Not Found',
    'notfound.description': 'Sorry, the page you are looking for does not exist or is under construction.',
    'notfound.back_home': 'Return to Home',
  }
};

/**
 * 当前语言
 */
let currentLocale: SupportedLocale = 'zh-CN';

/**
 * 获取当前语言
 */
export const getCurrentLocale = (): SupportedLocale => currentLocale;

/**
 * 设置当前语言
 */
export const setLocale = (locale: SupportedLocale): void => {
  if (Object.keys(translations).includes(locale)) {
    currentLocale = locale;
    document.documentElement.setAttribute('lang', locale);
    
    // 发布语言变更事件
    localeChangeEvent.dispatch(locale);
    
    // 保存到localStorage
    try {
      localStorage.setItem('linghua-locale', locale);
    } catch (e) {
      console.error('无法保存语言设置到localStorage', e);
    }
  }
};

/**
 * 切换语言
 */
export const toggleLocale = (): void => {
  const newLocale = currentLocale === 'zh-CN' ? 'en-US' : 'zh-CN';
  setLocale(newLocale);
};

/**
 * 初始化语言
 * 优先从localStorage读取，其次从浏览器语言设置推断
 */
export const initLocale = (): void => {
  let locale: SupportedLocale = 'zh-CN';
  
  // 尝试从localStorage读取
  try {
    const savedLocale = localStorage.getItem('linghua-locale');
    if (savedLocale && (savedLocale === 'zh-CN' || savedLocale === 'en-US')) {
      locale = savedLocale as SupportedLocale;
    } else {
      // 从浏览器语言设置推断
      const browserLang = navigator.language;
      if (browserLang.startsWith('en')) {
        locale = 'en-US';
      }
    }
  } catch (e) {
    console.error('无法读取语言设置', e);
  }
  
  setLocale(locale);
};

/**
 * 翻译函数
 * @param key 翻译键
 * @param params 替换参数
 */
export const t = (key: string, params?: Record<string, string>): string => {
  const translation = translations[currentLocale]?.[key] || key;
  
  if (params) {
    return Object.entries(params).reduce(
      (result, [param, value]) => result.replace(`{{${param}}}`, value),
      translation
    );
  }
  
  return translation;
};

/**
 * 日期本地化函数
 */
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString(currentLocale);
};

/**
 * 货币本地化函数
 */
export const formatCurrency = (value: number): string => {
  const currencySymbol = currentLocale === 'zh-CN' ? '¥' : '$';
  return `${currencySymbol}${value.toLocaleString(currentLocale)}`;
};

// 需要添加到utils.ts中的createEvent函数
// 添加在这里作为参考，实际应在utils.ts中实现
// export function createEvent<T>(name: string) {
//   return {
//     dispatch: (data: T) => {
//       window.dispatchEvent(new CustomEvent(name, { detail: data }));
//     },
//     listen: (handler: (data: T) => void) => {
//       const listener = (event: CustomEvent<T>) => handler(event.detail);
//       window.addEventListener(name, listener as EventListener);
//       return () => {
//         window.removeEventListener(name, listener as EventListener);
//       };
//     }
//   };
// }

export default {
  t,
  formatDate,
  formatCurrency,
  setLocale,
  toggleLocale,
  getCurrentLocale,
  initLocale
};
