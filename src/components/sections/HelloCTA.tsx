import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface HelloCTA {
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const HelloCTA = ({ image }: HelloCTA) => {
  const props: CTAProps = {
    hero: false,
    title: t("HelloCTA.title"),
    desc: t("HelloCTA.desc"),
    textColor: t("HelloCTA.textColor"),
    image: (
      <GatsbyImage
        image={image.gatsbyImageData!}
        alt={image.description}
        className="z-10 m-4 w-100 rounded-full"
      ></GatsbyImage>
    ),
    btnMode: t("HelloCTA.btnMode"),
    btnText: t("HelloCTA.btnText"),
    btnLink: t("HelloCTA.btnLink"),
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default HelloCTA;
