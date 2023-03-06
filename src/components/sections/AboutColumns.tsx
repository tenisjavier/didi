// @desc Article Grid used for navigation
import React from "react";
import { Link } from "gatsby";
import Image from "../Image";
import { t } from "../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface AboutColumnsProps {
  images: {
    title: string;
    description: string;
    gatsbyImageData: React.ReactNode;
  }[];
}
//a
const AboutColumns = ({ images }: AboutColumnsProps) => {
  const props: ColumnsSectionProps = {
    title: t("AboutColumns.title"),
    bgColor: t("AboutColumns.bgColor"),
    textColor: t("AboutColumns.textColor"),
    columns: t("AboutColumns.columns", { returnObjects: true }),
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

export default AboutColumns;
