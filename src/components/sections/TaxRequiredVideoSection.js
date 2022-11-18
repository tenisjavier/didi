import React from "react";
import { t } from "../../context/countryContext";
import Banner from "../Banner";

const TaxRequiredVideoSection = () => {
  const videoSrc = t("TaxRequiredVideoSection.src");
  const props = {
    title: t("TaxRequiredVideoSection.title"),
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
    bgColor: t("TaxRequiredVideoSection.bgColor"),
    textColor: t("TaxRequiredVideoSection.textColor"),
    height: "h-128",
    alignItems: "items-start",
  };

  return <Banner {...props}></Banner>;
};

export default TaxRequiredVideoSection;
