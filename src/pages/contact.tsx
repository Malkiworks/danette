import Layout from '@/components/Layout';
import Contact from '@/components/Contact';

export default function ContactPage() {
  return (
    <Layout 
      title="Contact Us | Danette's Aesthetic and Laser"
      description="Ready to enhance your natural beauty? Book a consultation or reach out with any questions. Our team at Danette's is here to help you on your beauty journey."
    >
      <div className="pt-24">
        <Contact />
      </div>
    </Layout>
  );
} 