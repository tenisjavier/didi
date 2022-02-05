import React from "react";
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import { Link } from "gatsby";
const ArticleCard = ({ article }) => {
  const dirtyExcerpt = article.excerpt.replace(/\n|\r/g, "");
  const dirtyExcerpt1 = dirtyExcerpt.replace(/\[[^\]]*\]/g, "");
  const dirtyExcerpt2 = dirtyExcerpt1.replace("</p>", " ...</p>");
  const cleanExcerpt = DOMPurify.sanitize(dirtyExcerpt2, {
    USE_PROFILES: { html: true },
  });
  return (
    <Link to={article.slug} className="group">
      <div
        className="h-110 border-1 lg:w-100 mb-12 w-10/12 cursor-pointer border-solid border-gray-500 transition
        duration-150 hover:-translate-y-3 hover:shadow-xl"
      >
        <img
          src={article.featuredImage.node.mediaItemUrl}
          className="h-2/5 w-full object-cover"
          alt="article"
        />
        <div className="p-3">
          <h1 className="group-hover:text-orange-primary cursor-pointer transition duration-150">
            {article.title}
          </h1>
          <p>{parse(cleanExcerpt)}</p>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
