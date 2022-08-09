import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { StaticImage } from "gatsby-plugin-image";
import { getBtnLinks } from "../config/btn-config";

interface SmartBannerProps {
  type: "both" | "drv" | "pax" | "foodBusiness" | "foodDelivery" | "foodEater";
}

const SmartBanner = (props: SmartBannerProps) => {
  const { i18n, t } = useTranslation();
  const { type } = props;
  const countryCode = i18n.language;
  const btnData = getBtnLinks(countryCode);
  let btnLink,
    btnText,
    Logo,
    bgColor,
    btnBgColor,
    btnTextColor,
    bannerTitle,
    bannerDesc;

  if (type === "drv") {
    btnLink = btnData.drvLink;
    btnText = btnData.drvText.replace(/ .*/, "");
    Logo = <DrvLogo></DrvLogo>;
    bgColor = "bg-white";
    btnBgColor = "bg-orange-primary";
    btnTextColor = "text-white";
    bannerTitle = t("SBDrv.title");
    bannerDesc = t("SBDrv.desc");
  } else if (type === "pax") {
    btnLink = btnData.paxLink;
    btnText = btnData.paxText.replace(/ .*/, "");
    Logo = <PaxLogo></PaxLogo>;
    bgColor = "bg-white";
    btnBgColor = "bg-orange-primary";
    btnTextColor = "text-white";
    bannerTitle = t("SBPax.title");
    bannerDesc = t("SBPax.desc");
  } else if (type === "foodEater") {
    btnLink = btnData.foodEaterLink;
    btnText = "Descargar";
    Logo = <FoodEaterLogo></FoodEaterLogo>;
    bgColor = "bg-white";
    btnBgColor = "bg-orange-primary";
    btnTextColor = "text-white";
    bannerTitle = t("SBFoodEater.title");
    bannerDesc = t("SBFoodEater.desc");
  } else if (type === "foodBusiness") {
    btnLink = btnData.foodEaterLink;
    btnText = "Descargar";
    Logo = <FoodEaterLogo></FoodEaterLogo>;
    bgColor = "bg-white";
    btnBgColor = "bg-orange-primary";
    btnTextColor = "text-white";
    bannerTitle = t("SBFoodBusiness.title");
    bannerDesc = t("SBFoodBusiness.desc");
  } else if (type === "foodDelivery") {
    btnLink = btnData.foodEaterLink;
    btnText = "Descargar";
    Logo = <FoodEaterLogo></FoodEaterLogo>;
    bgColor = "bg-white";
    btnBgColor = "bg-orange-primary";
    btnTextColor = "text-white";
    bannerTitle = t("SBFoodDelivery.title");
    bannerDesc = t("SBFoodDelivery.desc");
  }

  return (
    <div className={"fixed bottom-0 z-20 h-auto w-full lg:hidden " + bgColor}>
      <div className="flex h-full items-center justify-between p-2">
        <span className="flex">{Logo}</span>
        <span className="ml-2">
          <p className="font-bold leading-3">{bannerTitle}</p>
          <p className="leading-3">{bannerDesc}</p>
        </span>
        <div className={"btn-primary ml-3 px-3 pt-2 " + btnBgColor}>
          <a href={btnLink} className={btnTextColor}>
            {btnText}
          </a>
        </div>
      </div>
    </div>
  );
};
const PaxLogo = () => {
  return (
    <div>
      <StaticImage
        src="../images/pax-logo.png"
        alt="didi pasajero logo"
        className=""
        width={50}
      />
    </div>
  );
};

const DrvLogo = () => {
  return (
    <div className="p-3">
      <StaticImage
        src="../images/drv-logo.png"
        alt="didi conductor logo"
        className=""
        width={50}
      />
    </div>
  );
};

const FoodEaterLogo = () => {
  return (
    <div className="p-3">
      <StaticImage
        src="../images/didi-food-eater-logo.png"
        alt="didi eater logo"
        className=""
        width={50}
      />
    </div>
  );
};

export default SmartBanner;
