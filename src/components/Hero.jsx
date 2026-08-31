import React, { useEffect, useState, Suspense, lazy } from "react";
import logo from "../assets/gt-3d.png";
import { motion, AnimatePresence } from "motion/react";
import folder from "../assets/folder-icon.png";
import coffeeImg from "../assets/floating-images/coffee.png?w=680&format=webp&quality=76";
import cursorImg from "../assets/floating-images/cursor.png?w=360&format=webp&quality=76";
import guitarImg from "../assets/floating-images/guitar.png?w=560&format=webp&quality=76";
import paintImg from "../assets/floating-images/paint.png?w=760&format=webp&quality=76";
import pencilImg from "../assets/floating-images/pencil.png?w=640&format=webp&quality=76";
import sunglassesImg from "../assets/floating-images/stylish-silver-aviator-sunglasses.png?w=320&format=webp&quality=76";
import Loading from "./ui/loading";

const CreativeFolder = lazy(() => import("./CreativeFolder"));

const floatingItems = [
  {
    id: "pencil",
    src: pencilImg,
    className:
      "right-[70%] top-[10%] w-30 md:top-[16%] md:w-40 lg:right-[80%] lg:w-[20%]",
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
      "right-[30%] bottom-[17%] w-[38px] md:right-[30%] md:bottom-[10%] md:w-20 lg:right-[30%] lg:w-[66px]",
    animate: { y: [0, -14, 0], x: [0, 8, 0], rotate: [-10, -2, -10] },
    duration: 7,
    delay: 0.3,
  },
  {
    id: "guitar",
    src: guitarImg,
    className:
      "right-[-8%] top-[15%] w-40 md:right-[20%] md:top-[18%] md:w-[20%] lg:right-[25%] lg:top-[20%] lg:w-[15%]",
    animate: { y: [0, -16, 0], x: [0, -10, 0], rotate: [18, 14, 18] },
    duration: 8,
    delay: 1,
  },
  {
    id: "paint",
    src: paintImg,
    className:
      "right-[60%] top-[80%] w-50 md:right-[70%] md:top-[80%] md:w-70 lg:top-[75%] lg:right-[70%] lg:w-[25%]",
    animate: { y: [0, -15, 0], x: [0, 8, 0], rotate: [-10, -4, -10] },
    duration: 8.5,
    delay: 1.2,
  },
  {
    id: "coffee",
    src: coffeeImg,
    className:
      "right-[4%] bottom-[8%] w-25 md:right-[7%] md:bottom-[20%] md:w-35 lg:right-[9%] lg:w-40",
    animate: { y: [0, -12, 0], x: [0, 7, 0], rotate: [-9, -3, -9] },
    duration: 8.7,
    delay: 1.1,
  },
];

const FloatingDecor = React.memo(function FloatingDecor() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-[4]"
      aria-hidden="true"
    >
      {floatingItems.map((item) => (
        <motion.img
          key={item.id}
          src={item.src}
          alt=""
          loading="lazy"
          decoding="async"
          fetchpriority="low"
          draggable={false}
          style={{ willChange: "transform" }}
          className={`absolute select-none opacity-90 md:opacity-95 grayscale-75 ${item.className}`}
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
  );
});

function Hero({ showFolder, setShowFolder }) {
  const fullName = "Gerlyn Tan";
  const [typedName, setTypedName] = useState("");
  const [isDeletingName, setIsDeletingName] = useState(false);

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

  return (
    <main className="w-full relative min-h-screen bg-primary flex items-center justify-center overflow-hidden">
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

      <FloatingDecor />

      <div className="w-[90%] lg:w-[75%] z-30 mx-auto flex flex-col items-center">
        <motion.img
          src={logo}
          alt="Logo"
          className="w-35 mx-auto drop-shadow-2xl"
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

        <div className="flex flex-col mx-auto items-center [&>p]:text-sm [&>p]:2xl:text-lg [&>p]:text-darkgray text-center gap-5">
          <p className="font-mono">Say hello to my world! I am</p>
          <h2
            className="font-serif text-5xl md:text-6xl text-accent text-shadow-md"
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
          </h2>
          <p className="font-mono lg:w-2/3">
            A full-stack developer dedicated to developing appealing, creative,
            and user-friendly projects. Actively seeking job opportunities to
            apply my skills in real-world applications and contribute to
            innovative solutions.
          </p>

          <motion.div
            className="md:hidden flex w-max items-center gap-2 rounded-xl border border-primary-foreground/20 bg-white/75 px-3 py-2 shadow-[0_6px_18px_rgba(52,79,31,0.12)] backdrop-blur-sm"
            whileHover={{ scale: 1.03 }}
            onClick={() => setShowFolder(true)}
          >
            <img src={folder} className="w-7" alt="vangoat folder" />
            <p className="font-mono text-[11px] text-primary-foreground/70">
              vangoat/
            </p>
          </motion.div>

          <motion.div
            className="hidden items-center md:flex md:flex-col cursor-pointer"
            onClick={() => setShowFolder(!showFolder)}
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.9 }}
            animate={{ y: [0, -10, 0], rotate: [0, -3, 0] }}
            transition={{
              y: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <img src={folder} className="w-20" alt="vangoat folder" />
            <p className="font-mono text-xs tracking-[0.02em] text-darkgray/80">
              vangoat/
            </p>
          </motion.div>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {showFolder && (
          <Suspense fallback={<Loading />}>
            <CreativeFolder setShowFolder={setShowFolder} />
          </Suspense>
        )}
      </AnimatePresence>
    </main>
  );
}

export default Hero;
