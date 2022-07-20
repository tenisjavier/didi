import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import ColumnsSection from "../ColumnSection";

const OffersGrid = ({ data }) => {
  const { t } = useTranslation();
  const props = {
    title: t("OffersGrid.title"),
    bgColor: t("OffersGrid.bgColor"),
    textColor: t("OffersGrid.textColor"),
  };

  props.columns = data.map((offer) => {
    const image = getImage(offer.image);
    const link = t("OffersGrid.linkItem", {
      offerSlug: offer.slug,
    });
    return {
      title: <Link to={link}>{offer.name}</Link>,
      desc: offer.desc,
      image: (
        <Link to={link}>
          <GatsbyImage
            image={image}
            alt={offer.image.description}
            width={700}
            height={700}
            className="z-10 m-4 max-h-44"
          ></GatsbyImage>
        </Link>
      ),
    };
  });

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default OffersGrid;
