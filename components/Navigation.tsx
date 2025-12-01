"use client";

import { useState, useEffect } from "react";
import { navLinks } from "@/lib/config";
import { Menu, X, ChevronUp } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [lang] = useState<"en" | "ru">("en");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass py-4" : "py-6"}`}>
        <div className="container">
          <div className="flex justify-between items-center">
            <a href="#hero" className="text-2xl font-bold gradient-text">DZ</a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-gray-300 hover:text-amber-400 transition-colors">
                  {link.name[lang]}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden mt-4 glass p-4 rounded-lg">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="block py-2 text-gray-300 hover:text-amber-400 transition-colors">
                  {link.name[lang]}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button onClick={scrollToTop} className="fixed bottom-8 right-8 p-4 btn-gold rounded-full shadow-lg z-50 animate-bounce">
          <ChevronUp size={24} />
        </button>
      )}
    </>
  );
}
