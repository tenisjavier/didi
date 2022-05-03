// @desc Article Grid used for navigation
import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import slugify from "react-slugify";
import ColumnsSection from "../ColumnSection";

const FoodBlogColumns = ({ data }) => {
  const { t } = useTranslation();
  const props = {
    title: t("FoodBlogColumns.title"),
    bgColor: t("FoodBlogColumns.bgColor"),
    textColor: t("FoodBlogColumns.textColor"),
  };

  const articles = data.allContentfulArticle.nodes;

  props.columns = articles.map((article) => {
    const link = t("FoodBlogColumns.linkItem", {
      article: slugify(article.title),
    });
    return {
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
      btnText: t("ArticlesColumns.btnText"),
      btnLink: link,
      btnMode: t("ArticlesColumns.btnMode"),
      height: "h-96",
    };
  });
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default FoodBlogColumns;
