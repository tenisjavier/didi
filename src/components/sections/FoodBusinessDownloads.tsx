import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface FoodBusinessDownloadsProps {
  images: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  }[];
}

const FoodBusinessDownloads = ({ images }: FoodBusinessDownloadsProps) => {
  const { t } = useTranslation();
  const props: ColumnsSectionProps = {
    title: t("FoodBusinessDownloads.title"),
    desc: t("FoodBusinessDownloads.desc"),
    bgColor: t("FoodBusinessDownloads.bgColor"),
    textColor: t("FoodBusinessDownloads.textColor"),
    columns: t("FoodBusinessDownloads.columns", { returnObjects: true }),
  };

  props.columns.forEach((col: any, index: number) => {
    const image = images[index].gatsbyImageData;
    col.image = (
      <a href={col.linkItem}>
        <GatsbyImage
          image={image}
          alt={images[index].description}
          className="z-10"
        ></GatsbyImage>
      </a>
    );
  });

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default FoodBusinessDownloads;
