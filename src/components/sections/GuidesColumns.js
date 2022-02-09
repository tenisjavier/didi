// @desc Guides Grid used for navigation
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
    const slug = slugify(guide.title);
    const link = `/cl/guias/${slug}`;
    console.log(link);
    columns.push({
      title: <Link to={link}>{guide.title}</Link>,
      desc: guide.excerpt,
      textColor: "gray-primary",
      bgColor: "bg-white",
      image: (
        <Link to={link}>
          <GatsbyImage
            image={getImage(guide.featuredImage)}
            alt={guide.title}
            width={700}
            height={700}
            className="z-10  m-4"
          ></GatsbyImage>
        </Link>
      ),
      btnText: "Leer Guía",
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

export default GuidesColumns;
