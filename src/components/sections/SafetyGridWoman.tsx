import React from "react";
import { t } from "../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface SafetyFeaturesGrid {
  images: {
    title: string;
    description: string;
    gatsbyImageData: React.ReactNode;
  }[];
}
const SafetyGridWoman = ({ images }: SafetyFeaturesGrid) => {
  const props: ColumnsSectionProps = {
    title: t("SafetyGridWoman.title"),
    desc: t("SafetyGridWoman.desc"),
    bgColor: t("SafetyGridWoman.bgColor"),
    textColor: t("SafetyGridWoman.textColor"),
    columns: t("SafetyGridWoman.columns", { returnObjects: true }),
  };

  props.columns.forEach((col, index) => {
    const image = images[index];
    col.image = image;
    col.imageStyle = "z-10 m-4";
    col.isImage = true;
  });
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default SafetyGridWoman;
