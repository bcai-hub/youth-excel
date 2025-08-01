import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import WhoWeAre from "./pages/WhoWeAre";
import OurApproach from "./pages/OurApproach";
import OurTeam from "./pages/OurTeam";
import Solutions from "./pages/Solutions";
import Projects from "./pages/Projects";
import Stories from "./pages/Stories";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navigation from "./components/ui/navigation";
import Footer from "./components/ui/footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/who-we-are" element={<WhoWeAre />} />
              <Route path="/our-approach" element={<OurApproach />} />
              <Route path="/our-team" element={<OurTeam />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/stories" element={<Stories />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/contact" element={<Contact />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
