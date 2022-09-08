import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Banner from "../Banner";

const FleetVideoSection = () => {
  const { t } = useTranslation();
  const videoSrc = t("FleetVideoSection.src");
  const props = {
    title: t("FleetVideoSection.title"),
    desc: (
      <iframe
        className="mt-8"
        width="640"
        height="400"
        src={videoSrc}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    ),
    bgColor: t("FleetVideoSection.bgColor"),
    textColor: t("FleetVideoSection.textColor"),
    height: "h-128",
    alignItems: "items-start",
  };

  return <Banner {...props}></Banner>;
};

export default FleetVideoSection;
