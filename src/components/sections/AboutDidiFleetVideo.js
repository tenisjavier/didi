import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Banner from "../Banner";

const AboutDidiFleetVideo = () => {
  const { t } = useTranslation();
  const props = {
    title: t("AboutDidiFleetVideo.title"),
    desc: (
      <iframe
        className="mt-8"
        width="640"
        height="400"
        src={t("AboutDidiFleetVideo.video")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    ),
    bgColor: t("AboutDidiFleetVideo.bgColor"),
    textColor: t("AboutDidiFleetVideo.textColor"),
    height: "h-128",
    alignItems: "items-start",
  };

  return <Banner {...props}></Banner>;
};

export default AboutDidiFleetVideo;
