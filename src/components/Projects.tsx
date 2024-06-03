import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Element } from "react-scroll";

import { Button } from "@/components/ui/button";
// Constants
import projects from "@/constants/projects";
import { Github, Link } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export const Projects = () => {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));

  return (
    <Element name="Projects" className="bg-background px-4 py-16">
      <section className="mx-auto max-w-screen-xl space-y-8">
        <header className="text-center text-xl font-semibold underline underline-offset-4 md:text-2xl">
          Projects
        </header>
        <Carousel
          opts={{
            loop: true,
            align: "center",
          }}
          plugins={[plugin.current]}
          className="rounded-xl bg-secondary p-4 shadow-2xl md:p-8"
        >
          <CarouselContent>
            {projects.map((project, i) => (
              <CarouselItem key={i}>
                <div key={project.title} className="flex flex-col rounded-md">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-80 w-full shrink-0 rounded-md object-contain"
                  />
                  <div className="flex flex-col gap-3 p-4">
                    <h1 className="text-xl font-bold">{project.title}</h1>
                    <p className="line-clamp-4 text-sm">{project.desc}</p>
                    <div className="flex flex-wrap items-center justify-between gap-8">
                      {project.demo_link ? (
                        <a href={project.demo_link} target="_blank">
                          <Button size="sm" className="flex items-center gap-2">
                            <Link size={16} />
                            <span>Demo</span>
                          </Button>
                        </a>
                      ) : null}
                      <a href={project.github_link} target="_blank">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex items-center gap-2"
                        >
                          <Github size={16} />
                          <span>Source Code</span>
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
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
