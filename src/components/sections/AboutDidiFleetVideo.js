import React from "react";
import { t } from "../../context/countryContext";
import Banner from "../Banner";

const AboutDidiFleetVideo = () => {
  const props = {
    title: t("AboutDidiFleetVideo.title"),
    desc: (
      <iframe
        className="mt-8 w-full h-64 md:h-110"
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
