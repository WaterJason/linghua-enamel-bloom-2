
/**
 * Schema.org 结构化数据生成工具
 * 用于SEO优化，帮助搜索引擎更好地理解网站内容
 */

export interface BrandSchema {
  name: string;
  description: string;
  logo: string;
  url: string;
  foundingDate?: string;
  founderName?: string;
}

export interface ArtworkSchema {
  name: string;
  description: string;
  image: string;
  creator: string;
  dateCreated?: string;
  artMedium?: string;
  artform?: string;
}

export interface EventSchema {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  location: string;
  image?: string;
  offers?: {
    price: number;
    priceCurrency: string;
    availability: string;
  };
}

/**
 * 生成品牌的Schema.org结构化数据
 */
export const generateBrandSchema = (data: BrandSchema): string => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Brand",
    "name": data.name,
    "description": data.description,
    "logo": data.logo,
    "url": data.url,
    ...(data.foundingDate && { "foundingDate": data.foundingDate }),
    ...(data.founderName && {
      "founder": {
        "@type": "Person",
        "name": data.founderName
      }
    })
  };
  
  return JSON.stringify(schema);
};

/**
 * 生成艺术品的Schema.org结构化数据
 */
export const generateArtworkSchema = (data: ArtworkSchema): string => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "VisualArtwork",
    "name": data.name,
    "description": data.description,
    "image": data.image,
    "creator": {
      "@type": "Person",
      "name": data.creator
    },
    ...(data.dateCreated && { "dateCreated": data.dateCreated }),
    ...(data.artMedium && { "artMedium": data.artMedium }),
    ...(data.artform && { "artform": data.artform })
  };
  
  return JSON.stringify(schema);
};

/**
 * 生成活动/工作坊的Schema.org结构化数据
 */
export const generateEventSchema = (data: EventSchema): string => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": data.name,
    "description": data.description,
    "startDate": data.startDate,
    "location": {
      "@type": "Place",
      "name": data.location
    },
    ...(data.endDate && { "endDate": data.endDate }),
    ...(data.image && { "image": data.image }),
    ...(data.offers && {
      "offers": {
        "@type": "Offer",
        "price": data.offers.price,
        "priceCurrency": data.offers.priceCurrency,
        "availability": data.offers.availability
      }
    })
  };
  
  return JSON.stringify(schema);
};
