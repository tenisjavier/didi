// @desc Article Grid used for navigation
import React from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { getCountryCodeFromUrl } from "../../../config/countries-config";
import ColumnsSection from "../ColumnSection";
import slugify from "react-slugify";

const ArticlesColumns = ({ data }) => {
  const { t } = useTranslation();
  const title = t("ArticlesColumns.title");
  const bgColor = t("ArticlesColumns.bgColor");
  const textColor = t("ArticlesColumns.textColor");
  const { pathname } = useLocation();
  const countryCode = getCountryCodeFromUrl(pathname);
  const articles = data.allContentfulArticle.nodes;

  let columns = [];
  articles.forEach((article) => {
    const slug = slugify(article.title);
    const link = `/${countryCode}/articulos/${slug}`;
    columns.push({
      title: <Link to={link}>{article.title}</Link>,
      desc: article.excerpt,
      textColor: "gray-primary",
      bgColor: "bg-white",
      image: (
        <Link to={link}>
          <GatsbyImage
            image={getImage(article.featuredImage)}
            alt={article.title}
            width={700}
            height={700}
            className="z-10  m-4"
          ></GatsbyImage>
        </Link>
      ),
      btnText: "Leer Artículo",
      btnLink: link,
      btnMode: "dark",
      height: "h-96",
    });
  });
  return (
    <ColumnsSection
      columns={columns}
      bgColor={bgColor}
      title={title}
      textColor={textColor}
    ></ColumnsSection>
  );
};

export default ArticlesColumns;
