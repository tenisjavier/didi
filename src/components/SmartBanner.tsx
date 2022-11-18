import React from "react";
import { useCountry, t } from "../context/countryContext";
import { StaticImage } from "gatsby-plugin-image";
import { getBtnLinks } from "../config/btn-config";
import Btn from "../components/Btn";
interface SmartBannerProps {
  type:
    | "both"
    | "drv"
    | "pax"
    | "fleet"
    | "payment"
    | "foodBusiness"
    | "foodDelivery"
    | "foodEater";
  sbTitle?: string;
  sbDesc?: string;
  sbCTA?: string;
}

const SmartBanner = (props: SmartBannerProps) => {
  const { type, sbTitle, sbDesc, sbCTA } = props;
  const countryCode = useCountry().code;
  const btnData = getBtnLinks(countryCode);
  let btnText, Logo, bgColor, bannerTitle, bannerDesc;

  const btnMode = "primary";

  if (type === "drv") {
    btnText = btnData.drvText.replace(/ .*/, "");
    Logo = <DrvLogo></DrvLogo>;
    bgColor = "bg-white";
    bannerTitle = t("SBDrv.title");
    bannerDesc = t("SBDrv.desc");
  } else if (type === "pax") {
    btnText = sbCTA || btnData.paxText.replace(/ .*/, "");
    Logo = <PaxLogo></PaxLogo>;
    bgColor = "bg-white";
    bannerTitle = sbTitle || t("SBPax.title");
    bannerDesc = sbDesc || t("SBPax.desc");
  } else if (type === "fleet" && btnData.fleetText) {
    btnText = btnData.fleetText.replace(/ .*/, "");
    Logo = <DiDiFleet></DiDiFleet>;
    bgColor = "bg-white";
    bannerTitle = t("SBFleet.title");
    bannerDesc = t("SBFleet.desc");
  } else if (type === "payment" && btnData.paymentText) {
    btnText = btnData.paymentText.replace(/ .*/, "");
    Logo = <DiDiPay></DiDiPay>;
    bgColor = "bg-white";
    bannerTitle = t("SBPay.title");
    bannerDesc = t("SBPay.desc");
  } else if (type === "foodEater") {
    btnText = "Descargar";
    Logo = <FoodEaterLogo></FoodEaterLogo>;
    bgColor = "bg-white";
    bannerTitle = t("SBFoodEater.title");
    bannerDesc = t("SBFoodEater.desc");
  } else if (type === "foodBusiness") {
    btnText = "Descargar";
    Logo = <FoodEaterLogo></FoodEaterLogo>;
    bgColor = "bg-white";
    bannerTitle = t("SBFoodBusiness.title");
    bannerDesc = t("SBFoodBusiness.desc");
  } else if (type === "foodDelivery") {
    btnText = "Descargar";
    Logo = <FoodEaterLogo></FoodEaterLogo>;
    bgColor = "bg-white";
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
        <Btn btnText={btnText} btnMode={btnMode} btnType={type}></Btn>
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
const DiDiFleet = () => {
  return (
    <div className="p-3">
      <StaticImage
        src="../images/didi-fleet-logo.png"
        alt="didi fleet logo"
        className=""
        width={50}
      />
    </div>
  );
};

const DiDiPay = () => {
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

/*const FoodBusinessLogo = () => {
  return (
    <div className="p-3">
      <StaticImage src="../images/didi-food-business-logo.png" alt="didi business logo" className="" width={50} />
    </div>
  );
};*/

/*const FoodDeliveryLogo = () => {
  return (
    <div className="p-3">
      <StaticImage src="../images/didi-food-delivery-logo.png" alt="didi delivery logo" className="" width={50} />
    </div>
  );
};*/

export default SmartBanner;
