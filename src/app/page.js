import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Aurora from '@/components/aurora/Aurora';
import About from '@/components/About';
import Projects from '@/components/Projects';
import ChatRoom from "@/components/ChatRoom";

export default function HomePage() {
  return (
        <main className="min-h-screen">
      <div className="fixed inset-0 z-0">
        <Aurora
          colorStops={['#50589C', '#50589C', '#50589C']}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <div className="relative z-10">
        <Navbar />
        <HeroSection /> 
        <About />
        <Projects />
        <ChatRoom  />
      </div>
    </main>
  );
}
