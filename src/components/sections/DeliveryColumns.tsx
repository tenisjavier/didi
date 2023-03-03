import React from "react";
import { t } from "../../context/countryContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface DeliveryColumnsProps {
  images?: {
    title: string;
    description: string;
    gatsbyImageData: React.ReactNode;
  }[];
  icons: any[];
}

const DeliveryColumns = ({ images, icons }: DeliveryColumnsProps) => {
  const props: ColumnsSectionProps = {
    bgColor: t("DeliveryColumns.bgColor"),
    textColor: t("DeliveryColumns.textColor"),
    columns: t("DeliveryColumns.columns", { returnObjects: true }),
  };

  if (images) {
    props.columns.forEach((col, index) => {
      col.imageStyle = "z-10 m-2 w-72";
      col.isImage = true;
      col.image = images[index];
    });

    
  } else if (icons) {
    props.columns.forEach((col, index) => {
      col.image = <FontAwesomeIcon icon={icons[index]} size="3x" />;
    });
  }
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default DeliveryColumns;
