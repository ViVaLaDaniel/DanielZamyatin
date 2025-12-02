"use client";

import { useState, useEffect } from "react";
import { navLinks, languages } from "@/lib/config";
import { Menu, X, ChevronUp, Globe } from "lucide-react";
import { useLanguageStore } from "@/store/useLanguageStore";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  
  const { language, setLanguage } = useLanguageStore();

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
                  {link.name[language]}
                </a>
              ))}
              
              {/* Language Switcher */}
              <div className="relative">
                <button 
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Globe size={20} />
                  <span className="uppercase">{language}</span>
                </button>

                <AnimatePresence>
                  {isLangMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-2 w-40 bg-[#0a0a0a] border border-white/10 rounded-lg shadow-xl overflow-hidden"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code as any);
                            setIsLangMenuOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2 text-sm hover:bg-white/10 transition-colors flex items-center gap-3 ${
                            language === lang.code ? "text-blue-400 bg-white/5" : "text-gray-300"
                          }`}
                        >
                          <span>{lang.flag}</span>
                          {lang.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-4 md:hidden">
              <button 
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="text-gray-300"
              >
                <span className="uppercase font-bold">{language}</span>
              </button>
              <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden mt-4 glass p-4 rounded-lg">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="block py-2 text-gray-300 hover:text-amber-400 transition-colors">
                  {link.name[language]}
                </a>
              ))}
              
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-xs text-gray-500 mb-2 uppercase">Select Language</p>
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as any);
                        setIsOpen(false);
                      }}
                      className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm ${
                        language === lang.code ? "bg-blue-500/20 text-blue-400" : "bg-white/5 text-gray-300"
                      }`}
                    >
                      <span>{lang.flag}</span>
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>
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
