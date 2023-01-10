import React from "react";
import CTASection, { CTAProps } from "../CTASection";
import { t } from "../../context/countryContext";

interface PartnerHeroProps {
  title: string;
  desc: string;
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const OfferHero = ({ title, desc, image }: PartnerHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: title || t("OfferHero.title"),
    desc: desc || t("OfferHero.desc"),
    textColor: t("OfferHero.textColor"),
    bgColor: t("OfferHero.bgColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded-full",
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
