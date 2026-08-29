import { MdWeb } from "react-icons/md";
import { IoColorPaletteOutline, IoGridOutline } from "react-icons/io5";
import { TbDeviceMobile } from "react-icons/tb";
import { FaFigma } from "react-icons/fa";

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

const toolbox = {
  figma: <FaFigma />,
};

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

      {/* <div className="w-full mt-4 bg-white p-5 flex flex-col rounded-xl border border-neutral-200 gap-3">
        <div className="flex items-center gap-3 w-fit">
          <div className="text-xl text-accent bg-accent/15 p-2.5 rounded-xl">
            <IoGridOutline />
          </div>
          <p className="font-serif text-xl">Toolbox</p>
        </div>

        <div className="w-full flex flex-row flex-wrap gap-4">
          {Object.keys(toolbox).map((key) => (
            <div key={key}>{toolbox[key]}</div>
          ))}
        </div>
      </div> */}
    </main>
  );
}

export default Skills;
