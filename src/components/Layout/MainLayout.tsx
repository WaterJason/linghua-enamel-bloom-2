
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface MainLayoutProps {
  children: ReactNode;
  hideFooter?: boolean;
  className?: string;
}

const MainLayout = ({ children, hideFooter = false, className = "" }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className={`flex-grow pt-16 ${className}`}>{children}</main>
      {!hideFooter && <Footer />}
    </div>
  );
};

export default MainLayout;
