import React from "react";
import {VideoContainer, IFrame} from "../../styled-components/home.style"

function Video(props) {
  return (
    <VideoContainer>
      <IFrame title={props.title} src={props.src} height="430"></IFrame>
    </VideoContainer>
  );
}

export default Video;
