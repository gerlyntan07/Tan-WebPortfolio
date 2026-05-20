import React from "react";
import { TiltCard } from "./ui/tiltcard";
import image from "../assets/artworks/Flowery.jpg";

function About() {
  return (
    <main className="flex justify-center items-center w-full py-15">
      <div className="w-[90%] flex flex-col justify-start items-center">
        <p className="text-left w-full font-mono text-tertiary">ABOUT ME</p>
        <TiltCard image={image} title="FULL-STACK DEVELOPER">
        </TiltCard>

        <div className="w-full flex flex-col">
          <p className="font-mono text-accent hidden">ABOUT ME</p>
          <p className="font-serif text-2xl">Hi! I'm Gerlyn.</p>
          <p className="font-mono text-xs text-darkgray my-4">full-stack developer</p>
          <p className="font-google text-sm text-black/70">Grew up in Las Piñas specializing in React, React Native, and Python backend development.</p>
          <p className="font-google text-sm text-black/70 my-2">I build scalable web, mobile, and embedded solutions—from cloud-deployed business platforms to AI-powered applications. My work includes deploying production systems on Amazon Web Services, integrating payment systems with Adyen, and developing hardware-connected applications using Raspberry Pi Foundation devices.</p>
          <p className="font-google text-sm text-black/70">I’m passionate about creating software that is not only functional, but secure, scalable, and ready for real-world use.</p>
        </div>
      </div>
    </main>
  );
}

export default About;
