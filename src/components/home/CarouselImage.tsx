import React from "react";
import {CarouselImages} from "../../styled-components/home.style";

function CarouselImage(props) {
  return (
    <CarouselImages id={props.image.id} key={props.image.key} className="carouselImages">
      <img src={props.image.src} alt={props.image.alt} height="100%" />
    </CarouselImages>
  );
}

export default CarouselImage;
