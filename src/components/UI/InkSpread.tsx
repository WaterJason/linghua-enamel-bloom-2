
import React, { useEffect, useRef } from "react";

interface InkSpreadProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  color?: string;
}

/**
 * 水墨扩散动画效果组件
 * 模拟中国传统水墨画的扩散效果
 */
const InkSpread = ({
  children,
  className = "",
  delay = 0,
  duration = 1500,
  color = "rgba(0, 0, 0, 0.7)"
}: InkSpreadProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            container.classList.add("ink-active");
          }, delay);
          observer.unobserve(container);
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(container);
    
    return () => {
      if (container) observer.unobserve(container);
    };
  }, [delay]);
  
  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        className="ink-spread-effect absolute inset-0 opacity-0 pointer-events-none"
        style={{
          backgroundColor: color,
          transformOrigin: "center",
          transition: `transform ${duration}ms cubic-bezier(0.25, 1, 0.5, 1), opacity ${duration}ms ease-out`,
          transform: "scale(0)"
        }}
      />
      {children}
      <style>
        {`
        .ink-active .ink-spread-effect {
          transform: scale(1) !important;
          opacity: 1 !important;
        }
        `}
      </style>
    </div>
  );
};

export default InkSpread;
