import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { getBtnLinks } from "../../config/btn-config";
import { getCountryCodeFromUrl } from "../../config/countries-config";

const SmartBanner = (props) => {
  const btnData = getBtnLinks(getCountryCodeFromUrl());
  const { type } = props;
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
    bannerTitle = "DiDi Conductor";
    bannerDesc = "Genera Dinero";
  } else if (props.type === "pax") {
    btnLink = btnData.paxLink;
    btnText = btnData.paxText.replace(/ .*/, "");
    Logo = <PaxLogo></PaxLogo>;
    bgColor = "bg-orange-primary";
    btnBgColor = "bg-white";
    btnTextColor = "text-black";
    bannerTitle = "DiDi Pasajero";
    bannerDesc = "Viaja Seguro y Barato";
  }

  return (
    <div className={"fixed w-full h-auto z-20 bottom-0 lg:hidden " + bgColor}>
      <div className="flex justify-between items-center h-full p-2">
        <span className="flex">{Logo}</span>
        <span className="ml-2">
          <p className="font-bold">{bannerTitle}</p>
          <p>{bannerDesc}</p>
        </span>
        <div className={"btn ml-3 px-3 pt-2 " + btnBgColor}>
          <Link to={btnLink} className={btnTextColor}>
            {btnText}
          </Link>
        </div>
      </div>
    </div>
  );
};
const PaxLogo = () => {
  return (
    <div>
      <Link to="/cl">
        <StaticImage
          src="../images/pax-logo.png"
          alt="didi pasajero logo"
          className=""
          width={50}
        />
      </Link>
    </div>
  );
};

const DrvLogo = () => {
  return (
    <div className="p-3">
      <Link className="" to="/cl">
        <StaticImage
          src="../images/drv-logo.png"
          alt="didi conductor logo"
          className=""
          width={50}
        />
      </Link>
    </div>
  );
};

export default SmartBanner;
