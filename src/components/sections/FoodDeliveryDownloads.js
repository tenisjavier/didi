import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import ColumnsSection from "../ColumnSection";

const FoodDeliveryDownloads = ({ images }) => {
  const { t } = useTranslation();
  const props = {
    title: t("FoodDeliveryDownloads.title"),
    desc: t("FoodDeliveryDownloads.desc"),
    bgColor: t("FoodDeliveryDownloads.bgColor"),
    textColor: t("FoodDeliveryDownloads.textColor"),
    columns: t("FoodDeliveryDownloads.columns", { returnObjects: true }),
  };

  props.columns.forEach((col, index) => {
    const image = getImage(images[index]);
    col.image = (
      <a href={col.linkItem}>
        <GatsbyImage
          image={image}
          alt={images[index].description}
          width={700}
          height={700}
          className="z-10"
        ></GatsbyImage>
      </a>
    );
  });

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default FoodDeliveryDownloads;
