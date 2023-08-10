// @desc Article Grid used for navigation
import React from "react";
import { Link } from "gatsby";
import Image from "../Image"
import { t } from "../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface DiDiPrestamosBlogColumnsProps {
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

const DiDiPrestamosBlogColumns = ({ data }: DiDiPrestamosBlogColumnsProps) => {
  const props: ColumnsSectionProps = {
    title: t("DiDiPrestamosBlogColumns.title"),
    bgColor: t("DiDiPrestamosBlogColumns.bgColor"),
    textColor: t("DiDiPrestamosBlogColumns.textColor"),
    columns: [],
  };

  const articles = data.allContentfulArticle.nodes;
  //? Precisa alterar após popular artigos com a categoria "prestamos" (Alterar para usar o link de DiDiPrestamosBlogColumns.linkItem)
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
      btnText: t("DiDiPrestamosBlogColumns.btnText"),
      btnLink: link,
      btnMode: t("DiDiPrestamosBlogColumns.btnMode"),
      height: "h-96",
    };
  });
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default DiDiPrestamosBlogColumns;
