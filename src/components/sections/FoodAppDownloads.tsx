import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface FoodAppDownloadsProps {
  images: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  }[];
}

const FoodAppDownloads = ({ images }: FoodAppDownloadsProps) => {
  const props: ColumnsSectionProps = {
    title: t("FoodAppDownloads.title"),
    desc: t("FoodAppDownloads.desc"),
    bgColor: t("FoodAppDownloads.bgColor"),
    textColor: t("FoodAppDownloads.textColor"),
    columns: t("FoodAppDownloads.columns", { returnObjects: true }),
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

export default FoodAppDownloads;
