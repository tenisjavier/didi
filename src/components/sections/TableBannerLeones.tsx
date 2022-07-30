import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Banner, { BannerProps } from "../Banner";

interface LeonesTableProps {
  image?: {
    description: string;
    gatsbyImageData: IGatsbyImageData;
  }
}

const TableBannerLeones = ({ image }: LeonesTableProps ) => {
  const { t } = useTranslation();
  const props: BannerProps = {
    title: t("LeonesTableBannerLeones.title"),
    desc: t(""),
    bgColor: t("LeonesTableBannerLeones.bgColor"),
    textColor: t("LeonesTableBannerLeones.textColor"),
    ...(image && {
      image: (
        <GatsbyImage
          image={image.gatsbyImageData!}
          alt={image.description}
          className="z-10 mt-10"
        ></GatsbyImage>
      ),
    }),
  };

  return <Banner {...props}></Banner>;
};

export default TableBannerLeones;
