import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  category: string;
};

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    alt: 'Facial treatment result',
    category: 'Facial'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    alt: 'Skin rejuvenation result',
    category: 'Skin'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    alt: 'Laser treatment result',
    category: 'Laser'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1571646034647-52e6ea84b28c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
    alt: 'Facial treatment result',
    category: 'Facial'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80',
    alt: 'Skin rejuvenation result',
    category: 'Skin'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    alt: 'Laser treatment result',
    category: 'Laser'
  }
];

const categories = ['All', ...Array.from(new Set(galleryImages.map(img => img.category)))];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleImages, setVisibleImages] = useState<GalleryImage[]>(galleryImages);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  useEffect(() => {
    if (activeCategory === 'All') {
      setVisibleImages(galleryImages);
    } else {
      setVisibleImages(galleryImages.filter(img => img.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <section id="gallery" className="section-padding bg-soft-beige/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-deep-navy mb-6">
            Our Gallery
          </h2>
          <div className="w-20 h-1 bg-rose-gold mx-auto mb-8"></div>
          <p className="text-deep-navy/80 max-w-3xl mx-auto mb-12">
            Browse our gallery of real results from our clients. See the transformations and discover what our 
            treatments can do for you.
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-rose-gold text-white'
                    : 'bg-white text-deep-navy hover:bg-deep-navy/5'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          layout
        >
          {visibleImages.map((image) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group h-72"
              onClick={() => setSelectedImage(image)}
            >
              <motion.img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                whileHover={{ scale: 1.05 }}
              />
              <div className="absolute inset-0 bg-deep-navy/0 group-hover:bg-deep-navy/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <span className="inline-block bg-rose-gold text-white px-4 py-1 rounded-full text-sm mb-2">
                    {image.category}
                  </span>
                  <p className="text-white text-lg font-playfair">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-rose-gold"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <motion.img
            src={selectedImage.src}
            alt={selectedImage.alt}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="max-h-[80vh] max-w-[90vw] object-contain"
          />
        </motion.div>
      )}
    </section>
  );
};

export default Gallery; 