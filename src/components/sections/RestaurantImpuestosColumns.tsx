import React from "react";
import { t } from "../../context/countryContext";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteRight,
  faExclamationCircle,
  faHeadphonesAlt,
} from "@fortawesome/free-solid-svg-icons";
import OneColumnsSection, { OneColumnsSectionProps } from "../OneColumnSection";

interface RestaurantImpuestosColumnsProps {
  images?: {
    title: string;
    description: string;
    gatsbyImageData: React.ReactNode;
  }[];
}

const RestaurantImpuestosColumns = ({
  images,
}: RestaurantImpuestosColumnsProps) => {
  const props: OneColumnsSectionProps = {
    bgColor: t("RestaurantImpuestosColumns.bgColor"),
    textColor: t("RestaurantImpuestosColumns.textColor"),
    columns: t("RestaurantImpuestosColumns.columns", { returnObjects: true }),
  };

  if (images) {
    props.columns.forEach((col, index) => {
      const image = images[index].gatsbyImageData;
      col.image = (
        <GatsbyImage
          image={image}
          alt={images[index].description}
          className="z-10 m-4 w-full"
        ></GatsbyImage>
      );
    });
  } else {
    props.columns[0].image = (
      <FontAwesomeIcon icon={faQuoteRight} size="3x" className="w-12" />
    );

    props.columns[1].image = (
      <FontAwesomeIcon icon={faExclamationCircle} size="3x" className="w-12" />
    );

    props.columns[2].image = (
      <FontAwesomeIcon icon={faHeadphonesAlt} size="3x" className="w-12" />
    );
  }
  return <OneColumnsSection {...props}></OneColumnsSection>;
};

export default RestaurantImpuestosColumns;
