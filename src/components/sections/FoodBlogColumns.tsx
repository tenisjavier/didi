// @desc Article Grid used for navigation
import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface FoodBlogColumns {
  data: {
    allContentfulArticle: {
      nodes: {
        title: string;
        slug: string;
        tags?: { name: string }[];
        excerpt: string;
        featuredImage: ImageDataLike;
        feature: boolean;
      }[];
    };
  };
  tags?: { name: string }[];
}

const FoodBlogColumns = ({ data, tags }: FoodBlogColumns) => {
  const props: ColumnsSectionProps = {
    title: t("FoodBlogColumns.title"),
    bgColor: t("FoodBlogColumns.bgColor"),
    textColor: t("FoodBlogColumns.textColor"),
    columns: [],
  };

  const articles = data.allContentfulArticle.nodes;
  const trueFirst = articles.sort((a, b) => Number(b.feature) - Number(a.feature));

  props.columns = trueFirst.map((article) => {
    const link = t("FoodBlogColumns.linkItem", {
      article: article.slug,
    });
    return {
      title: <Link to={link}>{article.title}</Link>,
      desc: article.excerpt,
      textColor: "gray-primary",
      bgColor: "bg-white",
      image: (
        <Link to={link}>
          <GatsbyImage
            image={getImage(article.featuredImage)!}
            alt={article.title}
            className="z-10  m-4 h-56"
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
