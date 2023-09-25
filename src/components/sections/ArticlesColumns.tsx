// @desc Article Grid used for navigation
import React from "react";
import { Link } from "gatsby";
import Image from "../Image"
import { t } from "../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import { Block } from "@contentful/rich-text-types";

interface ArticlesColumnsProps {
  data: {
    allContentfulArticle: {
      nodes: {
        title: string;
        slug: string;
        category: string;
        excerpt: string;
        readTime: string;
        featuredImage: any;
        content: { raw: string; };
      }[];
    };
  };
  height: string;
}

const ArticlesColumns = ({ data, height }: ArticlesColumnsProps) => {
  const props: ColumnsSectionProps = {
    title: t("ArticlesColumns.title"),
    bgColor: t("ArticlesColumns.bgColor"),
    textColor: t("ArticlesColumns.textColor"),
    columns: [],
  };

  const articles = data.allContentfulArticle.nodes;

  props.columns = articles.map((article) => {
    let dataTxt = {};
    if (article.category == "pr" && article.readTime == null) {
      const timeToRead = () => {
        try {
          if (article.content.raw) {
            dataTxt = JSON.parse(article.content.raw);
            const allText = documentToPlainTextString(dataTxt as Block);
            const readingSpeed = 250;
            return Math.ceil(Number(allText.length) / readingSpeed);
          }
        } catch (error) {
          console.error("Falha ao interpretar JSON:", error);
        }
        return 0;
      }

      article.readTime = String(timeToRead());
    }
    let link = t("ArticlesColumns.linkItem", {
      article: article.slug,
    });

    if (article?.category?.[0] === "prestamos") {
      link = t("PrestamosArticlesColumns.linkItem", {
        article: article.slug,
      });
    }

    return {
      title: <Link to={link}>{article.title}</Link>,
      desc: article.excerpt,
      timeToRead: article.readTime,
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
      height: height || "h-96",
    };
  });
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default ArticlesColumns;
