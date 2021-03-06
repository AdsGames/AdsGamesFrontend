import * as React from "react";

import { Slide } from "./Slide";
import { SliderButton } from "./SliderButton";

import { SliderContainer } from "./Slider.style";

interface SlideType {
  id: string;
  image?: string;
  title?: string;
  description?: string;
  index: number;
}

export const Slider: React.FC<{
  slides: SlideType[];
}> = ({ slides }) => {
  const [index, setIndex] = React.useState(0);

  const handleClickLeft = (): void => {
    setIndex((index - 1 + slides.length) % slides.length);
  };

  const handleClickRight = (): void => {
    setIndex((index + 1) % slides.length);
  };

  return (
    <SliderContainer>
      <SliderButton onClick={handleClickLeft} position="left" />
      {slides.map((slide) => (
        <Slide
          description={slide.description}
          title={slide.title}
          key={slide.id}
          id={slide.id}
          image={slide.image}
          index={slide.index}
          currentIndex={index}
        />
      ))}
      <SliderButton onClick={handleClickRight} position="right" />
    </SliderContainer>
  );
};
