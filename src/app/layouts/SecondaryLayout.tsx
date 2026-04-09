import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer/Footer";
import SecondaryNavbar from "@/components/navigation/SecondaryNavbar";

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <SecondaryNavbar />

      <main className="flex-grow pattern-bg">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;
