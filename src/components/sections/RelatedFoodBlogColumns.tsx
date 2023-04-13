// @desc Article Grid used for navigation
import React from "react";
import { Link } from "gatsby";
import Image from "../Image";
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

  const filteredArticles: any[] = [];
  const relatedArticles: any[] = [];

  // Find related articles that match the second tag or any tag after that
  articles.forEach((article) => {
    if (!article.tags) {
      return;
    }

    let secondTagIndex = tags && tags.length > 1 ? 1 : -1;

    for (let i = 2; i < tags!.length; i++) {
      if (article.tags.some((tag) => tag.name === tags![i].name)) {
        secondTagIndex = i;
        break;
      }
    }

    if (secondTagIndex !== -1) {
      const matchedTags = article.tags.filter(
        (tag) =>
          tag.name === tags![1].name ||
          tags!.slice(2).some((t) => t.name === tag.name)
      );

      filteredArticles.push({
        article,
        matchedTags,
      });
    }
  });

  // Sort the related articles by tag matches in descending order
  filteredArticles.sort(
    (a, b) => b.matchedTags.length - a.matchedTags.length
  );

  // Add related articles that only match the first tag to the end of the array
  articles.forEach((article) => {
    if (
      article.tags &&
      article.tags.some((tag) => tag.name === tags![0].name) &&
      !filteredArticles.some((fa) => fa.article.slug === article.slug)
    ) {
      filteredArticles.push({
        article,
        matchedTags: [tags![0]],
      });
    }
  });

  // Create the related article objects with the necessary information
  filteredArticles.forEach(({ article, matchedTags }) => {
    const link = t("FoodBlogColumns.linkItem", {
      article: article.slug,
    });

    const title = (
      <Link to={link}>
        {article.title}
      </Link>
    );

    const image = (
      <Link to={link}>
        <Image
          imageData={article.featuredImage}
          imageStyle="z-10 m-4 h-56"
        ></Image>
      </Link>
    );

    relatedArticles.push({
      title,
      textColor: "gray-primary",
      bgColor: "bg-white",
      image,
      btnText: t("ArticlesColumns.btnText"),
      btnLink: link,
      btnMode: t("ArticlesColumns.btnMode"),
      matchedTags,
    });
  });

  props.columns = relatedArticles;

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default RelatedFoodBlogColumns;