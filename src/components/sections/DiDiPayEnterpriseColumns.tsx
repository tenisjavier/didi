import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faZap } from "@fortawesome/free-solid-svg-icons";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface DiDiPayEnterpriseColumnsProps {
  images: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  }[];
  icons: any[];
}

const DiDiPayEnterpriseColumns = ({ images, icons }: DiDiPayEnterpriseColumnsProps) => {
  const { t } = useTranslation();
  const props: ColumnsSectionProps = {
    bgColor: t("DiDiPayEnterpriseColumns.bgColor"),
    textColor: t("DiDiPayEnterpriseColumns.textColor"),
    columns: t("DiDiPayEnterpriseColumns.columns", { returnObjects: true }),
  };

  if (images) {
    props.columns.forEach((col, index) => {
      const image = images[index].gatsbyImageData;
      col.image = (
        <GatsbyImage
          image={image}
          alt={images[index].description}
          className="z-10 m-2 w-72"
        ></GatsbyImage>
      );
    });
  } else {
    props.columns.forEach((col, index) => {
      col.image = "";
    });
  }
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default DiDiPayEnterpriseColumns;
