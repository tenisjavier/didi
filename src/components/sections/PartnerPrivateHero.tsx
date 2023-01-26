import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface PartnerHeroProps {
  title: string;
  desc: string;
  btnLink: string;
  btnLinkText: string;
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const PartnerHero = ({
  title,
  desc,
  image,
  btnLink,
  btnLinkText,
}: PartnerHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: title,
    desc: desc,
    textColor: t("PartnerHero.textColor"),
    bgColor: t("PartnerHero.bgColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded",
    btnMode: t("PartnerHero.btnMode"),
    btnLink: btnLink || "",
    btnText: btnLinkText || "",
    reverse: true,
  };

  return <CTASection {...props}></CTASection>;
};

export default PartnerHero;
