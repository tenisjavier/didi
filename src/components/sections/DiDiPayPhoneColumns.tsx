import React from "react";
import { t } from "../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface DiDiPayPhoneColumnsProps {
  images?: {
    title: string;
    description: string;
    gatsbyImageData: React.ReactNode;
  }[];
}

const DiDiPayPhoneColumns = ({ images }: DiDiPayPhoneColumnsProps) => {
  const props: ColumnsSectionProps = {
    title: t("DiDiPayPhoneColumns.title"),
    desc: t("DiDiPayPhoneColumns.desc"),
    bgColor: t("DiDiPayPhoneColumns.bgColor"),
    textColor: t("DiDiPayPhoneColumns.textColor"),
    columns: t("DiDiPayPhoneColumns.columns", { returnObjects: true }),
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

export default DiDiPayPhoneColumns;
