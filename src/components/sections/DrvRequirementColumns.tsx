// @desc Article Grid used for navigation
import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import ColumnsNoLimitSection, { ColumnsSectionProps } from "../ColumnNoLimitSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteRight,
  faExclamationCircle,
  faHeadphonesAlt,
} from "@fortawesome/free-solid-svg-icons";

interface DrvRequirementColumnsProps {
  images: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  }[];
}

const DrvRequirementColumns = ({ images }: DrvRequirementColumnsProps) => {
  const { t } = useTranslation();
  const props: ColumnsSectionProps = {
    title: t("DrvRequirementColumns.title"),
    bgColor: t("DrvRequirementColumns.bgColor"),
    textColor: t("DrvRequirementColumns.textColor"),
    columns: t("DrvRequirementColumns.columns", { returnObjects: true }),
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
  } else {
    props.columns[0].image = (
      <FontAwesomeIcon icon={faQuoteRight} size="3x" className="w-12" />
    );

    props.columns[1].image = (
      <FontAwesomeIcon icon={faExclamationCircle} size="3x" className="w-12" />
    );

    props.columns[2].image = (
      <FontAwesomeIcon icon={faHeadphonesAlt} size="3x" className="w-12" />
    );
  }

  return <ColumnsNoLimitSection {...props}></ColumnsNoLimitSection>;
};

export default DrvRequirementColumns;
