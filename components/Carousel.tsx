"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import "../app/embla.css";

type PropType = {
  children: React.ReactNode;
  options?: EmblaOptionsType;
};

const Carousel: React.FC<PropType> = ({ children, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">{children}</div>
      </div>
    </section>
  );
};

export default Carousel;
