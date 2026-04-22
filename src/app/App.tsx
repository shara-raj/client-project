import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { AuthProvider } from "@/modules/auth";
import MaintenanceGate from "@/shared/components/MaintenanceGate";
import { SettingsProvider } from "@/modules/dashboard/admin/context/SettingsContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <SettingsProvider>
            <ScrollToTop />

            <MaintenanceGate>
              <AppRoutes />
            </MaintenanceGate>
          </SettingsProvider>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
