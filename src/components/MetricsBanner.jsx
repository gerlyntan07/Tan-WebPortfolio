import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, useInView } from "motion/react";

const CHAR_SET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ#%&*+-";
const NUM_SET = "0123456789";

function ShuffleText({
  targetText,
  isNumberOnly = false,
  triggerKey = 0,
  duration = 800,
}) {
  const [displayText, setDisplayText] = useState(targetText);
  const animationFrameRef = useRef(null);

  const scramble = useCallback(() => {
    const chars = isNumberOnly ? NUM_SET : CHAR_SET;
    const totalFrames = Math.max(1, Math.round((duration / 1000) * 60));
    let frame = 0;

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    const tick = () => {
      frame++;
      const progress = frame / totalFrames;

      const nextText = targetText
        .split("")
        .map((char, index) => {
          if (char === " ") return " ";
          const charProgress = progress * targetText.length;
          if (index < charProgress) {
            return targetText[index];
          }
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      setDisplayText(nextText);

      if (frame < totalFrames) {
        animationFrameRef.current = requestAnimationFrame(tick);
      } else {
        setDisplayText(targetText);
      }
    };

    animationFrameRef.current = requestAnimationFrame(tick);
  }, [targetText, isNumberOnly, duration]);

  useEffect(() => {
    if (triggerKey > 0) {
      scramble();
    }
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [triggerKey, scramble]);

  return <span>{displayText}</span>;
}

function MetricItem({ metric, index, containerInView }) {
  const [triggerKey, setTriggerKey] = useState(0);

  useEffect(() => {
    if (!containerInView) return;

    // Initial trigger when scrolled into view
    const initialTimer = setTimeout(() => {
      setTriggerKey((prev) => prev + 1);
    }, index * 150);

    // Loop every 3.5 seconds
    const interval = setInterval(() => {
      setTriggerKey((prev) => prev + 1);
    }, 3500);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [containerInView, index]);

  const handleMouseEnter = () => {
    setTriggerKey((prev) => prev + 1);
  };

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col gap-2 items-center justify-center p-5 text-center rounded-xl transition-all duration-300 cursor-default select-none"
    >
      <div className="relative flex items-baseline justify-center gap-0.5">
        <p className="text-3xl lg:text-4xl font-bold font-serif text-gray-800 tracking-tight transition-transform duration-300 group-hover:scale-105">
          <ShuffleText
            targetText={metric.value}
            isNumberOnly={true}
            triggerKey={triggerKey}
            duration={700}
          />
          <span className="text-accent font-serif ml-1 transition-colors duration-300 group-hover:text-amber-500">
            {metric.unit}
          </span>
        </p>
      </div>

      <p className="text-xs sm:text-sm text-gray-500 font-mono leading-tight tracking-wide uppercase transition-colors duration-300 group-hover:text-gray-900">
        <ShuffleText
          targetText={metric.label}
          isNumberOnly={false}
          triggerKey={triggerKey}
          duration={900}
        />
      </p>
    </motion.div>
  );
}

function MetricsBanner() {
  const bannerRef = useRef(null);
  const isInView = useInView(bannerRef, { once: false, amount: 0.2 });

  const metrics = [
    { label: "Projects Completed", value: "10", unit: "+" },
    { label: "Full-Stack Frameworks", value: "3", unit: "+" },
    { label: "Cloud Availability", value: "99", unit: "%" },
    { label: "IoT & Hardware Integration", value: "2", unit: "+" },
  ];

  return (
    <main
      ref={bannerRef}
      className="w-full p-6 lg:p-10 grid grid-cols-2 md:grid-cols-4 gap-4 bg-white shadow-xs backdrop-blur-xs"
    >
      {metrics.map((metric, index) => (
        <MetricItem
          key={metric.label}
          metric={metric}
          index={index}
          containerInView={isInView}
        />
      ))}
    </main>
  );
}

export default MetricsBanner;
