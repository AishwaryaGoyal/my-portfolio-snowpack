import React from "react";
import { FaSquare } from "../../styled-components/home.style";

function ButtonIcon(props) {
  return (
    <button
      type="button"
      id={props.id}
      key={props.id}
      className={props.className}
      onClick={props.onClick}
    >
      <FaSquare className={props.iClassNames}></FaSquare>
    </button>
  );
}

export default ButtonIcon;
