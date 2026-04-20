import React, { useEffect, useState } from "react";
import logo from "../assets/gt-3d.png";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { HiOutlineDownload } from "react-icons/hi";
import Button from "./ui/button";
import resumePdf from "../assets/Gerlyn-Tan.pdf";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = resumePdf;
    link.download = "Gerlyn-Tan-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="fixed w-full bg-primary/85 top-0 left-0 right-0 z-100 backdrop-blur-md">
      <div className="flex items-center justify-between px-4 lg:px-[10%] lg:py-2">
        <div className="w-13">
          <img src={logo} alt="Gerlyn Tan" />
        </div>

        <button
          className="text-2xl text-primary-foreground transition-transform duration-200 md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <IoClose /> : <IoIosMenu />}
        </button>

        <nav className="hidden md:block font-mono text-sm">
          <ul className="flex items-center gap-15 text-primary-foreground">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="hidden md:block font-mono text-sm">
          <ul className="flex items-center gap-5 text-primary-foreground">
            <li>
              <Button
                btn_text="Resume"
                className="px-3 py-1"
                icon={<HiOutlineDownload />}
                onClick={handleResumeDownload}
              />
            </li>
          </ul>
        </nav>
      </div>

      <nav
        className={`
            overflow-hidden bg-primary/95 transition-all duration-300 ease-out md:hidden shadow-lg/2 backdrop-blur-2xl
            ${isMenuOpen ? "max-h-80" : "max-h-0 opacity-0 pointer-events-none"}
          `}
      >
        <ul className="flex flex-col gap-2 px-7 py-4 text-darkgray">
          {navItems.map((item, index) => (
            <li
              key={`mobile-${item.href}`}
              className={`font-mono transition-all duration-300 ease-out ${
                isMenuOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-3 opacity-0"
              }`}
              style={{
                transitionDelay: isMenuOpen ? `${index * 70 + 50}ms` : "0ms",
              }}
            >
              <a
                className="block py-1 text-sm"
                href={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="text-sm font-mono">
            <Button
              btn_text="Resume"
              className="px-3 py-1"
              icon={<HiOutlineDownload />}
              onClick={handleResumeDownload}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
