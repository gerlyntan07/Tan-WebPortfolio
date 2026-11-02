import { motion } from "motion/react";

/**
 * Shared editorial heading: mono eyebrow, big serif title, mono lede.
 */
function SectionHeading({ eyebrow, title, description, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex flex-col ${className}`}
    >
      <p className="font-mono text-xs md:text-sm tracking-[0.18em] uppercase text-tertiary mb-3">
        {eyebrow}
      </p>
      <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] text-gray-900 text-balance">
        {title}
      </h2>
      {description && (
        <p className="font-mono text-sm md:text-[15px] leading-relaxed text-darkgray mt-5 max-w-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}

export default SectionHeading;

