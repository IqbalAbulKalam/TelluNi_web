import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Booking() {
  const whatsappLink = `https://wa.me/6282311117703?text=${encodeURIComponent("Halo, saya tertarik untuk menyewa Baju Bodo dari TelluNi Fashion Store.")}`;

  return (
    <section id="booking" className="bg-primary/10 py-20 md:py-32">
      <div className="container">
        
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Siap Tampil Memukau?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Hubungi kami sekarang untuk melakukan pemesanan atau konsultasi. Tim kami siap membantu Anda memilih Baju Bodo yang sempurna untuk momen spesial Anda.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" /> Hubungi via WhatsApp
              </Link>
            </Button>
            
            <div className="mt-12 grid grid-cols-1 gap-8 text-left md:grid-cols-2">
              <div className="flex items-start gap-4">
                <div className="rounded-md bg-primary/20 p-3 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold">Email</h3>
                  <a href="mailto:Telluniofficial@gmail.com" className="text-muted-foreground transition-colors hover:text-primary">Telluniofficial@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-md bg-primary/20 p-3 text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold">Telepon</h3>
                  <a href="tel:+6282311117703" className="text-muted-foreground transition-colors hover:text-primary">+62 823-1111-7703</a>
                </div>
              </div>
              <div className="flex items-start gap-4 md:col-span-2">
                <div className="rounded-md bg-primary/20 p-3 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold">Alamat</h3>
                  <p className="text-muted-foreground">Jl. Poros Camming, Walimpong, Kec. Bengo Kab. Bone</p>
                  <p className="text-muted-foreground mt-1">Perumahan Mega Mutiara Makassar, Mutiara Gading 2 Ekstension</p>
                </div>
              </div>
            </div>
          </div>
        
      </div>
    </section>
  );
}
