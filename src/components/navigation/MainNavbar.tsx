import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import HealingDropdown from "./HealingDropdown";
import MobileMenu from "./MobileMenu";
import Button from "../ui/Button";
import { Search } from "lucide-react";
import SearchInput from "@/modules/search/components/SearchInput";

const MainNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isSearchOpen]);

  return (
    <>
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
        <div className={isSearchOpen ? "blur-sm pointer-events-none" : ""}>
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
            flex items-center justify-between gap-5
            transition-[height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${isScrolled ? "h-20" : "h-24"}
          `}
              >
                {/* Logo */}
                <Link to="/" className="flex items-center">
                  <div
                    className={`logoClass flex items-center pr-2 w-40 md:w-40 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isScrolled
                        ? "flex-row items-center space-x-2 scale-110 "
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
                <div className="hidden lg:flex items-center space-x-8 md:space-x-3 gap-3.5">
                  <Link to="/" className="font-body text-lg font-medium ">
                    Home
                  </Link>

                  <HealingDropdown />

                  <Link
                    to="/pricing"
                    className="font-body text-lg font-medium "
                  >
                    Pricing
                  </Link>
                  <Link to="/about" className="font-body text-lg font-medium ">
                    About
                  </Link>
                  <Link to="/blog" className="font-body text-lg font-medium ">
                    Blog
                  </Link>
                  <Link
                    to="/contact"
                    className="font-body text-lg font-medium "
                  >
                    Contact
                  </Link>
                  <button
                    onClick={() => setIsSearchOpen(true)}
                    className="px-2 text-primary text-lg font-medium flex flex-row justify-center items-center space-x-2 border border-primary rounded-full"
                  >
                    <p>Search</p>
                    <Search size={16} />
                  </button>
                </div>

                {/* Auth Buttons (Desktops) */}
                <div className="hidden lg:flex items-center space-x-2.5">
                  <Button
                    variant="primary"
                    className="text-lg!"
                    onClick={() => navigate("/auth/login")}
                  >
                    Login
                  </Button>
                  <Button
                    variant="primary"
                    className="text-lg!"
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
        </div>

        {isSearchOpen && (
          <div
            className="fixed inset-0 z-50"
            onClick={() => setIsSearchOpen(false)}
          >
            <div className="absolute top-5 right-5 rounded-lg w-1/2 h-1/2 flex items-center px-4 bg-white z-50">
              <div
                className="max-w-xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <SearchInput />
              </div>

              <button
                onClick={() => setIsSearchOpen(false)}
                className="ml-4 rounded-xl px-1 hover:bg-gray-300"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default MainNavbar;
