import Layout from '@/components/Layout';
import Testimonials from '@/components/Testimonials';

export default function TestimonialsPage() {
  return (
    <Layout 
      title="Testimonials | Danette's Aesthetic and Laser"
      description="Read what our clients have to say about their experiences and transformations at Danette's Aesthetic and Laser."
    >
      <div className="pt-24">
        <Testimonials />
      </div>
    </Layout>
  );
} 