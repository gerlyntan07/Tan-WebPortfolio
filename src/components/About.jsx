import React from 'react'
import { TiltCard } from './ui/tiltcard'
import image from '../assets/artworks/Flowery.jpg';

function About() {
  return (
    <main>
        <TiltCard image={image} title="My Card">
          <p>This is the content inside the tilt card.</p>
        </TiltCard>
    </main>
  )
}

export default About