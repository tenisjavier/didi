import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface NewsroomHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const NewsroomHero = ({ bgImage }: NewsroomHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("NewsroomHero.title"),
    desc: t("NewsroomHero.desc"),
    textColor: t("NewsroomHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block",
    btnMode: t("NewsroomHero.btnMode"),
    btnType: "pax",
  };
  return <CTASection {...props}></CTASection>;
};

export default NewsroomHero;
