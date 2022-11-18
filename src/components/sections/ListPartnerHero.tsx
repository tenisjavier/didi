import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface ListPartnerHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const ListPartnerHero = ({ bgImage }: ListPartnerHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("ListPartnerHero.title"),
    desc: t("ListPartnerHero.desc"),
    textColor: t("ListPartnerHero.textColor"),
    bgImage: (
      <GatsbyImage
        image={bgImage.gatsbyImageData}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full md:block"
      ></GatsbyImage>
    ),
  };
  return <CTASection {...props}></CTASection>;
};

export default ListPartnerHero;
