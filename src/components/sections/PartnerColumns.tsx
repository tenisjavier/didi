import React from "react";
import { t } from "../../context/countryContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserShield,
  faDollarSign,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import LinkColumnSection, { ColumnsSectionProps } from "../LinkColumnSection";

interface PartnerColumnsProps {
  images?: {
    title: string;
    description: string;
    gatsbyImageData: any;
  }[];
  icons: any[];
  title?: string;
  desc?: string;
  columns?: any[];
  categoriesID: any[];
}

const PartnerColumns = ({
  images,
  icons,
  title,
  desc,
  columns,
  categoriesID,
}: PartnerColumnsProps) => {
  const props: ColumnsSectionProps = {
    bgColor: t("PartnerColumns.bgColor"),
    textColor: t("PartnerColumns.textColor"),
    columns: columns || t("PartnerColumns.columns", { returnObjects: true }),
    title: title || t("PartnerColumns.title"),
    desc: desc,
    categoriesID: categoriesID,
  };
  
  if (images!.length > 0) {
    props.columns.forEach((col, index) => {
      const image = images![index];
      col.image = image;
      col.imageStyle = "z-10 m-4 w-36";
      col.isImage = true;
    });
  } else if (icons) {
    props.columns.forEach((col, index) => {
      col.image = <FontAwesomeIcon icon={icons[index]} size="3x" />;
    });
  } else {
    props.columns[0].image = <FontAwesomeIcon icon={faUserShield} size="3x" />;

    props.columns[1].image = <FontAwesomeIcon icon={faDollarSign} size="3x" />;

    props.columns[2].image = <FontAwesomeIcon icon={faClock} size="3x" />;
  }
  return <LinkColumnSection {...props}></LinkColumnSection>;
};

export default PartnerColumns;
