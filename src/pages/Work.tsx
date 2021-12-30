import React, { useEffect, useState } from "react";
import HeaderHandheld from "../components/common/HeaderHandheld";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Image from "../components/work/Image";
import BigImage from "../components/work/BigImage";
import images from "../components/work/Images";
import "../styled-components/work.css";

function Work(props) {
  const [srcBigImage, setSrcBigImage] = useState(null);

  function clickImage(e) {
    setSrcBigImage(e.target.src);
  }

  function btnCloseClicked(e) {
    setSrcBigImage(null);
  }

  return (
    <div id="container" className="container">
      <HeaderHandheld onWork={props.onWork} />
      <Header onWork={props.onWork} />
      <Image images={images} onClick={clickImage} />
      <Footer />
      {srcBigImage ? (
        <BigImage src={srcBigImage} btnCloseClicked={btnCloseClicked} />
      ) : null}
    </div>
  );
}

export default Work;
