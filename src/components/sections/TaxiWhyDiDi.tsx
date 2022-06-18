import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface TaxiWhyDiDi {
  image: any;
}

const TaxiWhyDidi = ({ image }: TaxiWhyDiDi) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: false,
    title: t("TaxiWhyDiDi.title"),
    bullets: t("TaxiWhyDiDi.bullets", { returnObjects: true }),
    textColor: t("TaxiWhyDiDi.textColor"),
    image: (
      <GatsbyImage
        image={getImage(image)!}
        alt={image.description}
        className="z-10 m-4 w-100 rounded-full"
      ></GatsbyImage>
    ),
    btnMode: t("TaxiWhyDiDi.btnMode"),
    btnType: "drv",
    reverse: false,
  };
  return <CTASection {...props}></CTASection>;
};

export default TaxiWhyDidi;
