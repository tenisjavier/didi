import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface DiDiPayBusinessColumnsProps {
  images?: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  }[];
}

const DiDiPayBusinessColumns = ({ images }: DiDiPayBusinessColumnsProps) => {
  const { t } = useTranslation();
  const props: ColumnsSectionProps = {
    bgColor: t("DiDiPayBusinessColumns.bgColor"),
    textColor: t("DiDiPayBusinessColumns.textColor"),
    columns: t("DiDiPayBusinessColumns.columns", { returnObjects: true }),
  };

  if (images) {
    props.columns.forEach((col, index) => {
      const image = images[index].gatsbyImageData;
      col.image = (
        <GatsbyImage
          image={image}
          alt={images[index].description}
          className="z-10 m-4 w-48"
        ></GatsbyImage>
      );
    });
  }
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default DiDiPayBusinessColumns;
