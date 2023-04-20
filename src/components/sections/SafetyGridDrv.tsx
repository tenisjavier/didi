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

const SafetyGridDrv = ({ images }: SafetyFeaturesGrid) => {
  const props: ColumnsSectionProps = {
    title: t("SafetyGridDrv.title"),
    desc: t("SafetyGridDrv.desc"),
    bgColor: t("SafetyGridDrv.bgColor"),
    textColor: t("SafetyGridDrv.textColor"),
    columns: t("SafetyGridDrv.columns", { returnObjects: true }),
  };

  props.columns.forEach((col, index) => {
    const image = images[index];
    col.image = image;
    col.imageStyle = "z-10 m-4";
    col.isImage = true;
  });
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default SafetyGridDrv;
