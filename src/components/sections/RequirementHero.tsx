import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";
import { BtnType } from "../Btn";

interface RequirementHeroProps {
  title: string;
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
  btnType?: BtnType;
  btnMode?: string;
}

const RequirementHero = ({
  title,
  bgImage,
  btnType,
  btnMode,
}: RequirementHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: title || t("RequirementHero.title"),
    desc: t("RequirementHero.desc"),
    textColor: t("RequirementHero.textColor"),
    btnMode: btnMode || t("RequirementHero.btnMode"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block ",
    btnType: btnType || "drv",
  };
  return <CTASection {...props}></CTASection>;
};

export default RequirementHero;
