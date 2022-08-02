import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import DoubleCTASection, { DoubleCTAProps } from "../DoubleCTASection";

interface ProtocolBulletsProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const ProtocolBullets = ({ image }: ProtocolBulletsProps) => {
  const { t } = useTranslation();
  const props: DoubleCTAProps = {
    hero: false,
    title: t("ProtocolBullets.title"),
    bullets: t("ProtocolBullets.bullets", { returnObjects: true }),
    desc: t("ProtocolBullets.desc"),
    textColor: "gray-primary",
    image: (
      <GatsbyImage
        image={image.gatsbyImageData!}
        alt={image.description}
        className="z-10 m-4 w-100 rounded-full"
      ></GatsbyImage>
    ),
    btnMode: t("ProtocolBullets.btnMode"),
    reverse: true,
    customBulletIcon: true,
  };
  return <DoubleCTASection {...props}></DoubleCTASection>;
};

export default ProtocolBullets;
