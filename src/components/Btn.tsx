import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { getBtnLinks } from "../config/btn-config";

// @desc: Pax and Driver CTA buttons.  If not btnType is passed it will be a normal btn.
// @props: btnType drv/pax/none | btnLink (normal btn) "url" | btnMode light/none | children: normal btn text

export interface BtnProps {
  btnType?:
    | "both"
    | "drv"
    | "pax"
    | "fleet"
    | "payment"
    | "foodBusiness"
    | "foodDelivery"
    | "foodEater"
    | "foodEaterOnline"
    | "custom"
    | "bothFood";
    btnText2?: string;
    btnLink2?: string
  btnMode?: "primary" | "dark" | "light" | 'green';
  btnModeSecondary?: "primary" | "dark" | "light" | 'green';
  btnLink?: string;
  btnText?: string;
}
const Btn = ({ btnType, btnMode, btnLink, btnText, btnModeSecondary, btnText2, btnLink2 }: BtnProps) => {
  const { i18n } = useTranslation();
  const countryCode = i18n.language;
  const btnData = getBtnLinks(countryCode);

  if (btnType === "drv") {
    btnLink = btnData.drvLink;
    btnText = btnText || btnData.drvText;
  } else if (btnType === "pax") {
    btnLink = btnData.paxLink;
    btnText = btnText || btnData.paxText;
  } else if (btnType === "fleet") {
    btnLink = btnData.fleetLink;
    btnText = btnText || btnData.fleetText;
  } else if (btnType === "payment") {
    btnLink = btnData.paymentLink;
    btnText = btnText || btnData.paymentText;
  } else if (btnType === "foodBusiness") {
    btnLink = btnData.foodBusinessLink;
    btnText = btnText || btnData.foodBusinessText;
  } else if (btnType === "foodDelivery") {
    btnLink = btnData.foodDeliveryLink;
    btnText = btnText || btnData.foodDeliveryText;
  } else if (btnType === "foodEater") {
    btnLink = btnData.foodEaterLink;
    btnText = btnText || btnData.foodEaterText;
  } else if (btnType === "foodEaterOnline") {
    btnLink = btnData.foodEaterOnlineLink;
    btnText = btnText || btnData.foodEaterOnlineText;
  }
  return (
    <div className={`my-2 btn-${btnMode} btn-${btnModeSecondary}`}>
      <a className="block" href={btnLink || btnLink2}>
        {btnText || btnText2}
      </a>
    </div>
  );
};

export default Btn;
