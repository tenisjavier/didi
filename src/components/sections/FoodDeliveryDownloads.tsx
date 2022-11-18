import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface FoodDeliveryDownloads {
  images: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  }[];
}

const FoodDeliveryDownloads = ({ images }: FoodDeliveryDownloads) => {
  const props: ColumnsSectionProps = {
    title: t("FoodDeliveryDownloads.title"),
    desc: t("FoodDeliveryDownloads.desc"),
    bgColor: t("FoodDeliveryDownloads.bgColor"),
    textColor: t("FoodDeliveryDownloads.textColor"),
    columns: t("FoodDeliveryDownloads.columns", { returnObjects: true }),
  };

  props.columns.forEach((col: any, index) => {
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

export default FoodDeliveryDownloads;
