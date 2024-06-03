import { Element } from "react-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

import VFXVideo from "@/assets/vfx.mp4";
import VFX2Video from "@/assets/vfx2.mp4";

export const VFX = () => {
  const videos = [VFXVideo, VFX2Video];

  return (
    <Element name="VFX" className="bg-secondary px-4 py-16">
      <section className="mx-auto max-w-screen-xl space-y-8">
        <header className="text-center text-xl font-semibold underline underline-offset-8 md:text-2xl">
          Mothion <span className="text-primary">graphics</span>
        </header>
        <Carousel
          opts={{
            loop: true,
            align: "center",
          }}
          className="rounded-xl bg-background shadow-2xl md:p-8"
        >
          <CarouselContent>
            {videos.map((video, i) => (
              <CarouselItem key={i}>
                <video
                  src={video}
                  controls
                  className="aspect-video shrink-0 object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-bottom-2 md:-bottom-4" />
          <CarouselNext className="-bottom-2 md:-bottom-4" />
        </Carousel>
      </section>
    </Element>
  );
};
