"use client";
import LiquidEther from "./aurora/Aurora";
import ProfileCard from "./card/ProfileCard";
import ShinyText from './text/ShinyText';
import BlurText from './BlurText/BlurText';




export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background animasi */}
      <div className="absolute inset-0 -z-10">
        <LiquidEther />
      </div>

      {/* Konten utama: container responsif dengan teks di kiri dan card di kanan */}
      <div className="z-10 w-full px-4">
        
        <div className=" items-center pt-10 xl:gap-0 gap-6 grid-cols-1 max-w-6xl mx-auto flex flex-col md:flex-row ">
          <div className="flex-1 text-white text-center md:text-left">
            <div className="flex items-center gap-3 mb-4 bg bg-zinc-900 w-fit p-3 rounded-2xl">
              <img src="./assets/katakata.jpg" className="w-8 h-8 rounded-full object-cover" />
              <q>Just live for yourself</q>
            </div>
            <h1 className="text-5xl font-bold mb-6">
            <ShinyText text="Hi! This is Tira's Portfolio" disabled={false} speed={3} className='custom-class' />
            </h1>
            
            
            <div className="text-lg opacity-80 mb-6">
              <BlurText text="A student who's passionate about exploring the world of design and technology." />
              <BlurText text="I love learning how creativity and logic can come together to build something meaningful."/>
            </div>
       
        <div className=" flex gap-5 order-2 md:order-5 rounded-full text-white transition">
          <a href="https://github.com/quiettira" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
            className="grid place-items-center w-10 h-10 rounded-full hover:bg-white/10">
            <i className="ri-github-fill ri-2x"></i>
          </a>
          <a href="https://www.instagram.com/quiettira/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
            className="grid place-items-center w-10 h-10 rounded-full hover:bg-white/10">
            <i className="ri-instagram-fill ri-2x"></i>
          </a>
          <a href="https://www.tiktok.com/@tiraamissucakke" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
            className="grid place-items-center w-10 h-10 rounded-full hover:bg-white/10">
            <i className="ri-tiktok-fill ri-2x"></i>
          </a>
        </div>
          </div>

          {/* Card di sebelah kanan (md+) */}
          {/* letakkan agak lebih ke bawah agar tidak berhimpitan dengan navbar */}
          <div className="shrink-0 md:self-center md:ml-auto animate__animated animate__fadeInUp animate__delay-4s">
            <ProfileCard
              name="Yustira Fatimah"
              title="full-stack dreamer"
              handle="quiettira"
              status="Online"
              contactText="Contact Me"
              avatarUrl="/assets/profile.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => console.log('Contact clicked')}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
