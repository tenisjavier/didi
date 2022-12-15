import React from "react";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import TopStory, { TopStoryProps } from "../TopStory";

interface ArticlesTopStoryProps {
    data: {
        title: string;
        slug: string;
        excerpt: string;
        topStory: string;
        featuredImage: ImageDataLike;
    };
}

const ArticlesTopStory = ({ data }: ArticlesTopStoryProps) => {
    const topStory = data;
    const link = t("ArticlesTopStory.btnLink", {article: data.slug});

    const props: TopStoryProps = {
        hero: false,
        title: topStory.title || t("ArticlesTopStory.title"),
        desc: topStory.excerpt || t("ArticlesTopStory.desc"),
        textColor: t("ArticlesTopStory.textColor"),
        btnMode: t("ArticlesTopStory.btnMode"),
        btnLink: link,
        btnText: t("ArticlesTopStory.btnText"),
        image: (
        <GatsbyImage
            image={getImage(topStory.featuredImage)!}
            alt={topStory.title}
            className="z-10 m-4 w-2/3"
        ></GatsbyImage>
        ),
    };
  return <TopStory {...props}></TopStory>;
};

export default ArticlesTopStory;
