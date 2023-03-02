import React from "react";
import { t } from "../../context/countryContext";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface HowToCalDiDiColumnsProps {
  images?: {
    title: string;
    description: string;
    gatsbyImageData: React.ReactNode;
  }[];
}

const HowToCalDiDiColumns = ({ images }: HowToCalDiDiColumnsProps) => {
  const props: ColumnsSectionProps = {
    title: t("HowToCalDiDiColumns.title"),
    desc: t("HowToCalDiDiColumns.desc"),
    bgColor: t("HowToCalDiDiColumns.bgColor"),
    textColor: t("HowToCalDiDiColumns.textColor"),
    columns: t("HowToCalDiDiColumns.columns", { returnObjects: true }),
    small: t("HowToCalDiDiColumns.small"),
  };

  if (images) {
    props.columns.forEach((col, index) => {
      col.image = images[index];
      col.imageStyle = "z-10 m-4 w-48";
      col.isImage = true;
    });
  }
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default HowToCalDiDiColumns;
