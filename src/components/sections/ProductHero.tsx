import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface ProductHeroProps {
  title: string;
  desc: string;
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const ProductHero = ({ title, desc, bgImage }: ProductHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: title,
    desc: desc,
    textColor: t("PaxHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block",
    btnMode: t("PaxHero.btnMode"),
    btnType: "pax",
  };
  return <CTASection {...props}></CTASection>;
};

export default ProductHero;
