import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Banner from "../Banner";

const VideoSection = () => {
  const { t } = useTranslation();
  const videoSrc = t("VideoSection.src");
  const props = {
    title: t("VideoSection.title"),
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
    descText: t("VideoSection.descText"),
    bgColor: t("VideoSection.bgColor"),
    textColor: t("VideoSection.textColor"),
    height: "h-128",
    alignItems: "items-start",
    btnLink: t("VideoSection.btnLink"),
    btnMode: t("VideoSection.btnMode"),
    btnText: t("VideoSection.btnText"),
  };

  return <Banner {...props}></Banner>;
};

export default VideoSection;
