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
          overflow: "hidden",
          width: "280px",
          height: "360px",
          cursor: "pointer",          
        }}
        className="px-3 pt-3 bg-linear-to-r from-violet-100 via-white to-orange-50 rounded-2xl border-2 border-gray-300 mt-3 mb-8"
        whileHover={{ scale: 1.03 }}
        
      >
        <img
          src={image}
          alt={title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          className="rounded-lg"
        />
        {/* Content elevated in 3D */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            transform: "translateZ(40px)",  /* pops forward */            
            fontWeight: 500,
            width: "100%",            
          }}
          className="font-mono bg-linear-to-r from-violet-100 via-white to-orange-50 h-10 text-sm text-darkgray"
        >
          {title}
        </div>
      </motion.div>
    </div>
  );
}