// @desc Guides Grid used for navigation
import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import ColumnsSection from "../ColumnSection";
import slugify from "react-slugify";

const GuidesColumns = ({ data }) => {
  const { t } = useTranslation();
  const props = {
    title: t("GuidesColumns.title"),
    bgColor: t("GuidesColumns.bgColor"),
    textColor: t("GuidesColumns.textColor"),
  };
  const guides = data.allContentfulGuide.nodes;
  props.columns = guides.map((guide) => {
    const link = t("GuidesColumns.linkItem", {
      guide: slugify(guide.title),
    });
    return {
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
      btnText: t("GuidesColumns.btnText"),
      btnLink: link,
      btnMode: t("GuidesColumns.btnMode"),
      height: "h-96",
    };
  });
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default GuidesColumns;
