
import { useState } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Thank you Aahar – you gave us hope and food when we had none.",
      author: "Amita S.",
      role: "Community Member"
    },
    {
      id: 2,
      quote: "I was throwing away so much food until I found Aahar. Now I can share it with those who need it most.",
      author: "Raj Kumar",
      role: "Restaurant Owner"
    },
    {
      id: 3,
      quote: "This platform has created such a positive impact in our neighborhood. We're reducing waste and helping others.",
      author: "Priya M.",
      role: "Regular Donor"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Voices from Our Community
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from the people who are part of our mission to share food and hope
          </p>
        </div>

        <Carousel className="max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <Card className="border-none shadow-lg bg-white mx-4">
                  <CardContent className="p-8 text-center">
                    <MessageSquare className="h-8 w-8 mx-auto mb-4 text-orange-400" />
                    <blockquote className="text-xl md:text-2xl italic text-gray-700 mb-6">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="mt-4">
                      <p className="font-semibold text-gray-800">{testimonial.author}</p>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6">
            <CarouselPrevious className="relative static left-0 right-auto translate-y-0 mr-2" />
            <CarouselNext className="relative static right-0 left-auto translate-y-0 ml-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
