import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface FoodDeliveryColumns {
  images: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  }[];
}

const FoodDeliveryColumns = ({ images }: FoodDeliveryColumns) => {
  const props: ColumnsSectionProps = {
    bgColor: t("FoodDeliveryColumns.bgColor"),
    textColor: t("FoodDeliveryColumns.textColor"),
    columns: t("FoodDeliveryColumns.columns", { returnObjects: true }),
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

export default FoodDeliveryColumns;
