import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ColumnsSection from "../ColumnSection";
const DeliveryColumns = ({ images, icons }) => {
  const { t } = useTranslation();
  const props = {
    bgColor: t("DeliveryColumns.bgColor"),
    textColor: t("DeliveryColumns.textColor"),
    columns: t("DeliveryColumns.columns", { returnObjects: true }),
  };

  if (images) {
    props.columns.forEach((col, index) => {
      const image = getImage(images[index]);
      col.image = (
        <GatsbyImage
          image={image}
          alt={images[index].description}
          width={300}
          height={300}
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
