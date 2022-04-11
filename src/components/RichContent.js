import React from "react";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
  },
  renderNode: {
    [BLOCKS.HEADING_1]: (node, children) => (
      <h1 className={"my-14 text-center text-3xl font-bold"}>{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <h1 className={"my-12 text-2xl font-bold"}>{children}</h1>
    ),
    [BLOCKS.PARAGRAPH]: (node, children) => <p className={""}>{children}</p>,
    [INLINES.HYPERLINK]: (node, children) => {
      return (
        <a className="text-orange-primary" href={node.data.uri}>
          {children}
        </a>
      );
    },
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { gatsbyImageData, title } = node.data.target;
      return (
        <div className="my-12 flex w-full justify-center">
          <GatsbyImage
            className=" max-w-xl"
            image={getImage(gatsbyImageData)}
            alt={title}
          ></GatsbyImage>
        </div>
      );
    },
  },
};

const RichContent = ({ richContent }) => {
  return renderRichText(richContent, options);
};

export default RichContent;
