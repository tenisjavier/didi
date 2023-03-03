import React from "react";
import { t } from "../../context/countryContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faSquarePollVertical,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface WhyDrvPartnerDiDiColumnsProps {
  images?: {
    title: string;
    description: string;
    gatsbyImageData: React.ReactNode;
  }[];
  icons: any[];
}

const WhyDrvPartnerDiDiColumns = ({
  images,
  icons,
}: WhyDrvPartnerDiDiColumnsProps) => {
  const props: ColumnsSectionProps = {
    title: t("WhyDrvPartnerDiDiColumns.title"),
    bgColor: t("WhyDrvPartnerDiDiColumns.bgColor"),
    textColor: t("WhyDrvPartnerDiDiColumns.textColor"),
    columns: t("WhyDrvPartnerDiDiColumns.columns", { returnObjects: true }),
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
        icon={faUsers}
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
        icon={faPhone}
        size="3x"
      />
    );
  }
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default WhyDrvPartnerDiDiColumns;
