import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface AlianzaMujeresCTA {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const AlianzaMujeresCTA = ({ image }: AlianzaMujeresCTA) => {
  const props: CTAProps = {
    hero: false,
    title: t("AlianzaMujeresCTA.title"),
    desc: t("AlianzaMujeresCTA.desc"),
    textColor: t("AlianzaMujeresCTA.textColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded-full",
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default AlianzaMujeresCTA;
