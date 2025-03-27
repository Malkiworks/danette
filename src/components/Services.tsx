import { useState } from 'react';
import { motion } from 'framer-motion';

type Service = {
  id: number;
  title: string;
  description: string;
  image: string;
  features: string[];
};

const services: Service[] = [
  {
    id: 1,
    title: 'Facial Treatments',
    description: 'Revitalize your skin with our customized facial treatments tailored to address your specific skin concerns.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    features: [
      'Deep cleansing and exfoliation',
      'Anti-aging treatments',
      'Hydrating facials',
      'Acne and blemish control',
      'Brightening treatments'
    ]
  },
  {
    id: 2,
    title: 'Laser Hair Removal',
    description: 'Achieve smooth, hair-free skin with our advanced laser hair removal treatments for all skin types.',
    image: 'https://images.unsplash.com/photo-1598524374666-0b1e464a2937?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80',
    features: [
      'Permanent hair reduction',
      'Safe for all skin tones',
      'Minimal discomfort',
      'Quick treatment sessions',
      'Treats multiple body areas'
    ]
  },
  {
    id: 3,
    title: 'Skin Rejuvenation',
    description: 'Restore youthful radiance with our cutting-edge skin rejuvenation therapies using the latest technology.',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    features: [
      'Reduces fine lines and wrinkles',
      'Improves skin texture and tone',
      'Minimizes age spots and sun damage',
      'Stimulates collagen production',
      'Non-surgical lifting effect'
    ]
  }
];

const Services = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      }
    })
  };

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-deep-navy mb-6">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-rose-gold mx-auto mb-8"></div>
          <p className="text-deep-navy/80 max-w-3xl mx-auto">
            Discover our range of premium aesthetic and laser treatments designed to enhance your natural beauty
            with precision and care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="service-card group"
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div className="relative h-64 mb-6 overflow-hidden rounded-md">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-deep-navy/30 group-hover:bg-deep-navy/10 transition-all duration-300"></div>
              </div>
              <h3 className="text-2xl font-playfair font-semibold text-deep-navy mb-3">
                {service.title}
              </h3>
              <p className="text-deep-navy/70 mb-6">
                {service.description}
              </p>
              {activeService === service.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4"
                >
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center text-deep-navy/80"
                      >
                        <svg className="w-4 h-4 text-rose-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                  <motion.button
                    className="mt-6 text-rose-gold font-medium flex items-center group"
                    whileHover={{ x: 5 }}
                  >
                    Learn more
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.button>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 