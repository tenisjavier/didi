import React from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import slugify from "react-slugify";
import { getCountryCodeFromUrl } from "../../../config/countries-config";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import ColumnsSection from "../ColumnSection";

const DiDiMasGrid = ({ data }) => {
  const { pathname } = useLocation();
  const countryCode = getCountryCodeFromUrl(pathname);
  const { t } = useTranslation();
  const props = {
    title: t("DiDiMasGrid.title"),
    bgColor: t("DiDiMasGrid.bgColor"),
    textColor: t("DiDiMasGrid.textColor"),
  };

  const columns = [];
  data.forEach((partner) => {
    const image = getImage(partner.logo);
    columns.push({
      title: (
        <Link to={`/${countryCode}/didimas/${slugify(partner.name)}/`}>
          {partner.name}
        </Link>
      ),
      desc: partner.desc,
      image: (
        <Link to={`/${countryCode}/didimas/${slugify(partner.name)}/`}>
          <GatsbyImage
            image={image}
            alt={image.description}
            width={700}
            height={700}
            className="z-10 m-4"
          ></GatsbyImage>
        </Link>
      ),
    });
  });
  props.columns = columns;
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default DiDiMasGrid;
