import React from "react";
import { t } from "../../../../context/countryContext";
import { ImageDataType } from "../../../Image";
import CTAFullSection, { CTAFullSectionProps } from "../../../CTAFullSection";

interface BlogHeroProps {
  image?: ImageDataType;
}

const BlogHero = ({ image }: BlogHeroProps) => {
  const props: CTAFullSectionProps = {
    colOne: {
      title: t("BlogHero.title"),
      textColor: t("BlogHero.textColor"),
      bgColorCard: t("BlogHero.bgColor"),
    },
    colTwo: {
      image: image,
      type: "imageCard",
      imageStyle: "z-10 m-4 w-[360px]",
    },
  }
  //   textColor: t("BlogHero.textColor"),

  return <CTAFullSection {...props}></CTAFullSection>;
};

export default BlogHero;
