import { Outlet } from "react-router-dom";
import SecondaryNavbar from "../../components/navigation/SecondaryNavbar";
import Footer from "@/components/Footer/Footer";

function SecondaryLayout() {
  return (
    <div>
      <SecondaryNavbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default SecondaryLayout;
