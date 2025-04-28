
import React from "react";
import { Link } from "react-router-dom";
import AnimatedImage from "../UI/AnimatedImage";

interface CollaborationCaseProps {
  id: string;
  title: string;
  partner: string;
  description: string;
  imageSrc: string;
  year: string;
  category: string;
  detailPath?: string;
}

/**
 * 合作案例展示组件
 * 用于展示与品牌合作的项目案例
 */
const CollaborationCase = ({
  id,
  title,
  partner,
  description,
  imageSrc,
  year,
  category,
  detailPath
}: CollaborationCaseProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="aspect-w-16 aspect-h-9 overflow-hidden">
        <AnimatedImage
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl">{title}</h3>
          <span className="bg-beige-100 text-seal-700 text-xs px-2 py-1 rounded">
            {category}
          </span>
        </div>
        
        <div className="flex items-center mb-4">
          <span className="font-medium text-beige-700">{partner}</span>
          <span className="mx-2 text-beige-400">·</span>
          <span className="text-sm text-beige-500">{year}</span>
        </div>
        
        <p className="text-beige-700 text-sm mb-4 line-clamp-3">
          {description}
        </p>
        
        {detailPath && (
          <Link 
            to={detailPath} 
            className="text-azure-600 text-sm font-medium hover:text-azure-700 transition-colors"
          >
            查看项目详情
          </Link>
        )}
      </div>
    </div>
  );
};

export default CollaborationCase;
