import React from "react";
import { Link } from "gatsby";
import Image from "../Image"
import { t } from "../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface FoodAppDownloadsProps {
  images: {
    title: string;
    description: string;
    gatsbyImageData: React.ReactNode;
  }[];
}

const FoodAppDownloads = ({ images }: FoodAppDownloadsProps) => {
  const props: ColumnsSectionProps = {
    title: t("FoodAppDownloads.title"),
    desc: t("FoodAppDownloads.desc"),
    bgColor: t("FoodAppDownloads.bgColor"),
    textColor: t("FoodAppDownloads.textColor"),
    columns: t("FoodAppDownloads.columns", { returnObjects: true }),
  };

  console.log("Props Columns:", props.columns);

  if (props.columns) {
    props.columns.forEach((col: any, index: number) => {
      const image = images[index];
      col.image = (
        <Link to={col.linkItem}>
          <Image imageData={image} imageStyle="z-10 m-4"></Image>
        </Link>
      );
    });
  };

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default FoodAppDownloads;
