
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { getCurrentLocale, t } from "@/lib/i18n";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const currentLocale = getCurrentLocale();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // 导航项结构，支持二级菜单
  const navItems = [
    { 
      name: t("nav.home"),
      path: "/",
      children: [] 
    },
    { 
      name: t("nav.about"),
      path: "/about",
      children: [
        { name: t("nav.brand_story"), path: "/about/story" },
        { name: t("nav.founder"), path: "/about/founder" },
        { name: t("nav.craft"), path: "/about/craft" },
        { name: t("nav.milestones"), path: "/about/milestones" }
      ]
    },
    { 
      name: t("nav.collections"),
      path: "/collections",
      children: [
        { name: t("nav.art_collections"), path: "/collections" },
        { name: t("nav.limited_editions"), path: "/collections/limited" },
        { name: t("nav.custom_design"), path: "/collections/custom" }
      ]
    },
    { 
      name: t("nav.lifestyle"),
      path: "/lifestyle",
      children: [
        { name: t("nav.home_decor"), path: "/lifestyle/decor" },
        { name: t("nav.accessories"), path: "/lifestyle/accessories" },
        { name: t("nav.gift_sets"), path: "/lifestyle/gifts" }
      ]
    },
    { 
      name: t("nav.workshop"),
      path: "/workshop",
      children: [
        { name: t("nav.individual_workshop"), path: "/workshop#individual" },
        { name: t("nav.group_workshop"), path: "/workshop#group" },
        { name: t("nav.corporate_events"), path: "/workshop#corporate" }
      ]
    },
    { 
      name: t("nav.news"),
      path: "/news",
      children: [] 
    },
    { 
      name: t("nav.contact"),
      path: "/contact",
      children: [] 
    }
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
              <h1 className="text-xl font-medium tracking-wider">{t("brand.name")}</h1>
              <span className="ml-2 text-xs font-garamond italic text-beige-600">
                {currentLocale === 'en-US' ? 'LINGHUA ENAMEL' : 'LINGHUA ENAMEL'}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation with Dropdown Menus */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-4">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.path}>
                  {item.children.length > 0 ? (
                    <>
                      <NavigationMenuTrigger 
                        className={`${
                          isActive(item.path) 
                            ? "text-azure-700 after:bg-seal-500 after:scale-x-100" 
                            : "hover:text-azure-700"
                        } py-2 text-sm transition-colors`}
                      >
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[220px] gap-1 p-2">
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
                      className={`py-2 text-sm transition-colors hover:text-azure-700 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:transition-transform after:duration-300 after:origin-bottom-right ${
                        isActive(item.path)
                          ? "text-azure-700 after:bg-seal-500 after:scale-x-100"
                          : "after:bg-seal-500 after:scale-x-0 hover:after:scale-x-100 hover:after:origin-bottom-left"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Language Selector */}
          <div className="hidden lg:flex items-center ml-4">
            <button 
              className="text-sm text-beige-700 hover:text-azure-700 transition-colors"
              aria-label={currentLocale === 'zh-CN' ? 'Switch to English' : '切换至中文'}
            >
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
                    className={`block py-2 text-lg font-noto-serif-sc ${
                      isActive(item.path) ? "text-azure-700" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                  
                  {item.children.length > 0 && (
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
              
              <li className="pt-4 border-t border-beige-100">
                <button 
                  className="text-beige-700 hover:text-azure-700 transition-colors"
                >
                  {currentLocale === 'zh-CN' ? 'English' : '中文'}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
