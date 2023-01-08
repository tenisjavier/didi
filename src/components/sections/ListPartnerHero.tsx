import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface ListPartnerHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const ListPartnerHero = ({ bgImage }: ListPartnerHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("ListPartnerHero.title"),
    desc: t("ListPartnerHero.desc"),
    textColor: t("ListPartnerHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block",
  };
  return <CTASection {...props}></CTASection>;
};

export default ListPartnerHero;
