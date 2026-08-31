import { React, lazy, Suspense } from "react";
import { TiltCard } from "./ui/tiltcard";
import image from "../assets/artworks/Flowery.jpg";
import hero from "../assets/hero.jfif";

const Skills = lazy(() => import("./Skills"));

function About() {
  return (
    <main
      className="flex flex-col gap-40 justify-center items-center w-full py-40 bg-primary"
      style={{
        background:
          "radial-gradient(circle at 15% 20%, rgba(242,234,211,0.92), transparent 36%), radial-gradient(circle at 80% 60%, rgba(244,153,26,0.2), transparent 34%), radial-gradient(circle at 70% 10%, rgba(52,79,31,0.12), transparent 26%)",
      }}
    >
      <div className="w-[90%] lg:w-[80%] flex flex-col md:flex-row md:gap-10 lg:gap-15 md:items-start md:justify-between justify-start items-center">
        <p className="text-left w-full font-mono text-tertiary md:hidden">
          ABOUT ME
        </p>
        <TiltCard
          className="mt-5 mb-10 md:m-0"
          image={hero}
          title=""
        ></TiltCard>

        <div className="w-full flex flex-col">
          <p className="font-mono text-tertiary hidden md:block">ABOUT ME</p>
          <p className="font-serif text-3xl md:text-5xl md:pt-5">
            Hi! I&apos;m Gerlyn.
          </p>
          <p className="font-mono text-xs text-darkgray my-4 md:text-base">
            full-stack developer
          </p>
          <p className="font-google text-sm text-black/70 md:mt-4 md:text-base">
            Grew up in Las Piñas and graduated with a Bachelor's degree in
            Computer Science from Cavite State University - Bacoor Campus. I
            specialize in React, React Native, and Python backend development.
          </p>
          <p className="font-google text-sm text-black/70 my-2 md:text-base">
            After demonstrating impact during my internship, I was absorbed
            directly into the company full-time, where I focus on engineering
            robust enterprise and B2B software platforms. Most of my work
            centers on designing multi-tenant architectures and deploying
            production-ready applications on Amazon Web Services (AWS).
          </p>
          <p className="font-google text-sm text-black/70 md:text-base">
            I'm passionate about creating software that is not only functional,
            but secure, scalable, and optimized for real-world business
            operations.
          </p>
          <p className="font-google text-sm text-black/70 my-2 md:text-base">
            Off the clock, I love to draw, play guitar, and unwind with a good
            series.
          </p>
        </div>
      </div>

      <Suspense>
        <Skills />
      </Suspense>
    </main>
  );
}

export default About;
