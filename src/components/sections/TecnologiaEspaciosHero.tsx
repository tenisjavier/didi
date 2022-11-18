import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface TecnologiaEspaciosHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const TecnologiaEspaciosHero = ({ bgImage }: TecnologiaEspaciosHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("TecnologiaEspaciosHero.title"),
    desc: t("TecnologiaEspaciosHero.desc"),
    textColor: t("TecnologiaEspaciosHero.textColor"),
    bgImage: (
      <GatsbyImage
        image={bgImage.gatsbyImageData!}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full md:block"
      ></GatsbyImage>
    ),
    btnMode: t("TecnologiaEspaciosHero.btnMode"),
    btnLink: t("TecnologiaEspaciosHero.btnLink"),
    btnText: t("TecnologiaEspaciosHero.btnText"),
  };
  return <CTASection {...props}></CTASection>;
};

export default TecnologiaEspaciosHero;
