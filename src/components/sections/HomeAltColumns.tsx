import React from "react";
import { t } from "../../context/countryContext";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHalved,
  faNewspaper,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface HomeAltColumnsProps {
  images: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  }[];
}

const HomeAltColumns = ({ images }: HomeAltColumnsProps) => {
  const props: ColumnsSectionProps = {
    bgColor: t("HomeAltColumns.bgColor"),
    textColor: t("HomeAltColumns.textColor"),
    columns: t("HomeAltColumns.columns", { returnObjects: true }),
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
    props.columns[0].image = (
      <FontAwesomeIcon
        icon={faShieldHalved}
        size="3x"
        className="w-12 text-white"
      />
    );

    props.columns[1].image = (
      <FontAwesomeIcon
        icon={faNewspaper}
        size="3x"
        className="w-12 text-white"
      />
    );

    props.columns[2].image = (
      <FontAwesomeIcon
        icon={faQuestion}
        size="3x"
        className="w-12 text-white"
      />
    );
  }
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default HomeAltColumns;
