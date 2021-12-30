import React from "react";
import Button from "../common/Button";
import {Colors, BtnColor} from "../../styled-components/home.style"

function ColorsUsed(props) {
  return (
    <>
      <p>Colors mostly used:</p>
      {props.colorsUsed.map((color, index) => (
        <Colors className={color.className} key={color.id}>
          <BtnColor key={index} text={color.name} className="color-btn" />
        </Colors>
      ))}
    </>
  );
}

export default ColorsUsed;
