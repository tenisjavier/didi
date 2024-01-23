import React from "react";
import { t } from "../../context/countryContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserShield,
  faDollarSign,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import LinkColumnSection, { ColumnsSectionProps } from "../LinkColumnSection";

interface DiDiFleetDiDiMasPartnerColumnsProps {
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

const DiDiFleetDiDiMasPartnerColumns = ({
  images,
  icons,
  title,
  desc,
  columns,
  categoriesID,
}: DiDiFleetDiDiMasPartnerColumnsProps) => {
  const props: ColumnsSectionProps = {
    bgColor: t("DiDiFleetDiDiMasPartnerColumns.bgColor"),
    textColor: t("DiDiFleetDiDiMasPartnerColumns.textColor"),
    columns: columns || t("DiDiFleetDiDiMasPartnerColumns.columns", { returnObjects: true }),
    title: title || t("DiDiFleetDiDiMasPartnerColumns.title"),
    desc: desc,
    categoriesID: categoriesID,
  };
  
  if (images!.length > 0) {
    props.columns.forEach((col) => {
      const image = images?.find((img) => img.title === col.imageName);
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

export default DiDiFleetDiDiMasPartnerColumns;
