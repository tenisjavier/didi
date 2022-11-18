import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface ContactHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const ContactHero = ({ bgImage }: ContactHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("ContactHero.title"),
    desc: t("ContactHero.desc"),
    textColor: t("ContactHero.textColor"),
    bgImage: (
      <GatsbyImage
        image={bgImage.gatsbyImageData}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full md:block brightness-50"
      ></GatsbyImage>
    ),
    btnMode: t("ContactHero.btnMode"),
    btnText: t("ContactHero.btnText"),
    btnLink: t("ContactHero.btnLink"),
  };
  return <CTASection {...props}></CTASection>;
};

export default ContactHero;
