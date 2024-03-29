import React from "react";
import { t } from "../../context/countryContext";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWallet,
  faCreditCard,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface PaxAltColumnsProps {
  images?: {
    title: string;
    description: string;
    gatsbyImageData: React.ReactNode;
  }[];
}

const PaxAltColumns = ({ images }: PaxAltColumnsProps) => {
  const props: ColumnsSectionProps = {
    bgColor: t("PaxAltColumns.bgColor"),
    textColor: t("PaxAltColumns.textColor"),
    columns: t("PaxAltColumns.columns", { returnObjects: true }),
  };

  if (images) {
    props.columns.forEach((col, index) => {
      col.image = images[index];
      col.imageStyle = "z-10 m-4 w-48";
      col.isImage = true;
    });
  } else {
    props.columns[0].image = (
      <FontAwesomeIcon
        icon={faWallet}
        size="3x"
        className="text-orange-primary w-12"
      />
    );

    props.columns[1].image = (
      <FontAwesomeIcon
        icon={faCreditCard}
        size="3x"
        className="text-orange-primary w-12"
      />
    );

    props.columns[2].image = (
      <FontAwesomeIcon
        icon={faMapMarker}
        size="3x"
        className="text-orange-primary w-12"
      />
    );
  }
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default PaxAltColumns;
