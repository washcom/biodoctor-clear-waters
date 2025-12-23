import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Define a dedicated theme for the navbar
const navbarTheme = {
  bg: "bg-white/30 backdrop-blur-lg",
  bgScrolled: "bg-white shadow-xl",
  text: "text-gray-900",
  linkHover: "hover:text-primary",
  buttonGradient: "bg-gradient-to-r from-primary to-secondary",
  buttonHoverScale: "hover:scale-105",
  mobileBg: "bg-white rounded-xl shadow-lg border border-gray-200"
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
  ];

  const scrollToSection = (href: string) => {
    if (href === "#") window.scrollTo({ top: 0, behavior: "smooth" });
    else document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? navbarTheme.bgScrolled : navbarTheme.bg
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("#")}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl shadow-lg animate-pulse">
            B
          </div>
          <div className="hidden sm:block">
            <span className={`text-lg md:text-xl font-bold block leading-tight ${navbarTheme.text}`}>
              Biodoctor Solutions
            </span>
            <span className="text-xs text-gray-500">Sewer & Sanitation Experts</span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className={`relative font-medium ${navbarTheme.text} ${navbarTheme.linkHover} after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full`}
            >
              {link.label}
            </button>
          ))}
          <Button
            onClick={() => scrollToSection("#contact")}
            className={`${navbarTheme.buttonGradient} text-white px-5 py-2 rounded-lg shadow-lg ${navbarTheme.buttonHoverScale} transition-transform`}
          >
           Get in Touch
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`md:hidden mt-2 py-4 mx-4 px-4 ${navbarTheme.mobileBg}`}
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-gray-800 font-medium hover:text-primary transition-colors py-2 text-left`}
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("#contact")}
                className={`${navbarTheme.buttonGradient} text-white px-5 py-2 rounded-lg shadow-lg ${navbarTheme.buttonHoverScale} transition-transform w-full mt-2`}
              >
                Get Quote
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
