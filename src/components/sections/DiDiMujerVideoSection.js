import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Banner from "../Banner";

const DiDiMujerVideoSection = () => {
  const { t } = useTranslation();
  const videoSrc = t("DiDiMujerVideoSection.src");
  const props = {
    title: t("DiDiMujerVideoSection.title"),
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
    bgColor: t("DiDiMujerVideoSection.bgColor"),
    textColor: t("DiDiMujerVideoSection.textColor"),
    height: "h-128",
    alignItems: "items-start",
  };

  return <Banner {...props}></Banner>;
};

export default DiDiMujerVideoSection;
