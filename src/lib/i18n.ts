
/**
 * 多语言国际化工具
 * 为网站提供多语言支持的基础结构
 * 注意：这是一个基础实现，实际项目中应考虑使用i18next等成熟库
 */

export type SupportedLocale = 'zh-CN' | 'en-US';

interface TranslationRecord {
  [key: string]: string;
}

interface Translations {
  [locale: string]: TranslationRecord;
}

// 简单翻译示例
const translations: Translations = {
  'zh-CN': {
    'brand.name': '聆花',
    'brand.slogan': '千年珐琅，当代光华。',
    'nav.home': '首页',
    'nav.about': '关于我们',
    'nav.craft': '非遗工艺',
    'nav.collections': '艺术臻品',
    'nav.workshop': '手作体验',
    'nav.contact': '联系我们',
    'craft.title': '固釉掐丝珐琅',
    'craft.description': '传承600年宫廷技艺，融合当代东方美学。',
  },
  'en-US': {
    'brand.name': 'LINGHUA',
    'brand.slogan': 'Ancient Enamel Art, Contemporary Elegance.',
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.craft': 'Craftsmanship',
    'nav.collections': 'Collections',
    'nav.workshop': 'Workshop',
    'nav.contact': 'Contact',
    'craft.title': 'Solid Enamel Cloisonné',
    'craft.description': 'Inheriting 600 years of imperial craftsmanship, combined with contemporary oriental aesthetics.',
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
    // 在实际应用中，这里可能还需要触发UI重新渲染
    // 或将语言选择保存到localStorage等
  }
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

export default {
  t,
  formatDate,
  formatCurrency,
  setLocale,
  getCurrentLocale
};
