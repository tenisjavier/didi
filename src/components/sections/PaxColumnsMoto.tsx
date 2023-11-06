import React from "react";
import { t } from "../../context/countryContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrafficLight,
  faMobileScreen,
  faUniversalAccess,
} from "@fortawesome/free-solid-svg-icons";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface PaxColumnsMotoProps {
  images: {
    title: string;
    description: string;
    gatsbyImageData: React.ReactNode;
  }[];
}

const PaxColumnsMoto = ({ images }: PaxColumnsMotoProps) => {
  const props: ColumnsSectionProps = {
    title: t("PaxColumnsMoto.title"),
    bgColor: t("PaxColumnsMoto.bgColor"),
    textColor: t("PaxColumnsMoto.textColor"),
    columns: t("PaxColumnsMoto.columns", { returnObjects: true }),
  };

  if (images) {
    props.columns.forEach((col, index) => {
      col.image = images[index];
      col.imageStyle = "z-10 m-4 w-48";
      col.isImage = true;
    });
  } else {
    props.columns[0].image = (
      <FontAwesomeIcon icon={faUniversalAccess} size="3x" className="w-12" />
    );

    props.columns[1].image = (
      <FontAwesomeIcon icon={faMobileScreen} size="3x" className="w-12" />
    );

    props.columns[2].image = (
      <FontAwesomeIcon icon={faTrafficLight} size="3x" className="w-12" />
    );
  }
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default PaxColumnsMoto;
