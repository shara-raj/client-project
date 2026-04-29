import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import HealingDropdown from "./HealingDropdown";
import MobileMenu from "./MobileMenu";
import Button from "../ui/Button";
import { Search } from "lucide-react";
import SearchInput from "@/modules/search/components/SearchInput";

export default function SecondaryNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const navigate = useNavigate();

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
    <nav className="sticky top-0 z-50 bg-[#FFF9F1] shadow-md">
      <div className={isSearchOpen ? "blur-sm pointer-events-none" : ""}>
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
                Pricing
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
              <button
                onClick={() => setIsSearchOpen(true)}
                className="px-2 text-primary text-lg font-medium flex flex-row justify-center items-center space-x-2 border border-primary rounded-full"
              >
                <p>Search</p>
                <Search size={16} />
              </button>
            </div>

            {/* AUTH */}
            <div className="hidden lg:flex items-center space-x-4">
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

            {/* MOBILE ICON */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-2xl"
            >
              ☰
            </button>
          </div>

          {/* MOBILE MENU */}
          <MobileMenu
            isOpen={mobileOpen}
            onClose={() => setMobileOpen(false)}
          />
        </div>
      </div>
      {isSearchOpen && (
        <div
          className="fixed inset-0 z-50"
          onClick={() => setIsSearchOpen(false)}
        >
          <div className="absolute top-5 right-5 rounded-lg w-1/2 h-1/6 flex items-center px-4 bg-white z-50">
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
  );
}
