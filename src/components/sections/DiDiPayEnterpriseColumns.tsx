import React from "react";
import { t } from "../../context/countryContext";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface DiDiPayEnterpriseColumnsProps {
  images: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  }[];
  icons: any[];
}

const DiDiPayEnterpriseColumns = ({
  images,
  icons,
}: DiDiPayEnterpriseColumnsProps) => {
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
      col.image = (
        <FontAwesomeIcon
          icon={icons[index]}
          size="4x"
          className="text-orange-primary w-16"
        />
      );
    });
  }
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default DiDiPayEnterpriseColumns;
