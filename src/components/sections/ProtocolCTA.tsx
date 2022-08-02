import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import DoubleCTASection, { DoubleCTAProps } from "../DoubleCTASection";

interface ProtocolCTA {
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const ProtocolCTA = ({ image }: ProtocolCTA) => {
  const { t } = useTranslation();
  const props: DoubleCTAProps = {
    hero: false,
    title: t("ProtocolCTA.title"),
    desc: t("ProtocolCTA.desc"),
    title2: t("ProtocolCTA.title2"),
    desc2: t("ProtocolCTA.desc2"),
    textColor: t("ProtocolCTA.textColor"),
    image: (
      <GatsbyImage
        image={image.gatsbyImageData!}
        alt={image.description}
        className="z-10 m-4 w-100 rounded-full"
      ></GatsbyImage>
    ),
    btnMode: t("ProtocolCTA.btnMode"),
    btnText: t("ProtocolCTA.btnText"),
    btnLink: t("ProtocolCTA.btnLink"),
    reverse: false,
    doubleTitle: true
  };
  return <DoubleCTASection {...props}></DoubleCTASection>;
};

export default ProtocolCTA;
