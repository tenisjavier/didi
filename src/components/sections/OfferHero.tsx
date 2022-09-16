import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import CTASection, { CTAProps } from "../CTASection";
import { useTranslation } from "gatsby-plugin-react-i18next";

interface PartnerHeroProps {
  title: string;
  desc: string;
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const OfferHero = ({ title, desc, image }: PartnerHeroProps) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: true,
    title: title,
    desc: desc,
    textColor: t("OfferHero.textColor"),
    bgColor: t("OfferHero.bgColor"),
    image: (
      <GatsbyImage
        image={image.gatsbyImageData!}
        alt={image.description}
        className="z-10 m-4 w-100 rounded-full"
      ></GatsbyImage>
    ),
    btnMode: t("OfferHero.btnMode"),
    btnType: t("OfferHero.btnType"),
    btnText: t("OfferHero.btnText"),
    btnLink: t("OfferHero.btnLink"),
    btnArray: t("OfferHero.btnArray", { returnObjects: true }),
    reverse: true,
  };

  return <CTASection {...props}></CTASection>;
};

export default OfferHero;
