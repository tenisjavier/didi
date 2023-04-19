import React from "react";
import { t } from "../../context/countryContext";
import Banner, {BannerProps} from "../Banner";

const VideoSection = () => {
  const videoSrc = t("VideoSection.src");
  const props: BannerProps = {
    title: t("VideoSection.title"),
    desc: (
      <iframe
        className="mt-8 w-full h-64 md:h-105"
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
    alignItems: "items-start",
    btnLink: t("VideoSection.btnLink"),
    btnMode: t("VideoSection.btnMode"),
    btnText: t("VideoSection.btnText"),
  };

  return <Banner {...props}></Banner>;
};

export default VideoSection;
