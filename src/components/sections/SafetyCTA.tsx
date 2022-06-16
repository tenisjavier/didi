import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface SafetyCTAProps {
  bgImage?: any;
  image?: any;
}

const SafetyCTA = ({ bgImage, image }: SafetyCTAProps) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: false,
    title: t("SafetyCTA.title"),
    desc: t("SafetyCTA.desc"),
    textColor: t("SafetyCTA.textColor"),
    bgColor: t("SafetyCTA.bgColor"),
    ...(bgImage && {
      bgImage: (
        <GatsbyImage
          image={getImage(bgImage)!}
          alt={bgImage.description}
          className="!absolute z-0 h-full w-full md:block"
        ></GatsbyImage>
      ),
    }),
    ...(image && {
      image: (
        <GatsbyImage
          image={getImage(image)!}
          alt={image.description}
          className="z-10 m-4 w-100"
        ></GatsbyImage>
      ),
    }),

    btnText: t("SafetyCTA.btnText"),
    btnLink: t("SafetyCTA.btnLink"),
    btnMode: t("SafetyCTA.btnMode"),
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default SafetyCTA;
