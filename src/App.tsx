import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LocationSelector from "./pages/LocationSelector";
import Home from "./pages/Home";
import Location from "./pages/Location";
import FAQ from "./pages/FAQ";
import NextLevelLaundromat from "./pages/NextLevelLaundromat";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import { LanguageProvider } from "./contexts/LanguageContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LocationSelector />} />
            <Route path="/:market" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="location" element={<Location />} />
              <Route path="next-level-laundromat" element={<NextLevelLaundromat />} />
              <Route path="faq" element={<FAQ />} />
              <Route path="privacy-policy" element={<PrivacyPolicy />} />
            </Route>
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
