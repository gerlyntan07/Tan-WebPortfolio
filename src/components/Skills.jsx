import { MdWeb } from "react-icons/md";
import { IoColorPaletteOutline, IoGridOutline } from "react-icons/io5";
import { motion } from "motion/react";
import { TbDeviceMobile } from "react-icons/tb";
import { FaFigma } from "react-icons/fa";
import figmaLogo from "../assets/tools/figma.png";
import photopeaLogo from "../assets/tools/photopea.png";
import reactlogo from "../assets/tools/react.png";
import expologo from "../assets/tools/expo.png";
import tailwindLogo from "../assets/tools/tailwind.png";
import fastapiLogo from "../assets/tools/fastapi.png";
import postgresqlLogo from "../assets/tools/postgresql.png";
import awsLogo from "../assets/tools/aws.png";

const skills = {
  mobile: {
    icon: <TbDeviceMobile />,
    title: "Mobile",
    skills: ["React Native", "Expo", "NativeWind", "EAS Build"],
  },
  fullStack: {
    icon: <MdWeb />,
    title: "Full-Stack & Cloud",
    skills: [
      "React",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "PostgreSQL",
      "AWS",
      "Vercel",
    ],
  },
  design: {
    icon: <IoColorPaletteOutline />,
    title: "Design",
    skills: ["Figma", "Canva", "Portraiture", "Krita", "Photopea"],
  },
};

const tools = [
  { name: "Figma", logo: figmaLogo },
  { name: "Photopea", logo: photopeaLogo },
  { name: "React", logo: reactlogo },
  { name: "Expo", logo: expologo },
  { name: "Tailwind CSS", logo: tailwindLogo },
  { name: "FastAPI", logo: fastapiLogo },
  { name: "PostgreSQL", logo: postgresqlLogo },
  { name: "AWS", logo: awsLogo },
];

function Skills() {
  return (
    <main className="flex flex-col gap-3 items-center w-[90%] lg:w-3/5">
      <div className="w-full flex flex-col gap-3 items-center">
        <h1 className="text-3xl md:text-5xl">Skills & Expertise</h1>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {Object.keys(skills).map((key) => (
            <div
              key={key}
              className="mt-4 bg-white w-full p-5 flex flex-col rounded-xl border border-neutral-200"
            >
              <div className="flex items-center gap-3 w-fit">
                <div className="text-xl text-accent bg-accent/15 p-2.5 rounded-xl">
                  {skills[key].icon}
                </div>
                <p className="font-serif text-xl">{skills[key].title}</p>
              </div>

              <ul className="flex flex-col gap-2 ml-2 mt-5 list-disc list-inside text-sm">
                {skills[key].skills.map((skill) => (
                  <li
                    key={skill}
                    className="font-google text-sm text-neutral-500"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full mt-4 bg-white p-5 flex flex-col rounded-xl border border-neutral-200 gap-5">
        <div className="flex items-center gap-3 w-fit">
          <div className="text-xl text-accent bg-accent/15 p-2.5 rounded-xl">
            <IoGridOutline />
          </div>
          <p className="font-serif text-xl">Toolbox</p>
        </div>

        <div className="w-full flex flex-row items-center justify-center gap-6 flex-wrap">
          {tools.map((tool) => (
            <motion.div
              key={tool.name}
              className="relative group flex flex-col items-center cursor-pointer"
              whileHover={{ scale: 1.1 }}
            >
              <img
                src={tool.logo}
                alt={tool.name}
                className="w-12 h-12 md:w-15 md:h-15 object-contain overflow-hidden rounded-lg"
              />

              {/* Tooltip */}
              <div className="absolute -top-10 px-2.5 py-1 bg-neutral-800 text-white text-xs rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md z-10">
                {tool.name}
                <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-2 h-2 bg-neutral-800 rotate-45" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Skills;
