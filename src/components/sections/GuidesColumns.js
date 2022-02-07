import React from "react";
import { Link } from "gatsby";
import ColumnsSection from "../ColumnSection";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import slugify from "react-slugify";

const GuidesColumns = ({ data }) => {
  const guides = data.allContentfulGuide.nodes;
  const bgColor = "bg-blue-primary";
  const title = "Guías para Socios Conductores";
  const textColor = "white";
  let columns = [];
  guides.forEach((guide) => {
    columns.push({
      title: <Link to={slugify(guide.title)}>{guide.title}</Link>,
      desc: guide.excerpt,
      textColor: "gray-primary",
      bgColor: "bg-white",
      image: (
        <Link to={slugify(guide.title)}>
          <GatsbyImage
            image={getImage(guide.featuredImage)}
            alt={guide.title}
            width={700}
            height={700}
            className="z-10  m-4"
          ></GatsbyImage>
        </Link>
      ),
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

export default GuidesColumns;
