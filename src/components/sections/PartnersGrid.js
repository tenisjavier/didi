import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import ColumnsSection from "../ColumnSection";

const PartnersGrid = ({ data, title, bgColor, textColor, sectionID }) => {
  const props = {
    title: title || t("PartnersGrid.title"),
    bgColor: bgColor || t("PartnersGrid.bgColor"),
    textColor: textColor || t("PartnersGrid.textColor"),
    sectionID: sectionID || t("PartnersGrid.sectionId"),
  };

  props.columns = data.map((partner) => {
    const image = getImage(partner.logo);
    const link = t("PartnersGrid.linkItem", {
      partnerName: partner.slug,
    });
    return {
      title: <Link to={link}>{partner.name}</Link>,
      desc: partner.desc,
      height: "48",
      image: (
        <Link to={link}>
          <GatsbyImage
            image={image}
            alt={partner.logo.description}
            className="z-10 m-4"
          ></GatsbyImage>
        </Link>
      ),
    };
  });

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default PartnersGrid;
