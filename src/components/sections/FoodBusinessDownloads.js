import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import ColumnsSection from "../ColumnSection";

const FoodBusinessDownloads = ({ images }) => {
  const { t } = useTranslation();
  const props = {
    title: t("FoodBusinessDownloads.title"),
    desc: t("FoodBusinessDownloads.desc"),
    bgColor: t("FoodBusinessDownloads.bgColor"),
    textColor: t("FoodBusinessDownloads.textColor"),
    columns: t("FoodBusinessDownloads.columns", { returnObjects: true }),
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

export default FoodBusinessDownloads;
