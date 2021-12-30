import React from "react";
import { RadiosButtonIcon } from "../../styled-components/home.style";

function CarouselRadio(props) {
  const radioBtns = props.radioButtons.map((radio) => (
    <RadiosButtonIcon
      id={radio.id}
      key={radio.id}
      className={props.className}
      onClick={props.onClick}
      iClassNames={props.iClassNames}
    ></RadiosButtonIcon>
  ));
  return <div>{radioBtns}</div>;
}

export default CarouselRadio;
