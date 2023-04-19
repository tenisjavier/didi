import React from "react";
import { Link } from "gatsby";
import Image from "../Image";
import { t } from "../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface OffersGridProps {
  data: {
    name: string;
    desc: string;
    image: any;
    slug: string;
  }[];
}

const OffersGrid = ({ data }: OffersGridProps) => {
  const PropColumns = data.map((offer) => {
    const image = offer.image;
    const link = t("OffersGrid.linkItem", {
      offerSlug: offer.slug,
    });
    return {
      title: <Link to={link}>{offer.name}</Link>,
      desc: offer.desc,
      image: (
        <Link to={link}>
          <Image imageData={image} imageStyle="z-10 m-4 max-h-44"></Image>
        </Link>
      ),
      bgColor: "white",
      textColor: "gray-primary"
    };
  });

  const props: ColumnsSectionProps = {
    title: t("OffersGrid.title"),
    bgColor: t("OffersGrid.bgColor"),
    textColor: t("OffersGrid.textColor"),
    columns: PropColumns
  };

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default OffersGrid;