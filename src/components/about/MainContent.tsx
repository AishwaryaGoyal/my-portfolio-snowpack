import React from "react";
import AboutLeft from "./AboutLeft";
import AboutRight from "./AboutRight";
import { MainContent as Content} from "../../styled-components/about.style";

function MainContent() {
  return (
    <Content>
      <AboutLeft />
      <AboutRight />
    </Content>
  );
}

export default MainContent;
