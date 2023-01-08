import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface DownloadCTAProps {
  image?: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const DownloadFleetCTA = ({ image }: DownloadCTAProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("DownloadFleetCTA.title"),
    desc: t("DownloadFleetCTA.desc"),
    textColor: t("DownloadFleetCTA.textColor"),
    bgColor: t("DownloadFleetCTA.bgColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100",
    btnType: "fleet",
    btnMode: t("DownloadFleetCTA.btnMode"),
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default DownloadFleetCTA;
