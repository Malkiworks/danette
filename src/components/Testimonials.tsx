import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Regular Client',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    quote: "The laser hair removal treatment has changed my life! After years of struggling with unwanted hair, I finally found a permanent solution at Danette's. The staff is professional and made me feel comfortable throughout the process.",
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Smith',
    role: 'First-time Client',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    quote: "I was hesitant to try facial treatments as a man, but the team at Danette's made me feel welcome and understood exactly what my skin needed. The results were outstanding, and now I'm a regular!",
    rating: 5
  },
  {
    id: 3,
    name: 'Lisa Thompson',
    role: 'Monthly Member',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    quote: "The skin rejuvenation treatment took years off my appearance! The attention to detail and personalized care at Danette's is unmatched in Middelburg. I recommend them to all my friends.",
    rating: 4
  },
  {
    id: 4,
    name: 'David Wilson',
    role: 'Regular Client',
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    quote: "After struggling with acne scars for years, I found real solutions at Danette's. Their advanced treatments and expert care have significantly improved my skin's texture and appearance.",
    rating: 5
  }
];

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section id="testimonials" className="section-padding bg-white relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div ref={containerRef} className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-deep-navy mb-6">
            Client Testimonials
          </h2>
          <div className="w-20 h-1 bg-rose-gold mx-auto mb-8"></div>
          <p className="text-deep-navy/80 max-w-3xl mx-auto">
            Read what our clients have to say about their experiences and transformations at Danette&apos;s Aesthetic and Laser.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto"
          style={{ y }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-lg p-8 shadow-lg relative"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full border-4 border-white shadow-md"
                />
              </div>
              
              <div className="pt-6">
                <div className="flex items-center justify-center mb-4">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      className={`w-5 h-5 ${
                        index < testimonial.rating ? 'text-rose-gold' : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 15.585l-5.025 2.623a1 1 0 01-1.45-1.054l.96-5.603L.865 7.14a1 1 0 01.554-1.705l5.608-.815L9.46.36a1 1 0 011.77 0l2.432 4.84 5.608.815a1 1 0 01.554 1.705l-3.62 3.52.96 5.603a1 1 0 01-1.45 1.054L10 15.585z"
                      />
                    </svg>
                  ))}
                </div>
                
                <p className="text-deep-navy/80 mb-6 italic text-center">
                  &quot;{testimonial.quote}&quot;
                </p>
                
                <div className="text-center">
                  <h4 className="font-playfair font-bold text-deep-navy">{testimonial.name}</h4>
                  <p className="text-deep-navy/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 