import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="about" className="section-padding bg-soft-beige/30">
      <div className="container-custom">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-deep-navy mb-6">
              About Our Clinic
            </h2>
            <div className="w-20 h-1 bg-rose-gold mb-8"></div>
            <p className="text-deep-navy/80 mb-6">
              Welcome to Danette&apos;s Aesthetic and Laser, Middelburg&apos;s premier destination for advanced 
              beauty treatments and skin rejuvenation. Founded with a passion for enhancing natural beauty, 
              our clinic combines cutting-edge technology with expert care to deliver exceptional results.
            </p>
            <p className="text-deep-navy/80 mb-6">
              Our team of highly trained professionals specializes in a wide range of aesthetic and laser 
              treatments, each personalized to meet your unique needs and goals. We pride ourselves on 
              our attention to detail, commitment to safety, and dedication to helping you feel confident 
              in your skin.
            </p>
            <p className="text-deep-navy/80">
              At Danette&apos;s, we believe that true beauty comes from a place of wellness and self-care. 
              That&apos;s why we create a serene, welcoming environment where you can relax and rejuvenate 
              while receiving the highest quality treatments available in Mpumalanga.
            </p>
          </motion.div>

          {/* About Image */}
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
            className="relative h-[500px] rounded-lg overflow-hidden shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1591343395082-e120087004b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
              alt="Aesthetic Treatment"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 