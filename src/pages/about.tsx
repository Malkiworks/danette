import Layout from '@/components/Layout';
import About from '@/components/About';

export default function AboutPage() {
  return (
    <Layout 
      title="About Us | Danette's Aesthetic and Laser"
      description="Learn about Danette's Aesthetic and Laser, Middelburg's premier destination for advanced beauty treatments and skin rejuvenation."
    >
      <div className="pt-24">
        <About />
      </div>
    </Layout>
  );
} 