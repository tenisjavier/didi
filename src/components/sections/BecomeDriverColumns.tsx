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

interface BecomeDriverColumnsProps {
  images: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  }[];
}

const BecomeDriverColumns = ({ images }: BecomeDriverColumnsProps) => {
  const props: ColumnsSectionProps = {
    bgColor: t("BecomeDriverColumns.bgColor"),
    textColor: t("BecomeDriverColumns.textColor"),
    columns: t("BecomeDriverColumns.columns", { returnObjects: true }),
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
  } else {
    props.columns[0].image = <FontAwesomeIcon icon={faQuoteRight} size="3x" />;

    props.columns[1].image = (
      <FontAwesomeIcon icon={faExclamationCircle} size="3x" />
    );

    props.columns[2].image = (
      <FontAwesomeIcon icon={faHeadphonesAlt} size="3x" />
    );
  }
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default BecomeDriverColumns;
