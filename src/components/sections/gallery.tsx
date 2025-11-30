import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Gallery() {
  const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery-'));

  return (
    <section id="gallery" className="bg-secondary/50 py-20 md:py-32">
      <div className="container">
        
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Galeri Pelanggan</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Lihat bagaimana pelanggan kami tampil menawan dalam balutan Baju Bodo dari TelluNi Fashion Store.
            </p>
          </div>
        
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            
              <div key={image.id} className="overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  width={400}
                  height={500}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  data-ai-hint={image.imageHint}
                />
              </div>
            
          ))}
        </div>
      </div>
    </section>
  );
}
