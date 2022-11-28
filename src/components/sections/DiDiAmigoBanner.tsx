import React from "react";
import { t } from "../../context/countryContext";
import Banner, { BannerProps } from "../Banner";

const DiDiAmigoBanner = () => {
  const props: BannerProps = {
    title: t("DiDiAmigoBanner.title"),
    desc: t("DiDiAmigoBanner.desc"),
    bgColor: t("DiDiAmigoBanner.bgColor"),
    textColor: t("DiDiAmigoBanner.textColor"),
    btnText: t("DiDiAmigoBanner.btnText"),
    btnLink: t("DiDiAmigoBanner.btnLink"),
    btnMode: t("DiDiAmigoBanner.btnMode"),
  };

  return <Banner {...props}></Banner>;
};

export default DiDiAmigoBanner;
