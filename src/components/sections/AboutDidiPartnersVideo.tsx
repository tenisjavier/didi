import React from "react";
import { t } from "../../context/countryContext";
import Banner, {BannerProps} from "../Banner";

const AboutDidiPartnersVideo = () => {
  const props: BannerProps = {
    title: t("AboutDidiPartnersVideo.title"),
    desc: (
      <iframe
        className="mt-8 w-full h-64 md:h-110"
        src={t("AboutDidiPartnersVideo.video")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    ),
    bgColor: t("AboutDidiPartnersVideo.bgColor"),
    textColor: t("AboutDidiPartnersVideo.textColor"),
    height: "h-128",
    alignItems: "items-start",
  };

  return <Banner {...props}></Banner>;
};

export default AboutDidiPartnersVideo;
