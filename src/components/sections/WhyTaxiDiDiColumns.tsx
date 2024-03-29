import React from "react";
import { t } from "../../context/countryContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFastForward,
  faLock,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface WhyTaxiDiDiColumnsProps {
  images?: {
    title: string;
    description: string;
    gatsbyImageData: React.ReactNode;
  }[];
  icons: any[];
}

const WhyTaxiDiDiColumns = ({ images, icons }: WhyTaxiDiDiColumnsProps) => {
  const props: ColumnsSectionProps = {
    bgColor: t("WhyTaxiDiDiColumns.bgColor"),
    textColor: t("WhyTaxiDiDiColumns.textColor"),
    columns: t("WhyTaxiDiDiColumns.columns", { returnObjects: true }),
  };
  if (images) {
    props.columns.forEach((col, index) => {
      col.image = images[index];
      col.imageStyle = "z-10 m-4 w-48";
      col.isImage = true;
    });
  } else if (icons) {
    props.columns.forEach((col, index) => {
      col.image = <FontAwesomeIcon icon={icons[index]} size="3x" />;
    });
  } else {
    props.columns[0].image = (
      <FontAwesomeIcon
        className="text-orange-primary"
        icon={faFastForward}
        size="3x"
      />
    );

    props.columns[1].image = (
      <FontAwesomeIcon
        className="text-orange-primary"
        icon={faLock}
        size="3x"
      />
    );

    props.columns[2].image = (
      <FontAwesomeIcon
        className="text-orange-primary"
        icon={faClock}
        size="3x"
      />
    );
  }
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default WhyTaxiDiDiColumns;
