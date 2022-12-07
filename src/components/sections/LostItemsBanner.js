import React from "react";
import { t } from "../../context/countryContext";
import Banner from "../Banner";

const LostItemsBanner = () => {
  const props = {
    title: t("LostItemsBanner.title"),
    desc: t("LostItemsBanner.desc"),
    bgColor: t("LostItemsBanner.bgColor"),
    textColor: t("LostItemsBanner.textColor"),
    btnMode: t("LostItemsBanner.btnMode"),
    btnText: t("LostItemsBanner.btnText"),
    btnLink: t("LostItemsBanner.btnLink"),
  };

  return <Banner {...props}></Banner>;
};

export default LostItemsBanner;
