import React from "react";
import { Link } from "gatsby";
import Image from "../Image"
import { t } from "../../context/countryContext";
import ColumnsSection from "../ColumnSection";

const OffersGrid = ({ data }) => {
  const props = {
    title: t("OffersGrid.title"),
    bgColor: t("OffersGrid.bgColor"),
    textColor: t("OffersGrid.textColor"),
  };

  props.columns = data.map((offer) => {
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
    };
  });

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default OffersGrid;
