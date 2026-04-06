import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import HealingDropdown from "./HealingDropdown";
import MobileMenu from "./MobileMenu";
import Button from "../ui/Button";

const MainNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
      fixed top-0 left-0 right-0 z-50
      transition-[colors,shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
      ${
        isScrolled
          ? "bg-[#FFF9F1] shadow-md"
          : "bg-transparent backdrop-blur-md"
      }
    `}
    >
      {/*outer container*/}
      <div
        className={`mx-auto transition-all duration-500 ${
          isScrolled ? "max-w-full px-4 py-2" : "max-w-7xl px-4 py-4 mt-3"
        }`}
      >
        {/*Floating card before scroll*/}
        <div
          className={`
          transition-all duration-300
          ${
            isScrolled
              ? "rounded-none px-3 py-1" // full-width bar, smaller padding
              : "bg-[#FFF9F1] backdrop-blur-sm rounded-2xl shadow-md px-6 py-2" // floating rounded card on hero
          }
        `}
        >
          <div
            className={`
            flex items-center justify-between
            transition-[height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${isScrolled ? "h-20" : "h-24"}
          `}
          >
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <div
                className={`logoClass flex items-center w-40 md:w-40 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isScrolled
                    ? "flex-row items-center space-x-2 scale-110"
                    : "flex-col items-center scale-120"
                }`}
              >
                <img
                  src="/images/site/Logo Round.png"
                  alt="wellmoon veda logo"
                  className="w-auto max-w-full h-12 md:h-12"
                />
                <img
                  src="/images/site/Letter Logo.png"
                  alt="wellmoon veda tagline"
                  className="w-auto max-w-full h-9 md:h-8"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                to="/"
                className="font-body text-lg font-medium text-foreground hover:text-[#be9d31] transition-colors"
              >
                Home
              </Link>

              <HealingDropdown />

              <Link
                to="/plan-and-pricing"
                className="font-body text-lg font-medium text-foreground hover:text-[#be9d31] transition-colors"
              >
                Plans & Pricing
              </Link>
              <Link
                to="/about"
                className="font-body text-lg font-medium text-foreground hover:text-[#be9d31] transition-colors"
              >
                About
              </Link>
              <Link
                to="/blog"
                className="font-body text-lg font-medium text-foreground hover:text-[#be9d31] transition-colors"
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="font-body text-lg font-medium text-foreground hover:text-[#be9d31] transition-colors"
              >
                Contact
              </Link>
            </div>

            {/* Auth Buttons (Desktops) */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button variant="primary" onClick={() => navigate("/auth/login")}>
                Login
              </Button>
              <Button
                variant="primary"
                onClick={() => navigate("/auth/signup")}
              >
                Sign Up
              </Button>
            </div>

            {/*Mobile Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden"
            >
              ☰
            </button>
          </div>
          {/*Mobile Menu Component */}
          <MobileMenu
            isOpen={mobileOpen}
            onClose={() => setMobileOpen(false)}
          />
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
