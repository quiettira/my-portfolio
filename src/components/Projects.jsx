"use client";
import MagicBentoProjects from './Bento/MagicBento';

export default function Projects() {
  return (
    <section className="px-6 sm:px-8 md:px-12 mt-20 md:mt-28 pt-0 pb-6" id="project">
      <div className="max-w-6xl mx-auto">
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        <h1 className="text-center text-4xl font-bold mb-2">
          Projects
        </h1>
        <p className="text-base text-center text-gray-400 max-w-3xl mx-auto">
          A glimpse into my journey through projects.
        </p>
      </div>
      
      <div className="mt-14 bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6 md:p-8" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
        <MagicBentoProjects 
        textAutoHide={true}
        enableStars={true}
        enableSpotlight={true}
        enableBorderGlow={true}
        enableTilt={true}
        enableMagnetism={true}
        clickEffect={true}
        spotlightRadius={300}
        particleCount={12}
        glowColor="132, 0, 255"
        />

      </div>
      </div>
    </section>
  );
}