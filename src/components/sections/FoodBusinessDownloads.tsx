import React from "react";
import { Link } from "gatsby";
import Image, { ImageDataType } from "../Image"
import { t } from "../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface FoodBusinessDownloadsProps {
  images: ImageDataType[];
}

const FoodBusinessDownloads = ({ images }: FoodBusinessDownloadsProps) => {
  const props: ColumnsSectionProps = {
    title: t("FoodBusinessDownloads.title"),
    desc: t("FoodBusinessDownloads.desc"),
    bgColor: t("FoodBusinessDownloads.bgColor"),
    textColor: t("FoodBusinessDownloads.textColor"),
    columns: t("FoodBusinessDownloads.columns", { returnObjects: true }),
  };

  props.columns.forEach((col: any, index: number) => {
    const image = images[index];
    col.image = (
      <Link to={col.linkItem}>
        <Image imageData={image} imageStyle="z-10"></Image>
      </Link>
    );
  });

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default FoodBusinessDownloads;
