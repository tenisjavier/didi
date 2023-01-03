import React from "react";
import { t } from "../../context/countryContext";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteRight,
  faExclamationCircle,
  faHeadphonesAlt,
} from "@fortawesome/free-solid-svg-icons";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface ArticleOfferColumnsProps {
  images: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  }[];
}

const ArticleOfferColumns = ({ images }: ArticleOfferColumnsProps) => {
  const props: ColumnsSectionProps = {
    title: t("ArticleOfferColumns.title"),
    desc: t("ArticleOfferColumns.desc"),
    bgColor: t("ArticleOfferColumns.bgColor"),
    textColor: t("ArticleOfferColumns.textColor"),
    columns: t("ArticleOfferColumns.columns", { returnObjects: true }),
  };

  if (images) {
    props.columns.forEach((col, index) => {
      const image = images[index].gatsbyImageData;
      col.image = (
        <GatsbyImage
          image={image}
          alt={images[index].description}
          className="z-10 m-4 w-48"
        ></GatsbyImage>
      );
    });
  }
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default ArticleOfferColumns;
