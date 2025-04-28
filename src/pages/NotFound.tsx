
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { t, initLocale } from "@/lib/i18n";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    initLocale();
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-beige-50">
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('notfound.title')}</h1>
        <p className="text-xl text-beige-700 mb-6">{t('notfound.description')}</p>
        <div className="flex justify-center space-x-4">
          <Link 
            to="/" 
            className="px-6 py-2 bg-seal-600 text-white rounded hover:bg-seal-700 transition-colors"
          >
            {t('notfound.back_home')}
          </Link>
          <Link 
            to="/contact" 
            className="px-6 py-2 bg-white border border-beige-300 text-beige-800 rounded hover:bg-beige-100 transition-colors"
          >
            {t('cta.contact_us')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
