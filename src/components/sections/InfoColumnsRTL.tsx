import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHeadphones,
    faShield,
    faSliders
} from "@fortawesome/free-solid-svg-icons";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSectionRTL";

interface InfoColumnsProps {
  images: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  }[];
}

const InfoColumnsRTL = ({ images }: InfoColumnsProps) => {
  const { t } = useTranslation();
  const props: ColumnsSectionProps = {
    bgColor: t("InfoColumnsRTL.bgColor"),
    textColor: t("InfoColumnsRTL.textColor"),
    columns: t("InfoColumnsRTL.columns", { returnObjects: true }),
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
    props.columns[0].image = <FontAwesomeIcon icon={faSliders} size="3x" />;

    props.columns[1].image = (
      <FontAwesomeIcon icon={faShield} size="3x" />
    );

    props.columns[2].image = (
      <FontAwesomeIcon icon={faHeadphones} size="3x" />
    );
  }
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default InfoColumnsRTL;
