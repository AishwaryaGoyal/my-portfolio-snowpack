import React from "react";
import {AboutLeft as Left, ImgButterfly, ImgArtist} from "../../styled-components/about.style"

function AboutLeft() {
  return (
    <Left>
      <ImgButterfly
        alt="Butterfly painting"
        src="https://drive.google.com/uc?export=view&id=1C3DSNXYFfzKw3ReKQ2Gx5fbBU8l4G7Uo"
      />
      <h1>
        Right here,
        <br />
        Right now..
      </h1>
      <ImgArtist
        alt="Artist"
        src="https://drive.google.com/uc?export=view&id=122GvSKiXiPb_znfPxIdCjFgP6WggI4g_"
      />
    </Left>
  );
}

export default AboutLeft;
