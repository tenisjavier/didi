import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface DiDiPayEnterpriseHeroProps {
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

const DiDiPayEnterpriseHero = ({
  bgImage,
  image,
}: DiDiPayEnterpriseHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("DiDiPayEnterpriseHero.title"),
    desc: t("DiDiPayEnterpriseHero.desc"),
    textColor: t("DiDiPayEnterpriseHero.textColor"),
    bgColor: t("DiDiPayEnterpriseHero.bgColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block brightness-75",
    image: image,
    reverse: true,
    imageStyle: "!z-10 m-4 w-100 bg-orange-primary",
    btnMode: t("DiDiPayEnterpriseHero.btnMode"),
    btnType: "paymentBusiness",
  };
  return <CTASection {...props}></CTASection>;
};

export default DiDiPayEnterpriseHero;
