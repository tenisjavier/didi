import React from "react";
import { getBtnLinks } from "../../config/btn-config";
import { getCountryCodeFromUrl } from "../../config/countries-config";

// @desc: Pax and Driver CTA buttons.  If not type is passed it will be a normal btn.
// @props: type drv/pax/none | link (normal btn) "url" | mode light/none | children: normal btn text
const Btn = (props) => {
  const mode = props.mode === "light" ? "btn-light" : "btn";
  const btnData = getBtnLinks(getCountryCodeFromUrl());
  let btnLink = props.link;
  let btnText = props.children;

  if (props.type === "drv") {
    btnLink = btnData.drvLink;
    btnText = props.children ? props.children : btnData.drvText;
  } else if (props.type === "pax") {
    btnLink = btnData.paxLink;
    btnText = props.children ? props.children : btnData.paxText;
  }

  return (
    <div className={mode + " my-2"}>
      <a href={btnLink}>{btnText}</a>
    </div>
  );
};

export default Btn;
