import Header from '@/components/header';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Collections from '@/components/sections/collections';
import Gallery from '@/components/sections/gallery';
import Testimonials from '@/components/sections/testimonials';
import Booking from '@/components/sections/booking';
import Footer from '@/components/footer';
import WhatsAppFAB from '@/components/whatsapp-fab';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Collections />
        <Gallery />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
