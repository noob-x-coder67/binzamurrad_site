import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    // Portfolio — uncomment when first project is ready
    // { name: "Portfolio", path: "/portfolio" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* LOGO — Uses Bz_logo.png from public folder */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-[#0F3D2E] border border-[#C8A96A]/50 flex items-center justify-center">
              <span
                className="text-sm font-bold text-[#C8A96A]"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                BZ
              </span>
            </div>
            <span
              className="text-xl font-bold text-white"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Bin<span className="text-[#C8A96A]">Zamurrad</span>
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={
                  "transition-colors " +
                  (isActive(link.path)
                    ? "text-[#C8A96A]"
                    : "text-gray-300 hover:text-white")
                }
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={
                  "block py-2 transition-colors " +
                  (isActive(link.path)
                    ? "text-[#C8A96A]"
                    : "text-gray-300 hover:text-white")
                }
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
