import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface HelloCTA {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const HelloCTA = ({ image }: HelloCTA) => {
  const props: CTAProps = {
    hero: false,
    title: t("HelloCTA.title"),
    desc: t("HelloCTA.desc"),
    textColor: t("HelloCTA.textColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded-full",
    btnMode: t("HelloCTA.btnMode"),
    btnText: t("HelloCTA.btnText"),
    btnLink: t("HelloCTA.btnLink"),
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default HelloCTA;
