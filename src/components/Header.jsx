import { useState, useEffect, useCallback } from "react";
import logo from "../assets/gt-3d.png";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { HiOutlineDownload } from "react-icons/hi";
import Button from "./ui/button";
import resumePdf from "../assets/Gerlyn-Tan.pdf";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Handle header background blur and active section tracking on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sectionIds = navItems.map((item) => item.href.replace("#", ""));
      const scrollPos = window.scrollY + 120; // offset buffer

      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            current = `#${id}`;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeMenu();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeMenu]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Smooth scroll handler with fixed header compensation
  const scrollToSection = (e, href) => {
    e.preventDefault();
    closeMenu();

    if (href === "#hero" || href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (window.location.hash) {
        window.history.pushState(null, "", window.location.pathname);
      }
      return;
    }

    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerOffset = 72;
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: Math.max(0, elementPosition - headerOffset),
        behavior: "smooth",
      });
      window.history.pushState(null, "", href);
    }
  };

  const handleResumeDownload = () => {
    closeMenu();
    const link = document.createElement("a");
    link.href = resumePdf;
    link.download = "Gerlyn-Tan-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <header
        className={`fixed border-0 top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-primary/90 backdrop-blur-md border-b border-black/8 shadow-xs py-1.5 md:py-2"
            : "bg-transparent py-2 md:py-3 border-0"
        }`}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-[10%]">
          {/* Brand Logo - Click to scroll to top */}
          <button
            type="button"
            onClick={(e) => scrollToSection(e, "#hero")}
            className="w-10 sm:w-11 cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95"
            aria-label="Gerlyn Tan - Scroll to top"
          >
            <img src={logo} alt="Gerlyn Tan Logo" className="w-full h-auto drop-shadow-sm" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:block font-mono text-sm" aria-label="Main Navigation">
            <ul className="flex items-center gap-6 lg:gap-8 xl:gap-10 text-primary-foreground">
              {navItems.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <li key={item.href} className="relative">
                    <a
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href)}
                      className={`relative inline-block py-1 transition-colors duration-200 cursor-pointer ${
                        isActive
                          ? "text-accent font-medium"
                          : "text-darkgray hover:text-gray-900"
                      }`}
                    >
                      {item.label}
                      {isActive && (
                        <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent rounded-full transition-all" />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Desktop Action: Resume Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              btn_text="Resume"
              className="px-3.5 py-1.5 text-xs font-mono"
              icon={<HiOutlineDownload className="text-sm" />}
              onClick={handleResumeDownload}
            />
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-black/8 text-2xl text-gray-800 transition-colors hover:bg-black/5 md:hidden cursor-pointer"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <IoClose /> : <IoIosMenu />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <nav
          className={`overflow-hidden transition-all duration-300 ease-out md:hidden ${
            isMenuOpen
              ? "max-h-[420px] border-b border-black/8 bg-primary/98 shadow-xl backdrop-blur-2xl"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
          aria-label="Mobile Navigation"
        >
          <ul className="flex flex-col gap-1.5 px-6 pt-4 pb-6 font-mono text-sm">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href;
              return (
                <li
                  key={`mobile-${item.href}`}
                  className={`transition-all duration-300 ease-out ${
                    isMenuOpen
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-3 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isMenuOpen ? `${index * 50 + 40}ms` : "0ms",
                  }}
                >
                  <a
                    className={`flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm transition-colors cursor-pointer ${
                      isActive
                        ? "bg-accent/15 text-accent font-semibold"
                        : "text-darkgray hover:bg-black/5 hover:text-gray-900"
                    }`}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    )}
                  </a>
                </li>
              );
            })}
            <li
              className={`pt-2 transition-all duration-300 ease-out ${
                isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"
              }`}
              style={{
                transitionDelay: isMenuOpen ? `${navItems.length * 50 + 40}ms` : "0ms",
              }}
            >
              <Button
                btn_text="Download Resume"
                className="w-full justify-center py-2 text-xs font-mono"
                icon={<HiOutlineDownload className="text-base" />}
                onClick={handleResumeDownload}
              />
            </li>
          </ul>
        </nav>
      </header>

      {/* Dimmed backdrop when mobile menu is open - tap outside to close */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/25 backdrop-blur-[2px] md:hidden transition-opacity duration-300"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
}

export default Header;
