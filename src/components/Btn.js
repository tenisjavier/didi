import React from "react";
import { getBtnLinks } from "../../config/btn-config";

const BtnPax = (props) => {
  const mode = props.mode === "light" ? "btn-light" : "btn";
  const btnData = getBtnLinks("cl");
  let btnLink = props.link;
  let btnText = props.children;

  if (props.type === "drv") {
    btnLink = btnData.drvLink;
    btnText = btnData.drvText;
  } else if (props.type === "pax") {
    btnLink = btnData.paxLink;
    btnText = btnData.paxText;
  }
  return (
    <div className={mode}>
      <a href={btnLink}>{btnText}</a>
    </div>
  );
};

export default BtnPax;
