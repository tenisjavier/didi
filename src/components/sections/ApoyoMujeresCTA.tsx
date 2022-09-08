import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface ApoyoMujeresCTA {
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const ApoyoMujeresCTA = ({ image }: ApoyoMujeresCTA) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: false,
    title: t("ApoyoMujeresCTA.title"),
    desc: t("ApoyoMujeresCTA.desc"),
    textColor: t("ApoyoMujeresCTA.textColor"),
    image: (
      <GatsbyImage
        image={image.gatsbyImageData!}
        alt={image.description}
        className="z-10 m-4 w-100 rounded-full"
      ></GatsbyImage>
    ),
    btnMode: t("ApoyoMujeresCTA.btnMode"),
    btnText: t("ApoyoMujeresCTA.btnText"),
    btnType: "drv",
  };
  return <CTASection {...props}></CTASection>;
};

export default ApoyoMujeresCTA;
