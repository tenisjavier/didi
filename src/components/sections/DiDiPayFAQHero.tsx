import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface DiDiPayFAQHeroProps {
  image?: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
  contentful_id?: string;
}

const DiDiPayFAQHero = ({ bgImage, image }: DiDiPayFAQHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("DiDiPayFAQHero.title"),
    desc: t("DiDiPayFAQHero.desc"),
    textColor: t("DiDiPayFAQHero.textColor"),
    bgColor: t("DiDiPayFAQHero.bgColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block",
    image: image,
    reverse: true,
    imageStyle: "!z-10 m-4 w-100",
    btnMode: t("DiDiPayFAQHero.btnMode"),
    btnType: "payment",
  };
  return <CTASection {...props}></CTASection>;
};

export default DiDiPayFAQHero;
