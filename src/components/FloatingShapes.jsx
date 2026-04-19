import { motion } from "motion/react";

const shapes = [
  { size: 60, x: "10%", y: "20%", duration: 20, delay: 0 },
  { size: 40, x: "80%", y: "30%", duration: 25, delay: 2 },
  { size: 80, x: "70%", y: "70%", duration: 30, delay: 4 },
  { size: 50, x: "20%", y: "80%", duration: 22, delay: 1 },
  { size: 35, x: "90%", y: "50%", duration: 28, delay: 3 },
  { size: 45, x: "15%", y: "50%", duration: 26, delay: 5 }
];

export function FloatingShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full opacity-10"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            background: index % 3 === 0
              ? "#F4991A"
              : index % 3 === 1
              ? "#344F1F"
              : "#F2EAD3"
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay
          }}
        />
      ))}
    </div>
  );
}
