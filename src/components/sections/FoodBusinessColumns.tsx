import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface FoodBusinessColumnsProps {
  images: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  }[];
}

const FoodBusinessColumns = ({ images }: FoodBusinessColumnsProps) => {
  const { t } = useTranslation();
  const props: ColumnsSectionProps = {
    bgColor: t("FoodBusinessColumns.bgColor"),
    textColor: t("FoodBusinessColumns.textColor"),
    columns: t("FoodBusinessColumns.columns", { returnObjects: true }),
  };

  props.columns.forEach((col, index) => {
    const image = images[index].gatsbyImageData;
    col.image = (
      <GatsbyImage
        image={image}
        alt={images[index].description}
        className="z-10"
      ></GatsbyImage>
    );
  });

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default FoodBusinessColumns;
