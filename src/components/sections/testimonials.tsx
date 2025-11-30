import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { testimonials } from '@/lib/data';
import { Star } from 'lucide-react';

function Rating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${
            i < rating ? 'text-primary fill-primary' : 'text-muted-foreground/50'
          }`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32">
      <div className="container">
        
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Kata Mereka Tentang Kami</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Kepuasan pelanggan adalah prioritas utama kami.
            </p>
          </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            
              <Card key={index} className="flex h-full flex-col shadow-md transition-shadow hover:shadow-xl">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-headline text-xl">{testimonial.name}</CardTitle>
                    <Rating rating={testimonial.rating} />
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground">"{testimonial.review}"</p>
                </CardContent>
              </Card>
            
          ))}
        </div>
      </div>
    </section>
  );
}
