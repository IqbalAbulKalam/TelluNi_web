import { Button } from '@/components/ui/button';
import Link from 'next/link';
import AnimateInView from '@/components/animate-in-view';

export default function Hero() {
  return (
    <section id="home" className="py-20 md:py-32">
      <div className="container flex flex-col items-center justify-center">
        <AnimateInView>
          <div className="text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Rental Baju Bodo mu di TelluNi
            </h1>
            <p className="mx-auto mt-6 max-w-[700px] text-lg text-muted-foreground md:text-xl">
              Mempercantik Momen Bahagiamu
            </p>
          </div>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="#booking">Checkout</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#collections">Lihat lihat dulu</Link>
            </Button>
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
