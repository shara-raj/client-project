import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HealingDropdown from "./HealingDropdown";
import MobileMenu from "./MobileMenu";
import Button from "../ui/Button";

export default function SecondaryNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 bg-[#FFF9F1] shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/images/site/Logo.png"
              alt="logo"
              className="h-14 md:h-22"
            />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-lg font-medium ">
              Home
            </Link>

            <HealingDropdown />

            <Link to="/pricing" className="text-lg font-medium ">
              Plans & Pricing
            </Link>

            <Link to="/about" className="text-lg font-medium ">
              About
            </Link>

            <Link to="/blog" className="text-lg font-medium ">
              Blog
            </Link>

            <Link to="/contact" className="text-lg font-medium ">
              Contact
            </Link>
          </div>

          {/* AUTH */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="primary" onClick={() => navigate("")}>
              Login
            </Button>
            <Button variant="primary" onClick={() => navigate("")}>
              Sign Up
            </Button>
          </div>

          {/* MOBILE ICON */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-2xl"
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
      </div>
    </nav>
  );
}
