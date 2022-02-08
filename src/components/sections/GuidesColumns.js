import React from "react";
import { Link } from "gatsby";
import ColumnsSection from "../ColumnSection";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import slugify from "react-slugify";
import { useLocation } from "@reach/router";

const GuidesColumns = ({ data }) => {
  const { protocol, host } = useLocation();
  console.log(useLocation());
  const guides = data.allContentfulGuide.nodes;
  const bgColor = "bg-blue-primary";
  const title = "Guías para Socios Conductores";
  const textColor = "white";

  let columns = [];
  guides.forEach((guide) => {
    const slug = slugify(guide.title);
    const link = `${protocol}//${host}/cl/guias/${slug}`;
    columns.push({
      title: <Link to={link}>{guide.title}</Link>,
      desc: guide.excerpt,
      textColor: "gray-primary",
      bgColor: "bg-white",
      image: (
        <GatsbyImage
          image={getImage(guide.featuredImage)}
          alt={guide.title}
          width={700}
          height={700}
          className="z-10  m-4"
        ></GatsbyImage>
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
