
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { getCurrentLocale, t, toggleLocale, localeChangeEvent } from "@/lib/i18n";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLocale, setCurrentLocale] = useState(getCurrentLocale());
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    
    const unsubscribe = localeChangeEvent.listen((locale) => {
      setCurrentLocale(locale);
    });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      unsubscribe();
    };
  }, []);
  
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const handleLanguageToggle = () => {
    toggleLocale();
  };

  // 简化的导航结构
  const navItems = [
    { name: "首页", path: "/" },
    { 
      name: "品牌", 
      path: "/about",
      children: [
        { name: "品牌故事", path: "/about/story" },
        { name: "创始人", path: "/about/founder" },
        { name: "非遗工艺", path: "/about/craft" },
        { name: "品牌历程", path: "/about/milestones" }
      ]
    },
    { 
      name: "作品", 
      path: "/collections",
      children: [
        { name: "艺术臻品", path: "/collections" },
        { name: "文创生活", path: "/lifestyle" },
        { name: "合作定制", path: "/collaboration" }
      ]
    },
    { name: "手作体验", path: "/workshop" },
    { name: "品牌动态", path: "/news" },
    { name: "联系我们", path: "/contact" }
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="relative z-10">
            <div className="flex items-center">
              <h1 className="text-2xl font-medium tracking-wider">聆花</h1>
              <span className="ml-2 text-xs font-garamond italic text-beige-600">
                LINGHUA ENAMEL
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-8">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.path}>
                  {item.children ? (
                    <>
                      <NavigationMenuTrigger 
                        className={`${
                          isActive(item.path) 
                            ? "text-azure-700" 
                            : "hover:text-azure-700"
                        } py-2 text-base transition-colors bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent`}
                      >
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[200px] gap-1 p-2">
                          {item.children.map((child) => (
                            <li key={child.path}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={child.path}
                                  className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-beige-50 hover:text-azure-700 ${
                                    isActive(child.path) ? "bg-beige-50 text-azure-700" : "text-beige-800"
                                  }`}
                                >
                                  <div className="text-sm font-medium">{child.name}</div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className={`py-2 text-base transition-colors hover:text-azure-700 relative ${
                        isActive(item.path)
                          ? "text-azure-700"
                          : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Language Toggle - Hidden for now to simplify */}
          <div className="hidden">
            <button 
              onClick={handleLanguageToggle}
              className="flex items-center text-sm text-beige-700 hover:text-azure-700 transition-colors"
            >
              <Globe className="w-4 h-4 mr-1" />
              {currentLocale === 'zh-CN' ? 'EN' : '中文'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative z-10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="flex flex-col justify-center items-center w-6 h-6">
              <span
                className={`block w-5 h-0.5 bg-foreground transition-transform duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-0.5" : "-translate-y-1"
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-foreground transition-opacity duration-300 ${
                  mobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-foreground transition-transform duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-1"
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-white z-0 transform transition-transform duration-300 lg:hidden ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container-custom pt-20 pb-8">
          <nav>
            <ul className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <li key={item.path} className="space-y-2">
                  <Link
                    to={item.path}
                    className={`block py-2 text-lg ${
                      isActive(item.path) ? "text-azure-700" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                  
                  {item.children && (
                    <ul className="pl-4 space-y-2">
                      {item.children.map((child) => (
                        <li key={child.path}>
                          <Link
                            to={child.path}
                            className={`block py-1 text-base ${
                              isActive(child.path) ? "text-azure-700" : "text-beige-700"
                            }`}
                          >
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
