import "../../css/base.css";
import "./slider.css";

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CarouselItem, CarouselCaption, Carousel, CarouselIndicators, CarouselControl  } from 'reactstrap';

import slide_1 from "../../imgs/slider_1.webp"
import slide_2 from "../../imgs/slider_2.webp"
import slide_3 from "../../imgs/slider_3.webp"

const items = [
  {
    src: slide_1,
    altText: "Discovery Now",
    caption: "ELEGANT INTERIOR",
    key: 1,
  },
  {
    src: slide_2,
    altText: "Discovery Now",
    caption: "MODERN INTERIOR",
    key: 2,
  },
  {
    src: slide_3,
    altText: "Discovery Now",
    caption: "MINIMALIST INTERIOR",
    key: 3,
  },
];

export default function Banner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
        <CarouselItem className="slider" onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.src}>
          <Link to={"/shop"}><img className="slider-img" src={item.src} alt={item.altText} width="100%"/></Link>
          <Link style={{textDecoration: "none", fontSize: "3.0rem", fontWeight: "500"}}  to={"/shop"}>
            <CarouselCaption className="slider-title" captionText={item.caption}/>
          </Link>
          <Link style={{textDecoration: "none", fontSize: "1.2rem", fontWeight: "300"}} to={"/shop"}>
            <CarouselCaption className="slider-caption" captionText={item.altText}/>        
          </Link>
          <Link className="discovery" style={{textDecoration: "none", fontSize: "2rem", fontWeight: "500", color: "var(--white-color"}} to={"/shop"}>
            <p className="discovery-caption">Discovery Now</p>
          </Link>
        </CarouselItem>
    );
  });

  return (
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex}/>
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous}/>
        <CarouselControl direction="next" directionText="Next" onClickHandler={next}/>
      </Carousel>
  );
}
