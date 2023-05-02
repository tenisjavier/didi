import React from "react";
import { t } from "../../context/countryContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPercentage,
  faKey,
  faDollar,
  faBoxesStacked,
  faMotorcycle,
  faLaptop,
} from "@fortawesome/free-solid-svg-icons";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface EntregaGridProps {
  images: {
    title: string;
    description: string;
    gatsbyImageData: React.ReactNode;
  }[];
}

const EntregaGrid = ({ images }: EntregaGridProps) => {
  const props: ColumnsSectionProps = {
    bgColor: t("EntregaGrid.bgColor"),
    textColor: t("EntregaGrid.textColor"),
    columns: t("EntregaGrid.columns", { returnObjects: true }),
  };

  if (images) {
    props.columns.forEach((col, index) => {
      const image = images[index];
      col.image = image;
      col.imageStyle = "z-10 m-4";
      col.isImage = true;
    });
  } else {
    props.columns[0].image = (
      <FontAwesomeIcon icon={faPercentage} size="3x" className="w-12" />
    );

    props.columns[1].image = (
      <FontAwesomeIcon icon={faKey} size="3x" className="w-12" />
    );

    props.columns[2].image = (
      <FontAwesomeIcon icon={faDollar} size="3x" className="w-12" />
    );
    props.columns[3].image = (
      <FontAwesomeIcon icon={faBoxesStacked} size="3x" className="w-12" />
    );

    props.columns[4].image = (
      <FontAwesomeIcon icon={faMotorcycle} size="3x" className="w-12" />
    );

    props.columns[5].image = (
      <FontAwesomeIcon icon={faLaptop} size="3x" className="w-12" />
    );
  }
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default EntregaGrid;
