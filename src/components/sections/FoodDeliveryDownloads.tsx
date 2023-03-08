import React from "react";
import { Link } from "gatsby";
import Image from "../Image"
import { t } from "../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface FoodDeliveryDownloads {
  images: {
    title: string;
    description: string;
    gatsbyImageData: React.ReactNode;
  }[];
}

const FoodDeliveryDownloads = ({ images }: FoodDeliveryDownloads) => {
  const props: ColumnsSectionProps = {
    title: t("FoodDeliveryDownloads.title"),
    desc: t("FoodDeliveryDownloads.desc"),
    bgColor: t("FoodDeliveryDownloads.bgColor"),
    textColor: t("FoodDeliveryDownloads.textColor"),
    columns: t("FoodDeliveryDownloads.columns", { returnObjects: true }),
  };

  props.columns.forEach((col: any, index) => {
    const image = images[index];
    col.image = (
      <Link to={col.linkItem}>
        <Image imageData={image} imageStyle="z-10"></Image>
      </Link>
    );
  });

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default FoodDeliveryDownloads;
