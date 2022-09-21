// @desc Article Grid used for navigation
import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import ColumnNoLimitSection, { ColumnsSectionProps } from "../ColumnNoLimitSection";

interface TaxAdviceColumnsProps {
  images: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  }[];
}

const TaxAdviceColumns = ({ images }: TaxAdviceColumnsProps) => {
  const { t } = useTranslation();
  const props: ColumnsSectionProps = {
    title: t("TaxAdviceColumns.title"),
    bgColor: t("TaxAdviceColumns.bgColor"),
    textColor: t("TaxAdviceColumns.textColor"),
    columns: t("TaxAdviceColumns.columns", { returnObjects: true }),
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

  return <ColumnNoLimitSection {...props}></ColumnNoLimitSection>;
};

export default TaxAdviceColumns;
