import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const healingPaths = [
  { name: "Aura Healing", to: "/healing-path/aura-healing" },
  { name: "Mudra Healing", to: "/healing-path/mudra-healing" },
  { name: "Sound Healing", to: "/healing-path/sound-healing" },
  {
    name: "Virtual Nature Healing",
    to: "/healing-path/virtual-nature-healing",
  },
  { name: "Wellness Yoga", to: "/healing-path/wellness-yoga" },
];

function HealingDropdown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/*Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="font-body text-lg font-medium cursor-pointer text-foreground hover:text-[#be9d31] transition-colors"
      >
        Healing Path
      </button>
      {/*Dropdown */}
      {open && (
        <div className="absolute left-0 mt-4 w-72 rounded-2xl bg-white shadow-xl border border-[#e5d8c8] p-3 z-50">
          <ul className="space-y-2">
            {healingPaths.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-lg hover:bg-[#d4af37]/30 transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default HealingDropdown;
