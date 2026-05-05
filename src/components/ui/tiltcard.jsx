// TiltCard.jsx
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

export function TiltCard({ image, title, children }) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(ySpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: "800px" }}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          borderRadius: "16px",
          overflow: "hidden",
          width: "280px",
          height: "360px",
          cursor: "pointer",
        }}
        whileHover={{ scale: 1.03 }}
      >
        <img
          src={image}
          alt={title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        {/* Content elevated in 3D */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            padding: "1rem",
            transform: "translateZ(40px)",  /* pops forward */
            color: "white",
            fontWeight: 500,
          }}
        >
          {title}
        </div>
      </motion.div>
    </div>
  );
}