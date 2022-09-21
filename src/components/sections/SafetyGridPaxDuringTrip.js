import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import ColumnsSection from "../ColumnSection";

const SafetyGridPaxDuringTrip = ({ images }) => {
  const { t } = useTranslation();
  const props = {
    title: t("SafetyGridPaxDuringTrip.title"),
    desc: t("SafetyGridPaxDuringTrip.desc"),
    bgColor: t("SafetyGridPaxDuringTrip.bgColor"),
    textColor: t("SafetyGridPaxDuringTrip.textColor"),
    columns: t("SafetyGridPaxDuringTrip.columns", { returnObjects: true }),
    width: "w-72"
  };

  props.columns.forEach((col, index) => {
    const image = getImage(images[index]);
    col.image = (
      <GatsbyImage
        image={image}
        alt={images[index].description}
        width={700}
        height={700}
        className={`z-10 m-4`}
      ></GatsbyImage>
    );
  });

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default SafetyGridPaxDuringTrip;
