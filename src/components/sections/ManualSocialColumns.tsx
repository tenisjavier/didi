import React from "react";
import { t } from "../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface ManualSocialColumnsProps {
  images?: {
    title: string;
    description: string;
    gatsbyImageData: React.ReactNode;
  }[];
}

const ManualSocialColumns = ({ images }: ManualSocialColumnsProps) => {
  const props: ColumnsSectionProps = {
    bgColor: t("ManualSocialColumns.bgColor"),
    textColor: t("ManualSocialColumns.textColor"),
    columns: t("ManualSocialColumns.columns", { returnObjects: true }),
  };
  if (images) {
    props.columns.forEach((col, index) => {
      const image = images[index];
      col.image = image;
      col.imageStyle = "z-10 m-4 w-full";
      col.isImage = true;
    });
  }

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default ManualSocialColumns;
