import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface FleetWhyDiDi {
  image: any;
}

const FleetWhyDidi = ({ image }: FleetWhyDiDi) => {
  const props: CTAProps = {
    hero: false,
    title: t("FleetWhyDiDi.title"),
    bullets: t("FleetWhyDiDi.bullets", { returnObjects: true }),
    textColor: t("FleetWhyDiDi.textColor"),
    image: (
      <GatsbyImage
        image={getImage(image)!}
        alt={image.description}
        className="z-10 m-4 w-100 rounded-full"
      ></GatsbyImage>
    ),
    btnMode: t("FleetWhyDiDi.btnMode"),
    btnType: "drv",
    reverse: false,
  };
  return <CTASection {...props}></CTASection>;
};

export default FleetWhyDidi;
