import React from "react";
import { useCountry } from "../context/countryContext";
import { getBtnLinks } from "../config/btn-config";
import gtmEvent from "../config/gtm";

// @desc: Pax and Driver CTA buttons.  If not btnType is passed it will be a normal btn.
// @props: btnType drv/pax/none | btnLink (normal btn) "url" | btnMode light/none | children: normal btn text

export interface BtnProps {
  btnType?:
    | "both"
    | "drv"
    | "pax"
    | "fleet"
    | "payment"
    | "paymentBusiness"
    | "foodBusiness"
    | "foodDelivery"
    | "foodEater"
    | "foodEaterOnline"
    | "custom"
    | "bothFood"
    | "bothFoodEn"
    | "foodEaterOnlineEn"
    | "foodEaterEn"
    | "foodBusinessEn"
    | "foodDeliveryEn"
    | "foodBusinessHeroEn"
    | "foodDeliveryHeroEn";
  btnText2?: string;
  btnLink2?: string;
  btnMode?: "primary" | "dark" | "light" | "green" | "hidden";
  btnModeSecondary?: "primary" | "dark" | "light" | "green" | "hidden";
  btnLink?: string;
  btnText?: string;
}
const Btn = ({
  btnType,
  btnMode,
  btnLink,
  btnText,
  btnModeSecondary,
  btnText2,
  btnLink2,
}: BtnProps) => {
  let countryCode = useCountry().code;
  let btnData = getBtnLinks(countryCode);

  if (btnType === "bothFoodEn") {
    countryCode = "mxen";
    btnData = getBtnLinks(countryCode);
    btnLink = btnData.foodEaterOnlineLink;
    btnText = btnData.foodEaterOnlineText;
    btnLink2 = btnData.foodEaterLink;
    btnText2 = btnData.foodEaterText;
  }
  else if (btnType === "foodDeliveryHeroEn") {
    countryCode = "mxen";
    btnData = getBtnLinks(countryCode);
    btnLink = btnData.foodDeliveryLink;
    btnText = btnText || btnData.foodDeliveryText;
  }
  else if (btnType === "foodBusinessHeroEn") {
    countryCode = "mxen";
    btnData = getBtnLinks(countryCode);
    btnLink = btnData.foodBusinessLink;
    btnText = btnText || btnData.foodBusinessText;
  }
  else if (btnType === "foodDeliveryEn") {
    countryCode = "mxen";
    btnData = getBtnLinks(countryCode);
    btnLink = btnData.foodDeliveryLink;
    btnText = btnText || btnData.foodDeliveryText;
  }
  else if (btnType === "foodBusinessEn") {
    countryCode = "mxen";
    btnData = getBtnLinks(countryCode);
    btnLink = btnData.foodBusinessLink;
    btnText = btnText || btnData.foodBusinessText;
  }
  else if (btnType === "foodEaterEn") {
    countryCode = "mxen";
    btnData = getBtnLinks(countryCode);
    btnLink = btnData.foodEaterLink;
    btnText = btnText || btnData.foodEaterText;
  } else if (btnType === "foodEaterOnlineEn") {
    countryCode = "mxen";
    btnData = getBtnLinks(countryCode);
    btnLink = btnData.foodEaterOnlineLink;
    btnText = btnText || btnData.foodEaterOnlineText;
  }
  else if (btnType === "drv") {
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
  } else if (btnType === "paymentBusiness") {
    btnLink = btnData.paymentBusinessLink;
    btnText = btnText || btnData.paymentBusinessText;
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

  const handleClick = (e: any) => {
    e.preventDefault();
    const link = e.target.href;
    let form;
    if (btnType === "drv")
      form = link.includes("quickbolt") ? "quickbolt" : "h5";
    gtmEvent(`click-btn`, {
      btnType: btnType,
      btnLink: link,
      form: form,
      btnText: e.target.innerText,
      countryCode: countryCode,
    });

    window.location.replace(link);
  };

  return (
    <div className={`my-2 btn-${btnMode} btn-${btnModeSecondary}`}>
      <a
        onClick={(e) => handleClick(e)}
        className="block"
        href={btnLink || btnLink2}
      >
        {btnText || btnText2}
      </a>
    </div>
  );
};

export default Btn;
