import React from "react";
import { t } from "../../../../context/countryContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faCreditCard } from "@fortawesome/free-solid-svg-icons";
import ColumnsSection, { ColumnsSectionProps } from "../../../ColumnSection";

interface DiDiCreditColumnsProps {
  images: {
    title: string;
    description: string;
    gatsbyImageData: React.ReactNode;
  }[];
}

const DiDiCreditColumns = ({ images }: DiDiCreditColumnsProps) => {
  const props: ColumnsSectionProps = {
    title: t("DiDiCreditColumns.title"),
    desc: t("DiDiCreditColumns.desc"),
    bgColor: t("DiDiCreditColumns.bgColor"),
    textColor: t("DiDiCreditColumns.textColor"),
    columns: t("DiDiCreditColumns.columns", { returnObjects: true }),
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
        icon={faCalendar}
        size="2x"
        className="text-orange-primary"
      />
    );

    props.columns[1].image = (
      <FontAwesomeIcon
        icon={faCreditCard}
        size="2x"
        className="text-orange-primary"
      />
    );
  }
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default DiDiCreditColumns;
