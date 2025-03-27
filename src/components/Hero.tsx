import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current && containerRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, delay: 0.5 }
      );
    }
  }, []);

  return (
    <section 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      ref={containerRef}
    >
      {/* Background Video/Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* For development, using a placeholder image. In production, replace with video */}
        <div 
          className="absolute inset-0 bg-black/40 z-10"
          style={{ backdropFilter: 'blur(2px)' }}
        ></div>
        <img 
          src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
          alt="Beauty Treatment Background" 
          className="w-full h-full object-cover object-center"
        />
        {/* In production, use a video element here */}
        {/* <video 
          autoPlay 
          muted 
          loop 
          className="w-full h-full object-cover object-center"
        >
          <source src="/video/spa-background.mp4" type="video/mp4" />
        </video> */}
      </div>

      {/* Content */}
      <div className="container-custom z-20 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6"
            ref={titleRef}
          >
            Danette&apos;s
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-light mb-8">
            AESTHETIC & LASER
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl md:text-3xl text-white mb-10 max-w-3xl mx-auto font-inter italic"
        >
          Enhance Your Natural Beauty with Precision & Care
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a 
            href="/contact"
            className="btn-primary text-lg md:text-xl px-8 py-4"
          >
            Book Your Treatment
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 