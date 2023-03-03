import React from "react";
import { t } from "../../context/countryContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface DiDiPayEnterpriseColumnsProps {
  images?: {
    title: string;
    description: string;
    gatsbyImageData: React.ReactNode;
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
      col.image = images[index];
      col.imageStyle = "z-10 m-4 w-48";
      col.isImage = true;
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
