import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface DiDiPayBlogHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const DiDiPayBlogHero = ({ bgImage }: DiDiPayBlogHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("DiDiPayBlogHero.title"),
    desc: t("DiDiPayBlogHero.desc"),
    textColor: t("DiDiPayBlogHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full brightness-50  md:block",
    btnMode: t("DiDiPayBlogHero.btnMode"),
    btnType: "payment",
  };
  return <CTASection {...props}></CTASection>;
};

export default DiDiPayBlogHero;
