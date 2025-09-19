import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Import pages
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Tourists from "./pages/Tourists";
import Incidents from "./pages/Incidents";
import DashboardLayout from "./components/layout/DashboardLayout";
import NotFound from "./pages/NotFound";

// Simple auth check component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const auth = localStorage.getItem('sentinelview_auth');
  return auth ? <>{children}</> : <Navigate to="/login" replace />;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }>
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="tourists" element={<Tourists />} />
            <Route path="incidents" element={<Incidents />} />
            <Route path="zones" element={<div className="p-8 text-center"><h2 className="text-2xl font-bold">Zone Management</h2><p className="text-muted-foreground mt-2">Coming soon...</p></div>} />
            <Route path="analytics" element={<div className="p-8 text-center"><h2 className="text-2xl font-bold">Analytics</h2><p className="text-muted-foreground mt-2">Coming soon...</p></div>} />
            <Route path="assistant" element={<div className="p-8 text-center"><h2 className="text-2xl font-bold">AI Assistant</h2><p className="text-muted-foreground mt-2">Coming soon...</p></div>} />
            <Route path="settings" element={<div className="p-8 text-center"><h2 className="text-2xl font-bold">Settings</h2><p className="text-muted-foreground mt-2">Coming soon...</p></div>} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
