// @desc Article Grid used for navigation
import React from "react";
import { Link } from "gatsby";
import Image from "../Image"
import { t } from "../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface NewsroomColumnsProps {
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

const ArticlesColumns = ({ data }: NewsroomColumnsProps) => {
  const props: ColumnsSectionProps = {
    title: t("NewsroomColumns.title"),
    bgColor: t("NewsroomColumns.bgColor"),
    textColor: t("NewsroomColumns.textColor"),
    columns: [],
  };

  const articles = data.allContentfulArticle.nodes;

  props.columns = articles.map((article) => {
    const link = t("NewsroomColumns.linkItem", {
      article: article.slug,
    });
    return {
      title: <Link to={link}>{article.title}</Link>,
      desc: article.excerpt,
      textColor: "gray-primary",
      bgColor: "bg-white",
      image: (
        <Link to={link}>
          <Image imageData={article.featuredImage} imageStyle="z-10"></Image>
        </Link>
      ),
      btnText: t("NewsroomColumns.btnText"),
      btnLink: link,
      btnMode: t("NewsroomColumns.btnMode"),
      height: "h-96",
    };
  });
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default ArticlesColumns;
