
import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faSquarePollVertical,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface WhyDrvPartnerDiDiColumnsProps {
  images: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  }[];
  icons: any[];
}

const WhyDrvPartnerDiDiColumns = ({ images, icons }: WhyDrvPartnerDiDiColumnsProps) => {
  const { t } = useTranslation();
  const props: ColumnsSectionProps = {
    title: t("WhyDrvPartnerDiDiColumns.title"),
    bgColor: t("WhyDrvPartnerDiDiColumns.bgColor"),
    textColor: t("WhyDrvPartnerDiDiColumns.textColor"),
    columns: t("WhyDrvPartnerDiDiColumns.columns", { returnObjects: true }),
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
  } else if (icons) {
    props.columns.forEach((col, index) => {
      col.image = <FontAwesomeIcon icon={icons[index]} size="3x" />;
    });
  } else {
    props.columns[0].image = <FontAwesomeIcon className="text-orange-primary" icon={faUsers} size="3x" />;

    props.columns[1].image = <FontAwesomeIcon className="text-orange-primary" icon={faSquarePollVertical} size="3x" />;

    props.columns[2].image = <FontAwesomeIcon className="text-orange-primary" icon={faPhone} size="3x" />;
  }
  return <ColumnsSection {...props}></ColumnsSection>;
};


export default WhyDrvPartnerDiDiColumns;

