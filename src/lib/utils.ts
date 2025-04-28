import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * 创建自定义事件
 * @param name 事件名称
 * @returns 事件对象，包含dispatch和listen方法
 */
export function createEvent<T>(name: string) {
  return {
    dispatch: (data: T) => {
      window.dispatchEvent(new CustomEvent(name, { detail: data }));
    },
    listen: (handler: (data: T) => void) => {
      const listener = (event: CustomEvent<T>) => handler(event.detail);
      window.addEventListener(name, listener as EventListener);
      return () => {
        window.removeEventListener(name, listener as EventListener);
      };
    }
  };
}
