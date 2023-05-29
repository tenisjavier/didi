import React from "react";
import { t } from "../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface DiDiPayGiftcardColumnsProps {
  images?: {
    title: string;
    description: string;
    gatsbyImageData: React.ReactNode;
  }[];
}

const DiDiPayGiftcardColumns = ({ images }: DiDiPayGiftcardColumnsProps) => {
  const props: ColumnsSectionProps = {
    title: t("DiDiPayGiftcardColumns.title"),
    desc: t("DiDiPayGiftcardColumns.desc"),
    bgColor: t("DiDiPayGiftcardColumns.bgColor"),
    textColor: t("DiDiPayGiftcardColumns.textColor"),
    columns: t("DiDiPayGiftcardColumns.columns", { returnObjects: true }),
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

export default DiDiPayGiftcardColumns;
