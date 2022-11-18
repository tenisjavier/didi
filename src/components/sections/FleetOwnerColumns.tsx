import React from "react";
import { t } from "../../context/countryContext";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faWallet, faLaptop } from "@fortawesome/free-solid-svg-icons";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface FleetOwnerColumnsProps {
  images: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  }[];
  icons: any[];
}

const FleetOwnerColumns = ({ images, icons }: FleetOwnerColumnsProps) => {
  const props: ColumnsSectionProps = {
    bgColor: t("FleetOwnerColumns.bgColor"),
    textColor: t("FleetOwnerColumns.textColor"),
    columns: t("FleetOwnerColumns.columns", { returnObjects: true }),
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
    props.columns[0].image = (
      <FontAwesomeIcon
        icon={faGlobe}
        size="3x"
        className="w-12 text-orange-primary"
      />
    );

    props.columns[1].image = (
      <FontAwesomeIcon
        icon={faWallet}
        size="3x"
        className="w-12 text-orange-primary"
      />
    );

    props.columns[2].image = (
      <FontAwesomeIcon
        icon={faLaptop}
        size="3x"
        className="w-12 text-orange-primary"
      />
    );
  }
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default FleetOwnerColumns;
