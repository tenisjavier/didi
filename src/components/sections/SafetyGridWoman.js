import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import ColumnsSection from "../ColumnSection";

const SafetyGridWoman = ({ images }) => {
  const { t } = useTranslation();
  const props = {
    title: t("SafetyGridWoman.title"),
    desc: t("SafetyGridWoman.desc"),
    bgColor: t("SafetyGridWoman.bgColor"),
    textColor: t("SafetyGridWoman.textColor"),
    columns: t("SafetyGridWoman.columns", { returnObjects: true }),
  };

  props.columns.forEach((col, index) => {
    const image = getImage(images[index]);
    col.image = (
      <GatsbyImage
        image={image}
        alt={images[index].description}
        width={700}
        height={700}
        className="z-10 m-4"
      ></GatsbyImage>
    );
  });
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default SafetyGridWoman;
