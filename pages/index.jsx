import dynamic from 'next/dynamic';

// Import components (they will be created as .jsx in src/components)
import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import Skills from '../src/components/Skills';
import Experience from '../src/components/Experience';
import Services from '../src/components/Services';
import Projects from '../src/components/Projects';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
