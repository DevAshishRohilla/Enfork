import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import AppButton from "@/components/common/AppButton";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === "/contact-us") {
      setActiveLink("contact-us");
      return;
    }
    if (path === "/ventures") {
      setActiveLink("ventures");
      return;
    }

    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, [location.pathname]);

  const navLinks = [
    { id: "home", label: "Home", href: "/" },
    { id: "about", label: "About us", href: "/#about" },
    { id: "ventures", label: "Ventures", href: "/ventures" },
    { id: "contact-us", label: "Contact Us", href: "/contact-us" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10"
    >
      <div className="section-container flex items-center justify-between py-3 sm:py-4 md:py-5 lg:py-6 relative">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 select-none z-50">
          <img
            src="./whiteEnfork.webp"
            alt="Enfork"
            className="w-[120px] sm:w-[130px] h-auto object-contain inverted"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex absolute inset-x-0 top-1/2 -translate-y-1/2 items-center justify-center z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-1 py-1 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`px-5 py-2 text-sm rounded-full transition-colors ${
                  activeLink === link.id
                    ? "bg-white/20 text-white font-medium"
                    : "text-gray-300 hover:bg-white/10"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Desktop Button */}
        <div className="hidden lg:flex items-center gap-3 z-50">
          <Link to="tel:1800363675">
            <AppButton label="1800 ENFORK" isBlack={true} />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white z-50"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-black/95 border-t border-white/10 backdrop-blur-lg lg:hidden"
          >
            <div className="flex flex-col items-center text-center py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium transition-colors ${
                    activeLink === link.id
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-4">
                <Link to="tel:+1800363675">
                  <AppButton label="+1800363675" isBlack={true} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
