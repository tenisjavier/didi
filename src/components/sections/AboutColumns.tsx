// @desc Article Grid used for navigation
import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface AboutColumnsProps {
  images: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  }[];
}

const AboutColumns = ({ images }: AboutColumnsProps) => {
  const props: ColumnsSectionProps = {
    title: t("AboutColumns.title"),
    bgColor: t("AboutColumns.bgColor"),
    textColor: t("AboutColumns.textColor"),
    columns: t("AboutColumns.columns", { returnObjects: true }),
  };

  props.columns.forEach((col: any, index: number) => {
    const image = images[index].gatsbyImageData;
    col.image = (
      <Link to={col.linkItem}>
        <GatsbyImage
          image={image}
          alt={images[index].description}
          className="z-10 m-4 h-48"
        ></GatsbyImage>
      </Link>
    );
  });

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default AboutColumns;
