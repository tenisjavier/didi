import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faZap } from "@fortawesome/free-solid-svg-icons";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

console.log(typeof faZap);

interface DeliveryColumnsProps {
  images: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  }[];
  icons: any[];
}

const DeliveryColumns = ({ images, icons }: DeliveryColumnsProps) => {
  const { t } = useTranslation();
  const props: ColumnsSectionProps = {
    bgColor: t("DeliveryColumns.bgColor"),
    textColor: t("DeliveryColumns.textColor"),
    columns: t("DeliveryColumns.columns", { returnObjects: true }),
  };

  if (images) {
    props.columns.forEach((col, index) => {
      const image = images[index].gatsbyImageData;
      col.image = (
        <GatsbyImage
          image={image}
          alt={images[index].description}
          className="z-10 m-2 w-72"
        ></GatsbyImage>
      );
    });
  } else if (icons) {
    props.columns.forEach((col, index) => {
      col.image = <FontAwesomeIcon icon={icons[index]} size="3x" />;
    });
  }
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default DeliveryColumns;
