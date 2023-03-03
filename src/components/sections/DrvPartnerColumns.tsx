import React from "react";
import { t } from "../../context/countryContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faSquarePollVertical,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface DrvPartnerColumnsProps {
  images?: {
    title: string;
    description: string;
    gatsbyImageData: React.ReactNode;
  }[];
  icons: any[];
}

const DrvPartnerColumns = ({ images, icons }: DrvPartnerColumnsProps) => {
  const props: ColumnsSectionProps = {
    bgColor: t("DrvPartnerColumns.bgColor"),
    textColor: t("DrvPartnerColumns.textColor"),
    columns: t("DrvPartnerColumns.columns", { returnObjects: true }),
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
        icon={faDollarSign}
        size="3x"
      />
    );

    props.columns[1].image = (
      <FontAwesomeIcon
        className="text-orange-primary"
        icon={faSquarePollVertical}
        size="3x"
      />
    );

    props.columns[2].image = (
      <FontAwesomeIcon
        className="text-orange-primary"
        icon={faWallet}
        size="3x"
      />
    );
  }
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default DrvPartnerColumns;
