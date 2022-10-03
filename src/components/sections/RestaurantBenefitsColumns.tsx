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

interface RestaurantBenefitsColumnsProps {
  images: {
    title: string;
    description: string;
  }[];
}

const RestaurantBenefitsColumns = ({}: RestaurantBenefitsColumnsProps) => {
  const { t } = useTranslation();
  const props: ColumnsSectionProps = {
    bgColor: t("RestaurantBenefitsColumns.bgColor"),
    textColor: t("RestaurantBenefitsColumns.textColor"),
    columns: t("RestaurantBenefitsColumns.columns", { returnObjects: true }),
  };

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default RestaurantBenefitsColumns;
