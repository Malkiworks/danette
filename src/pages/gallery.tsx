import Layout from '@/components/Layout';
import Gallery from '@/components/Gallery';

export default function GalleryPage() {
  return (
    <Layout 
      title="Gallery | Danette's Aesthetic and Laser"
      description="Browse our gallery of real results from our clients. See the transformations and discover what our treatments can do for you."
    >
      <div className="pt-24">
        <Gallery />
      </div>
    </Layout>
  );
} 