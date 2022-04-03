// @desc Article Grid used for navigation
import React from "react";
import { Link } from "gatsby";
import ColumnsSection from "../ColumnSection";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import slugify from "react-slugify";

const ArticlesColumns = ({ data }) => {
  const articles = data.allContentfulArticle.nodes;
  const bgColor = "bg-blue-primary";
  const title = "DiDi Artículos de Lugares para Visitar";
  const textColor = "white";

  let columns = [];
  articles.forEach((article) => {
    const slug = slugify(article.title);
    const link = `/cl/articulos/${slug}`;
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
