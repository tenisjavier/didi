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

interface DiDiAmigoColumnsProps {
  images: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  }[];
  icons: any[];
}

const DiDiAmigoColumns = ({ images, icons }: DiDiAmigoColumnsProps) => {
  const props: ColumnsSectionProps = {
    title: t("DiDiAmigoColumns.title"),
    bgColor: t("DiDiAmigoColumns.bgColor"),
    textColor: t("DiDiAmigoColumns.textColor"),
    columns: t("DiDiAmigoColumns.columns", { returnObjects: true }),
  };
  if (images) {
    console.log(props);
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

export default DiDiAmigoColumns;
