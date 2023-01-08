import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface GuidesHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const GuidesHero = ({ bgImage }: GuidesHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("GuidesHero.title"),
    desc: t("GuidesHero.desc"),
    textColor: t("GuidesHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block",
    btnType: t("GuidesHero.btnType"),
    btnMode: t("GuidesHero.btnMode"),
  };
  return <CTASection {...props}></CTASection>;
};

export default GuidesHero;
