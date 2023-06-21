// @desc Article Grid used for navigation
import React from "react";
import { t } from "../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";
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
    gatsbyImageData: React.ReactNode;
  }[];
}

const DrvRequirementColumns = ({ images }: DrvRequirementColumnsProps) => {
  const props: ColumnsSectionProps = {
    title: t("DrvRequirementColumns.title"),
    gridCols: t("DrvRequirementColumns.gridCols"),
    bgColor: t("DrvRequirementColumns.bgColor"),
    textColor: t("DrvRequirementColumns.textColor"),
    columns: t("DrvRequirementColumns.columns", { returnObjects: true }),
  };

  if (images) {
    props.columns.forEach((col, index) => {
      col.image = images[index];
      col.imageStyle = "z-10 m-4 w-72";
      col.isImage = true;
      col.height = "h-max";
      col.insideHeight = "h-max";
      col.truncate = false;
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

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default DrvRequirementColumns;
