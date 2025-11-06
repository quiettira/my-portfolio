"use client";
import Lanyard from './lanyard/Lanyard';
import BlurText from './BlurText/BlurText';

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center mt-20 px-6 sm:px-8 md:px-12 pb-0 md:pb-0"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      {/* Garis horizontal di atas */}
      <div className="w-full h-px bg-violet-500/40 mb-0"></div>

      {/* Konten utama */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-10 md:gap-16 w-full">
        <div className="basis-full md:basis-5/12 overflow-hidden max-w-full flex justify-center -mt-10 md:-mt-7 scale-75 md:scale-90">
          <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
        </div>

        {/* Garis pembatas vertikal untuk desktop, horizontal untuk mobile */}
        <div className="w-full md:w-px h-px md:h-90 bg-violet-500/40 my-2 md:mt-4 md:mb-0"></div>

        {/* Bagian kanan: About Me */}
        <div className="text-left md:w-1/2 md:pt-8 pb-0 md:pb-0">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            About Me
          </h2>

          <BlurText
            text="Hi, I'm Yustira 🌸 A student who's passionate about exploring the world of design and technology. I love learning how creativity and logic can come together to build something meaningful. Through this Portfolio, I'm documenting my journey — from small experiments to growing projects that reflect my curiosity and dedication. Every line of code I write is part of my effort to learn, create, and inspire ✨."
            delay={150}
            animateBy="words"
            direction="top"
            className="text-base md:text-lg leading-relaxed mb-10 text-gray-300"
          />

          <div className="flex flex-row items-center justify-around sm:justify-start sm:gap-16 text-center mb-0 w-full">
            <div>
              <h1 className="text-3xl md:text-4xl mb-1 font-bold">
                1<span className="text-violet-500">+</span>
              </h1>
              <p className="text-gray-400 text-sm md:text-base">Years of Learning</p>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" data-aos-once="true">
              <h1 className="text-3xl md:text-4xl mb-1 font-bold">
                10<span className="text-violet-500">+</span>
              </h1>
              <p className="text-gray-400 text-sm md:text-base">School Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}