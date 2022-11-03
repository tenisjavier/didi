import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Banner from "../Banner";

const AboutClubDiDiVideo = () => {
  const { t } = useTranslation();
  const props = {
    title: t("AboutClubDiDiVideo.title"),
    desc: (
      <iframe
        className="mt-8 w-full h-64 md:h-110"
        src={t("AboutClubDiDiVideo.video")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    ),
    bgColor: t("AboutClubDiDiVideo.bgColor"),
    textColor: t("AboutClubDiDiVideo.textColor"),
    height: "h-128",
    alignItems: "items-start",
  };

  return <Banner {...props}></Banner>;
};

export default AboutClubDiDiVideo;
