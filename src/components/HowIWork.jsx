import React from "react";
import { motion } from "motion/react";
import SectionHeading from "./ui/SectionHeading";

const steps = [
  {
    title: "Listen",
    description:
      "Meet clients and stakeholders, then turn their business needs into a technical plan.",
    tags: ["Discovery", "Scope"],
  },
  {
    title: "Design",
    description:
      "Sketch flows and screens in Figma before a single component is written.",
    tags: ["Figma", "Draw.io"],
  },
  {
    title: "Build",
    description:
      "React, React Native and FastAPI on a PostgreSQL schema built for the data.",
    tags: ["React", "FastAPI", "PostgreSQL"],
  },
  {
    title: "Ship & care",
    description:
      "Deploy on AWS or Vercel, then test, troubleshoot and keep it healthy.",
    tags: ["AWS", "Vercel"],
  },
];

const STEP_DELAY = 0.18;

function HowIWork() {
  return (
    <section
      id="process"
      className="relative w-full overflow-hidden bg-primary py-28 md:py-36"
    >
      <div className="absolute inset-0 pointer-events-none bg-secondary" aria-hidden="true" />

      <div className="relative mx-auto w-[90%] lg:w-[80%] max-w-6xl">
        <SectionHeading
          eyebrow="How I work"
          title="From a client’s idea to production"
          description="Design and engineering under one roof means fewer hand-offs and faster feedback."
        />

        <div className="relative mt-14 md:mt-20">
          {/* Track: horizontal on desktop, vertical on mobile */}
          <div
            className="absolute left-[7px] top-2 bottom-2 w-px bg-black/10 md:left-0 md:right-0 md:top-[7px] md:bottom-auto md:h-px md:w-auto"
            aria-hidden="true"
          />
          <motion.div
            className="absolute left-[7px] top-2 bottom-2 w-px origin-top bg-gray-900 md:hidden"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            aria-hidden="true"
          />
          <motion.div
            className="absolute hidden md:block left-0 right-0 top-[7px] h-px origin-left bg-gray-900"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            aria-hidden="true"
          />

          <ol className="relative grid gap-10 md:grid-cols-4 md:gap-8">
            {steps.map((step, index) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 + index * STEP_DELAY }}
                className="group relative pl-9 md:pl-0"
              >
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 16,
                    delay: 0.2 + index * STEP_DELAY,
                  }}
                  className="absolute left-0 top-0 md:relative flex h-[15px] w-[15px] items-center justify-center rounded-full bg-accent ring-4 ring-primary transition-transform duration-300 group-hover:scale-125"
                  aria-hidden="true"
                >
                  <span className="absolute inset-0 rounded-full bg-accent/40 opacity-0 group-hover:animate-ping group-hover:opacity-100" />
                </motion.span>

                <p className="font-mono text-xs font-medium text-tertiary md:mt-8">
                  Step {index + 1}
                </p>
                <h3 className="font-serif text-3xl text-gray-900 mt-2 transition-colors duration-300 group-hover:text-accent">
                  {step.title}
                </h3>
                <p className="font-google text-[15px] leading-relaxed text-black/60 mt-2 max-w-xs">
                  {step.description}
                </p>
                <ul className="flex flex-wrap gap-1.5 mt-4">
                  {step.tags.map((tag) => (
                    <li
                      key={tag}
                      className="font-mono text-[10px] uppercase tracking-wider text-darkgray rounded-full border border-black/10 bg-white/60 px-2 py-0.5"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default HowIWork;