import React from "react";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import { Link } from "gatsby";
import TopStory, { TopStoryProps } from "../TopStory";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";

interface ArticlesTSRaw {
  raw: string;
}

interface ArticlesTopStoryProps {
    data: {
        title: string;
        slug: string;
        excerpt: string;
        topStory: string;
        readTime: string;
        featuredImage: ImageDataLike;
        content: {raw: string;};
    }[];
}

const ArticlesTopStory = ({ data }: ArticlesTopStoryProps) => {
    const props: TopStoryProps = {
        title: t("ArticlesTopStory.title"),
        bgColor: t("ArticlesTopStory.bgColor"),
        textColor: t("ArticlesTopStory.textColor"),
        columns: [],
    };
    props.columns = data.map((ts, index) => {
        const timeToRead = () => {
          const dataTxt = JSON.parse(ts.content.raw);
          const allText = documentToPlainTextString(dataTxt);
          
          const readingSpeed = 250;
          return Math.ceil(Number(allText.length) / readingSpeed);
        }
        const link = t("ArticlesTopStory.btnLink", {
          article: ts.slug,
        });
        let imageContainer;

        if(index == 0) {
          imageContainer = <GatsbyImage
            image={getImage(ts.featuredImage)!}
              alt={ts.title}
              className="z-10 m-10 w-2/3"
          ></GatsbyImage>
        } else {
          imageContainer = <GatsbyImage
            image={getImage(ts.featuredImage)!}
              alt={ts.title}
              className="z-10 m-4 h-56"
          ></GatsbyImage>
        }

        return {
          title: <Link to={link}>{ts.title}</Link>,
          desc: ts.excerpt,
          timeToRead: ts.readTime || String(timeToRead()),
          textColor: "gray-primary",
          bgColor: "bg-white",
          image: imageContainer,
          btnText: t("ArticlesTopStory.btnText"),
          btnLink: link,
          btnMode: t("ArticlesTopStory.btnMode"),
        };
      });
  return <TopStory {...props}></TopStory>;
};

export default ArticlesTopStory;
