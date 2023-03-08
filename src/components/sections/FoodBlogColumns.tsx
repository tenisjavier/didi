// @desc Article Grid used for navigation
import React from "react";
import { Link } from "gatsby";
import Image from "../Image"
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
        featuredImage: any;
        feature: boolean;
      }[];
    };
  };
  tags?: { name: string }[];
}

const FoodBlogColumns = ({ data }: FoodBlogColumns) => {
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
          <Image imageData={article.featuredImage} imageStyle="z-10 m-4 h-56"></Image>
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
