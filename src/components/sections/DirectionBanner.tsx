import React from "react";
import { t } from "../../context/countryContext";
import Banner, { BannerProps } from "../Banner";

interface DirectionBannerProps {
  data: {
    destination: string;
    carDuration: string;
    duration: string;
  };
}

const DirectionBanner = ({ data }: DirectionBannerProps) => {
  const destination = data.destination;
  const carDuration = data.carDuration;
  const duration = data.duration;
  const props: BannerProps = {
    title: t("DirectionBanner.title", { destination, carDuration }),
    desc: t("DirectionBanner.desc", { duration }),
    bgColor: t("DirectionBanner.bgColor"),
    textColor: t("DirectionBanner.textColor"),
    btnMode: t("DirectionBanner.btnMode"),
    btnType: "pax",
  };

  return <Banner {...props}></Banner>;
};

export default DirectionBanner;
