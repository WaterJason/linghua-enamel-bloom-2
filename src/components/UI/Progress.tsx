
import React, { useState, useEffect } from "react";

interface ProgressProps {
  value: number;
  max: number;
  className?: string;
  showLabel?: boolean;
  color?: "azure" | "seal" | "beige";
  size?: "sm" | "md" | "lg";
  animated?: boolean;
}

/**
 * 进度条组件
 * 用于显示进度、加载状态或完成度
 */
const Progress = ({
  value,
  max = 100,
  className = "",
  showLabel = false,
  color = "azure",
  size = "md",
  animated = false
}: ProgressProps) => {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    // 为动画设置延迟，让组件先渲染
    const timer = setTimeout(() => {
      setWidth((value / max) * 100);
    }, 50);
    
    return () => clearTimeout(timer);
  }, [value, max]);

  // 颜色映射
  const colorClasses = {
    azure: "bg-azure-600",
    seal: "bg-seal-600",
    beige: "bg-beige-400"
  };
  
  // 尺寸映射
  const sizeClasses = {
    sm: "h-1",
    md: "h-2",
    lg: "h-3"
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="bg-beige-100 rounded-full overflow-hidden">
        <div
          className={`${colorClasses[color]} ${sizeClasses[size]} rounded-full ${
            animated ? "transition-all duration-1000 ease-out" : ""
          }`}
          style={{ width: `${width}%` }}
        ></div>
      </div>
      {showLabel && (
        <div className="mt-1 text-xs text-beige-600 text-right">
          {Math.round((value / max) * 100)}%
        </div>
      )}
    </div>
  );
};

export default Progress;
