import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { getBtnLinks } from "../config/btn-config";

// @desc: Pax and Driver CTA buttons.  If not type is passed it will be a normal btn.
// @props: type drv/pax/none | link (normal btn) "url" | mode light/none | children: normal btn text
const Btn = (props) => {
  const { i18n } = useTranslation();
  const countryCode = i18n.language;
  const btnData = getBtnLinks(countryCode);
  const mode = props.mode;
  let btnLink = props.link;
  let btnText = props.children;

  if (props.type === "drv") {
    btnLink = btnData.drvLink;
    btnText = props.children ? props.children : btnData.drvText;
  } else if (props.type === "pax") {
    btnLink = btnData.paxLink;
    btnText = props.children ? props.children : btnData.paxText;
  } else if (props.type === "foodBusiness") {
    btnLink = btnData.foodBusinessLink;
    btnText = props.children ? props.children : btnData.foodBusinessText;
  } else if (props.type === "foodDelivery") {
    btnLink = btnData.foodDeliveryLink;
    btnText = props.children ? props.children : btnData.foodDeliveryText;
  } else if (props.type === "foodEater") {
    btnLink = btnData.foodEaterLink;
    btnText = props.children ? props.children : btnData.foodEaterText;
  }

  return (
    <div className={`my-2 btn-${mode}`}>
      <a className="block" href={btnLink}>
        {btnText}
        {/* <FontAwesomeIcon icon={faGreaterThan} size="xs" className="ml-2" /> */}
      </a>
    </div>
  );
};

export default Btn;
