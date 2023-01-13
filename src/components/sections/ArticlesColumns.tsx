// @desc Article Grid used for navigation
import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";

interface ArticlesColumnsProps {
  data: {
    allContentfulArticle: {
      nodes: {
        title: string;
        slug: string;
        category: string;
        excerpt: string;
        readTime: string;
        featuredImage: ImageDataLike;
        content: {raw: string;};
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
    if(article.category == "pr" && article.readTime == null ) {
      const timeToRead = () => {
        const dataTxt = JSON.parse(article.content.raw);
        const allText = documentToPlainTextString(dataTxt);
        
        const readingSpeed = 250;
        return Math.ceil(Number(allText.length) / readingSpeed);
      }

      article.readTime = String(timeToRead());
    }
    const link = t("ArticlesColumns.linkItem", {
      article: article.slug,
    });
    return {
      title: <Link to={link}>{article.title}</Link>,
      desc: article.excerpt,
      timeToRead: article.readTime,
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
      height: height || "h-96",
    };
  });
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default ArticlesColumns;
