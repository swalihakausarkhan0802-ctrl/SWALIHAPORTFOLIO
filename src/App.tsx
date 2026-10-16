import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { LearningJourney } from './components/LearningJourney';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F4EBDD] text-[#211A1B] flex flex-col font-sans selection:bg-[#651D32] selection:text-[#FBF7F0]">
      {/* SECTION 1: Master Editorial Navigation Bar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* SECTION 2: Hero - The Signature Visual */}
        <Hero />

        {/* SECTION 3: About Me - Editorial Philosophy & Verified Dossier */}
        <About />

        {/* SECTION 4: Skills - The Toolkit with Three Categorized Panels */}
        <Skills />

        {/* SECTION 5: Featured Projects - Empirical Research & Applied Engineering */}
        <Projects />

        {/* SECTION 6: Learning Journey - Becoming, One Concept at a Time */}
        <LearningJourney />

        {/* SECTION 7: Contact - The Closing Statement & Dispatch */}
        <Contact />
      </main>
    </div>
  );
}
