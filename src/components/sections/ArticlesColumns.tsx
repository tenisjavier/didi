// @desc Article Grid used for navigation
import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface ArticlesColumnsProps {
  data: {
    allContentfulArticle: {
      nodes: {
        title: string;
        slug: string;
        excerpt: string;
        featuredImage: ImageDataLike;
      }[];
    };
  };
}

const ArticlesColumns = ({ data }: ArticlesColumnsProps) => {
  const { t } = useTranslation();
  const props: ColumnsSectionProps = {
    title: t("ArticlesColumns.title"),
    bgColor: t("ArticlesColumns.bgColor"),
    textColor: t("ArticlesColumns.textColor"),
    columns: [],
  };

  const articles = data.allContentfulArticle.nodes;

  props.columns = articles.map((article) => {
    const link = t("ArticlesColumns.linkItem", {
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

export default ArticlesColumns;
