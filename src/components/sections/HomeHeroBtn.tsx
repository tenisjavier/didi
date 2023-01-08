import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface HomeHeroProps {
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
}

const HomeHeroBtn = ({ bgImage, image }: HomeHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("HomeHeroBtn.title"),
    textColor: t("HomeHeroBtn.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block brightness-75",
    image: image,
    imageStyle: "z-10 m-4 w-80",
    reverse: true,
    btnMode: t("HomeHeroBtn.btnMode"),
    btnLink: t("HomeHeroBtn.btnLink"),
    btnText: t("HomeHeroBtn.btnText"),
  };
  return <CTASection {...props}></CTASection>;
};

export default HomeHeroBtn;
