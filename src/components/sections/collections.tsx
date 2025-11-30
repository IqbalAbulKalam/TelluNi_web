"use client";

import * as React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

export default function Collections() {
  const collectionImages = PlaceHolderImages.filter(img => img.id.startsWith('collection-'));
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  
  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
    
    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);
  
  return (
    <section id="collections" className="py-20 md:py-32">
      <div className="container">
        
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Koleksi Pilihan Kami</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Jelajahi berbagai pilihan Baju Bodo dengan desain otentik dan modern yang akan membuatmu tampil istimewa.
            </p>
          </div>
        
        
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {collectionImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden rounded-lg shadow-md transition-shadow hover:shadow-xl">
                      <CardContent className="flex aspect-[3/4] items-center justify-center p-0">
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          width={600}
                          height={800}
                          className="w-full h-full object-cover"
                          data-ai-hint={image.imageHint}
                          priority={index < 3}
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
          <div className="py-2 text-center text-sm text-muted-foreground">
            Slide {current} dari {count}
          </div>
        
      </div>
    </section>
  );
}
