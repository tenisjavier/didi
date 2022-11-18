import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import ColumnsSection from "../ColumnSection";

const SafetyGridWomanSteps = ({ images }) => {
  const props = {
    title: t("SafetyGridWomanSteps.title"),
    desc: t("SafetyGridWomanSteps.desc"),
    bgColor: t("SafetyGridWomanSteps.bgColor"),
    textColor: t("SafetyGridWomanSteps.textColor"),
    columns: t("SafetyGridWomanSteps.columns", { returnObjects: true }),
  };

  if (images) {
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
  }
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default SafetyGridWomanSteps;
