import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserShield,
  faDollarSign,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface FoodSafetyColumnsProps {
  images: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  }[];
  icons: any[];
}

const FoodSafetyColumns = ({ images, icons }: FoodSafetyColumnsProps) => {
  const { t } = useTranslation();
  const props: ColumnsSectionProps = {
    bgColor: t("FoodSafetyColumns.bgColor"),
    textColor: t("FoodSafetyColumns.textColor"),
    columns: t("FoodSafetyColumns.columns", { returnObjects: true }),
    small: t("FoodSafetyColumns.small")
  };
  if (images) {
    props.columns.forEach((col, index) => {
        if(col.image != false) {
            const image = images[index].gatsbyImageData;
            col.image = (
                <GatsbyImage
                image={image}
                alt={images[index].description}
                className="z-10 m-2 w-56"
                ></GatsbyImage>
            );
        } 
      
    });
  } else if (icons) {
    props.columns.forEach((col, index) => {
      col.image = (
        <FontAwesomeIcon icon={icons[index]} size="3x" className="w-12" />
      );
    });
  } else {
    props.columns[0].image = (
      <FontAwesomeIcon icon={faUserShield} size="3x" className="w-12" />
    );

    props.columns[1].image = (
      <FontAwesomeIcon icon={faDollarSign} size="3x" className="w-12" />
    );

    props.columns[2].image = (
      <FontAwesomeIcon icon={faClock} size="3x" className="w-12" />
    );
  }
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default FoodSafetyColumns;
