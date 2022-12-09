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

interface BusinessModelColumnsProps {
  images: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  }[];
}

const BusinessModelColumns = ({ images }: BusinessModelColumnsProps) => {
  const props: ColumnsSectionProps = {
    title: t("BusinessModelColumns.title"),
    bgColor: t("BusinessModelColumns.bgColor"),
    textColor: t("BusinessModelColumns.textColor"),
    columns: t("BusinessModelColumns.columns", { returnObjects: true }),
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

export default BusinessModelColumns;
