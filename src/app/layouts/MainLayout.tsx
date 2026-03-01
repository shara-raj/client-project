import { Outlet } from "react-router-dom";
import MainNavbar from "../../components/navigation/MainNavbar";
import Footer from "@/components/Footer/Footer";

function MainLayout() {
  return (
    <div>
      <MainNavbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
