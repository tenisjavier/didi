import React from "react";
import { t } from "../../context/countryContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudArrowDown,
  faIdCard,
  faCar,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface HomeColumnsProps {
  images: {
    title: string;
    description: string;
    gatsbyImageData: React.ReactNode;
  }[];
}

const FleetColumns = ({ images }: HomeColumnsProps) => {
  const props: ColumnsSectionProps = {
    bgColor: t("FleetColumns.bgColor"),
    textColor: t("FleetColumns.textColor"),
    columns: t("FleetColumns.columns", { returnObjects: true }),
  };

  if (images) {
    props.columns.forEach((col, index) => {
      col.image = images[index];
      col.imageStyle = "z-10 m-4 w-48";
      col.isImage = true;
    });
  } else {
    props.columns[0].isImage = false;
    props.columns[0].image = (
      <FontAwesomeIcon icon={faCloudArrowDown} size="5x" className="w-16" />
    );

    props.columns[1].isImage = false;
    props.columns[1].image = (
      <FontAwesomeIcon icon={faIdCard} size="5x" className="w-16" />
    );

    props.columns[2].isImage = false;
    props.columns[2].image = (
      <FontAwesomeIcon icon={faCar} size="5x" className="w-16" />
    );
    props.columns[3].isImage = false;
    props.columns[3].image = (
      <FontAwesomeIcon icon={faHandshake} size="5x" className="w-16" />
    );
  }
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default FleetColumns;
