import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HealingDropdown from "./HealingDropdown";
import MobileMenu from "./MobileMenu";
import Button from "../ui/Button";

export default function SecondaryNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFF9F1] shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/images/main logo.png"
              alt="logo"
              className="h-14 md:h-25"
            />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-lg font-medium hover:text-[#be9d31]">
              Home
            </Link>

            <HealingDropdown />

            <Link
              to="/plan-and-pricing"
              className="text-lg font-medium hover:text-[#be9d31]"
            >
              Plans & Pricing
            </Link>

            <Link
              to="/about"
              className="text-lg font-medium hover:text-[#be9d31]"
            >
              About
            </Link>

            <Link
              to="/blog"
              className="text-lg font-medium hover:text-[#be9d31]"
            >
              Blog
            </Link>

            <Link
              to="/contact"
              className="text-lg font-medium hover:text-[#be9d31]"
            >
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
