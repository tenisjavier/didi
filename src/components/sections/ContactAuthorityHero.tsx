import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface ContactAuthorityHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const ContactAuthorityHero = ({ bgImage }: ContactAuthorityHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("ContactAuthorityHero.title"),
    desc: t("ContactAuthorityHero.desc"),
    textColor: t("ContactAuthorityHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block brightness-50",
  };
  return <CTASection {...props}></CTASection>;
};

export default ContactAuthorityHero;
