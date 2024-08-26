import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

export function CarouselOrientation({ title,items }) {
  const plugin = React.useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  return (
    <div className="flex flex-col items-center space-y-6">
      <h3 className="text-2xl font-bold text-white">{title}</h3>
      <Carousel
        opts={{
          align: "start",
        }}
        orientation="vertical"
        className="laptop:w-full w-48 max-w-sm"
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.play}
      >
        <CarouselContent className="-mt-1 h-[220px] space-y-4">
          {items.map((item, index) => (
            <CarouselItem key={index} className="pt-1">
              <div className="p-4 transition-transform transform hover:scale-105">
                <Card className="shadow-lg rounded-lg border border-gray-300 hover:border-blue-500 transition-colors">
                  <CardContent className="flex flex-col items-center justify-center space-y-4 p-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg">
                    <div className="bg-white p-2 rounded-full shadow-md overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.nama}
                        className="w-16 h-16 object-cover rounded-full"
                      />
                    </div>
                    <span className="text-xl font-semibold text-white">{item.nama}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
