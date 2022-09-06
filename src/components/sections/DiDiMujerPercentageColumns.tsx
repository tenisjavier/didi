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

interface DiDiMujerPercentageColumnsProps {
  images: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  }[];
}

const DiDiMujerPercentageColumns = ({ images }: DiDiMujerPercentageColumnsProps) => {
  const { t } = useTranslation();
  const props: ColumnsSectionProps = {
    bgColor: t("DiDiMujerPercentageColumns.bgColor"),
    textColor: t("DiDiMujerPercentageColumns.textColor"),
    columns: t("DiDiMujerPercentageColumns.columns", { returnObjects: true }),
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
    props.columns[0].image = <FontAwesomeIcon icon={faUserShield} size="3x" />;

    props.columns[1].image = <FontAwesomeIcon icon={faDollarSign} size="3x" />;

    props.columns[2].image = <FontAwesomeIcon icon={faClock} size="3x" />;
  }
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default DiDiMujerPercentageColumns;
