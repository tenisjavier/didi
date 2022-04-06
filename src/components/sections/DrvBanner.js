import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Banner from "../Banner";

const DrvBanner = () => {
  const { t } = useTranslation();
  const props = {
    data: {
      title: t("DrvBanner.title"),
      desc: t("DrvBanner.desc"),
      bgColor: t("DrvBanner.bgColor"),
      textColor: t("DrvBanner.textColor"),
      btnMode: t("DrvBanner.btnMode"),
      btnType: "drv",
    },
  };

  return <Banner {...props}></Banner>;
};

export default DrvBanner;
