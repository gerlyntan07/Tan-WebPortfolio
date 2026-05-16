import React from "react";
import { TiltCard } from "./ui/tiltcard";
import image from "../assets/artworks/Flowery.jpg";

function About() {
  return (
    <main className="flex justify-center items-center w-full py-15">
      <div className="w-[90%] flex flex-col justify-start items-center">
        <p className="text-left w-full font-mono text-tertiary">ABOUT ME</p>
        <TiltCard image={image} title="My Card" className="w-full">
          <p>This is the content inside the tilt card.</p>
        </TiltCard>

        <div className="w-full flex flex-col">
          <p className="font-mono text-accent">ABOUT ME</p>
        </div>
      </div>
    </main>
  );
}

export default About;
