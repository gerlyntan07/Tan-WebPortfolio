import React, { useEffect, useState } from "react";
import logo from "../assets/gt-3d.png";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { motion } from "motion/react";
import folder from "../assets/folder-icon.png";
import coffeeImg from "../assets/floating-images/coffee.png";
import cursorImg from "../assets/floating-images/cursor.png";
import guitarImg from "../assets/floating-images/guitar.png";
import paintImg from "../assets/floating-images/paint.png";
import pencilImg from "../assets/floating-images/pencil.png";
import sunglassesImg from "../assets/floating-images/stylish-silver-aviator-sunglasses.png";

function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const fullName = "Gerlyn Tan";
  const [typedName, setTypedName] = useState("");
  const [isDeletingName, setIsDeletingName] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const floatingItems = [
    {
      id: "pencil",
      src: pencilImg,
      className:
        "right-[50%] top-[10%] w-30 md:right-[60%] md:top-[16%] md:w-40 lg:right-[60%] lg:w-40",
      animate: { y: [0, -10, 0], x: [0, 6, 0], rotate: [-24, -16, -24] },
      duration: 6,
      delay: 0.6,
    },
    {
      id: "sunglasses",
      src: sunglassesImg,
      className:
        "right-[2%] top-[38%] w-[80px] sm:w-[92px] md:right-[3%] md:top-[34%] md:w-[108px] lg:w-[124px]",
      animate: { y: [0, -10, 0], x: [0, 7, 0], rotate: [7, 2, 7] },
      duration: 7.5,
      delay: 0.8,
    },
    {
      id: "cursor",
      src: cursorImg,
      className:
        "right-[30%] bottom-[17%] w-[38px] md:right-[40%] md:bottom-[25%] md:w-20 lg:right-[30%] lg:w-[66px]",
      animate: { y: [0, -14, 0], x: [0, 8, 0], rotate: [-10, -2, -10] },
      duration: 7,
      delay: 0.3,
    },
    {
      id: "guitar",
      src: guitarImg,
      className:
        "right-[-8%] top-[19%] w-40 md:right-[20%] md:top-[18%] md:w-[128px] lg:right-[30%] lg:top-[25%] lg:w-50",
      animate: { y: [0, -16, 0], x: [0, -10, 0], rotate: [18, 14, 18] },
      duration: 8,
      delay: 1,
    },
    {
      id: "paint",
      src: paintImg,
      className:
        "right-[60%] top-[80%] w-50 md:right-[70%] md:top-[80%] md:w-70 lg:right-[80%] lg:w-60",
      animate: { y: [0, -15, 0], x: [0, 8, 0], rotate: [-10, -4, -10] },
      duration: 8.5,
      delay: 1.2,
    },
    {
      id: "coffee",
      src: coffeeImg,
      className:
        "right-[4%] bottom-[8%] w-25 md:right-[7%] md:bottom-[8%] md:w-30 lg:right-[9%] lg:w-[92px]",
      animate: { y: [0, -12, 0], x: [0, 7, 0], rotate: [-9, -3, -9] },
      duration: 8.7,
      delay: 1.1,
    },
  ];

  useEffect(() => {
    let timer;

    if (!isDeletingName && typedName !== fullName) {
      timer = window.setTimeout(() => {
        setTypedName(fullName.slice(0, typedName.length + 1));
      }, 110);
    } else if (!isDeletingName && typedName === fullName) {
      timer = window.setTimeout(() => {
        setIsDeletingName(true);
      }, 1200);
    } else if (isDeletingName && typedName.length > 0) {
      timer = window.setTimeout(() => {
        setTypedName(fullName.slice(0, typedName.length - 1));
      }, 65);
    } else {
      timer = window.setTimeout(() => {
        setIsDeletingName(false);
      }, 300);
    }

    return () => window.clearTimeout(timer);
  }, [typedName, isDeletingName, fullName]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <main className="relative min-h-screen bg-primary flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to right, rgba(52,79,31,0.08) 0, rgba(52,79,31,0.08) 1px, transparent 1px, transparent 120px)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 15% 20%, rgba(242,234,211,0.92), transparent 36%), radial-gradient(circle at 80% 70%, rgba(244,153,26,0.2), transparent 34%), radial-gradient(circle at 70% 10%, rgba(52,79,31,0.12), transparent 26%)",
          }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[4]" aria-hidden="true">
        {floatingItems.map((item) => (
          <motion.img
            key={item.id}
            src={item.src}
            alt=""
            className={`absolute select-none opacity-90 md:opacity-95 ${item.className}`}
            animate={item.animate}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay,
            }}
          />
        ))}
      </div>

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
            <ul className="flex items-center gap-5 text-primary-foreground">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
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
          </ul>
        </nav>
      </header>

      <div className="w-[90%] lg:w-[75%] z-10">
        <motion.img
          src={logo}
          alt="Logo"
          className="w-35 drop-shadow-2xl"
          whileHover={{ scale: 1.1, rotate: 5 }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            y: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />

        <div className="flex flex-col mx-auto [&>p]:text-sm md:[&>p]:text-base [&>p]:text-darkgray text-left gap-5">
          <p className="font-mono">Say hello to my world! I am</p>
          <h1
            className="font-serif text-5xl text-accent text-shadow-md"
            aria-label={fullName}
          >
            {typedName}
            <motion.span
              className="ml-1 inline-block h-[0.9em] w-[2px] align-middle bg-accent"
              animate={{ opacity: [1, 0, 1] }}
              transition={{
                duration: 0.85,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </h1>
          <p className="font-mono lg:w-2/3">
            A passionate Computer Science student dedicated to building
            appealing, creative, and user-friendly projects. Let’s craft your
            ideas into reality!
          </p>

          <motion.div
            className="md:hidden flex w-max items-center gap-2 rounded-xl border border-primary-foreground/20 bg-white/75 px-3 py-2 shadow-[0_6px_18px_rgba(52,79,31,0.12)] backdrop-blur-sm"
            whileHover={{ scale: 1.03 }}
          >
            <img src={folder} className="w-7" alt="Creativesidehustle folder" />
            <p className="font-mono text-[11px] text-primary-foreground/70">
              creativesidehustle/
            </p>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute right-[14%] top-[42%] z-20 hidden items-center md:flex md:flex-col cursor-pointer"
        whileHover={{ scale: 1.1, rotate: 5 }}
        animate={{ y: [0, -10, 0], rotate: [0, -3, 0] }}
        transition={{
          y: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <img src={folder} className="w-20" alt="Creativesidehustle folder" />
        <p className="font-mono text-xs tracking-[0.02em] text-darkgray/80">
          creativesidehustle/
        </p>
      </motion.div>
    </main>
  );
}

export default Hero;
