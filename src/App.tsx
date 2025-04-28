
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import FAQ from "./pages/FAQ";

// Brand pages
import BrandStory from "./pages/brand/BrandStory";
import Founder from "./pages/brand/Founder";
import Craft from "./pages/brand/Craft";
import Milestones from "./pages/brand/Milestones";
import News from "./pages/brand/News";
import Contact from "./pages/brand/Contact";

// Works and Services pages
import Workshop from "./pages/works/Workshop";
import Collections from "./pages/works/Collections";
import Lifestyle from "./pages/works/Lifestyle";
import Collaboration from "./pages/works/Collaboration";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          
          {/* Brand routes */}
          <Route path="/about/story" element={<BrandStory />} />
          <Route path="/about/founder" element={<Founder />} />
          <Route path="/about/craft" element={<Craft />} />
          <Route path="/about/milestones" element={<Milestones />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Works and Services routes */}
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/lifestyle" element={<Lifestyle />} />
          <Route path="/collaboration" element={<Collaboration />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
