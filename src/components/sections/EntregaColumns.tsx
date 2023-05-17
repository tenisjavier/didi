// @desc Article Grid used for navigation
import React from "react";
import { Link } from "gatsby";
import Image from "../Image";
import { t } from "../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface EntregaColumnsProps {
  images: {
    title: string;
    description: string;
    gatsbyImageData: React.ReactNode;
  }[];
}
const EntregaColumns = ({ images }: EntregaColumnsProps) => {
  const props: ColumnsSectionProps = {
    title: t("EntregaColumns.title"),
    bgColor: t("EntregaColumns.bgColor"),
    textColor: t("EntregaColumns.textColor"),
    columns: t("EntregaColumns.columns", { returnObjects: true }),
  };

  props.columns.forEach((col: any, index: number) => {
    col.imageStyle = "z-10 m-4 w-48";
    col.isImage = false;
    col.image = (
      <Link to={col.linkItem}>
        <Image imageData={images[index]} imageStyle={col.imageStyle}></Image>
      </Link>
    );
  });

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default EntregaColumns;
