import React from "react";
import { t } from "../../context/countryContext";
import Banner, {BannerProps} from "../Banner";

const AboutClubDiDiVideo = () => {
  const props: BannerProps = {
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
