// @desc Article Grid used for navigation
import React from "react";
import { Link } from "gatsby";
import Image from "../Image"
import { t } from "../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface DiDiPayBlogColumnsProps {
  data: {
    allContentfulArticle: {
      nodes: {
        title: string;
        slug: string;
        excerpt: string;
        featuredImage: any;
      }[];
    };
  };
}

const FoodBlogColumns = ({ data }: DiDiPayBlogColumnsProps) => {
  const props: ColumnsSectionProps = {
    title: t("DiDiPayBlogColumns.title"),
    bgColor: t("DiDiPayBlogColumns.bgColor"),
    textColor: t("DiDiPayBlogColumns.textColor"),
    columns: [],
  };

  const articles = data.allContentfulArticle.nodes;

  props.columns = articles.map((article) => {
    const link = t("DiDiPayBlogColumns.linkItem", {
      article: article.slug,
    });
    return {
      title: <Link to={link}>{article.title}</Link>,
      desc: article.excerpt,
      textColor: "gray-primary",
      bgColor: "bg-white",
      image: (
        <Link to={link}>
          <Image imageData={article.featuredImage} imageStyle="z-10 m-4"></Image>
        </Link>
      ),
      btnText: t("DiDiPayBlogColumns.btnText"),
      btnLink: link,
      btnMode: t("DiDiPayBlogColumns.btnMode"),
      height: "h-96",
    };
  });
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default FoodBlogColumns;
