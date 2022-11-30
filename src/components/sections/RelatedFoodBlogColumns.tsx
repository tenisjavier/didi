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
      }[];
    };
  };
  tags?: { name: string }[];
}

const RelatedFoodBlogColumns = ({ data, tags }: FoodBlogColumns) => {
  const props: ColumnsSectionProps = {
    title: t("FoodBlogColumns.title"),
    bgColor: t("RelatedFoodBlogColumns.bgColor"),
    textColor: t("FoodBlogColumns.textColor"),
    columns: [],
  };

  const articles = data.allContentfulArticle.nodes;

  props.columns = articles.map((article) => {
    const link = t("FoodBlogColumns.linkItem", {
      article: article.slug,
    });
    return {
      title: <Link to={link}>{article.title}</Link>,
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

export default RelatedFoodBlogColumns;
