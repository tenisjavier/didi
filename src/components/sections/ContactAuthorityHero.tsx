import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface ContactAuthorityHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const ContactAuthorityHero = ({ bgImage }: ContactAuthorityHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("ContactAuthorityHero.title"),
    desc: t("ContactAuthorityHero.desc"),
    textColor: t("ContactAuthorityHero.textColor"),
    bgImage: (
      <GatsbyImage
        image={bgImage.gatsbyImageData}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full md:block brightness-50"
      ></GatsbyImage>
    ),
  };
  return <CTASection {...props}></CTASection>;
};

export default ContactAuthorityHero;
