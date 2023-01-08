import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface LeonesHeroProps {
  bgImage: {
    description: string;
    gatsbyImageData: any;
  };
  image?: {
    description: string;
    gatsbyImageData: any;
  };
}

const LeonesHero = ({ bgImage, image }: LeonesHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t(""),
    desc: t(""),
    textColor: t(""),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block",
    image: image,
    imageStyle: "z-10 w-100 mt-10",
    btnMode: t(""),
  };
  return <CTASection {...props}></CTASection>;
};

export default LeonesHero;
