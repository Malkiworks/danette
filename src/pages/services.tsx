import Layout from '@/components/Layout';
import Services from '@/components/Services';

export default function ServicesPage() {
  return (
    <Layout 
      title="Our Services | Danette's Aesthetic and Laser"
      description="Discover our range of premium aesthetic and laser treatments designed to enhance your natural beauty with precision and care."
    >
      <div className="pt-24">
        <Services />
      </div>
    </Layout>
  );
} 