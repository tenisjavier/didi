import React from "react";
import { t } from "../../context/countryContext";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserShield,
  faDollarSign,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface RestaurantBenefitsColumnsProps {
  images?: {
    title: string;
    description: string;
    gatsbyImageData: React.ReactNode;
  }[];
}

const RestaurantBenefitsColumns = ({
  images,
}: RestaurantBenefitsColumnsProps) => {
  const props: ColumnsSectionProps = {
    bgColor: t("RestaurantBenefitsUnirColumns.bgColor"),
    textColor: t("RestaurantBenefitsUnirColumns.textColor"),
    columns: t("RestaurantBenefitsUnirColumns.columns", {
      returnObjects: true,
    }),
  };
  if (images) {
    props.columns.forEach((col, index) => {
      col.image = images[index];
      col.imageStyle = "z-10 m-4 w-48";
      col.isImage = true;
    });
  }

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default RestaurantBenefitsColumns;
