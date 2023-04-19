import React from "react";
import { t } from "../../context/countryContext";
import Banner, {BannerProps} from "../Banner";

const AboutWomenDrvVideo = () => {
  const props: BannerProps = {
    title: t("AboutWomenDrvVideo.title"),
    desc: (
      <iframe
        className="mt-8"
        width="640"
        height="400"
        src="https://www.youtube.com/embed/L2f37r_G18s"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    ),
    bgColor: t("AboutWomenDrvVideo.bgColor"),
    textColor: t("AboutWomenDrvVideo.textColor"),
    height: "h-128",
    alignItems: "items-start",
  };

  return <Banner {...props}></Banner>;
};

export default AboutWomenDrvVideo;
