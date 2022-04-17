import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Banner from "../Banner";

const DirectionBanner = ({ data }) => {
  const { t } = useTranslation();
  const destination = data.destination;
  const carDuration = data.carDuration;
  const duration = data.duration;
  const props = {
    data: {
      title: t("DirectionBanner.title", { destination, carDuration }),
      desc: t("DirectionBanner.desc", { duration }),
      bgColor: t("DirectionBanner.bgColor"),
      textColor: t("DirectionBanner.textColor"),
      btnMode: t("DirectionBanner.btnMode"),
      btnType: "pax",
    },
  };

  return <Banner {...props}></Banner>;
};

export default DirectionBanner;
