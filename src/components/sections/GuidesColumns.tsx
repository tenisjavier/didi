// @desc Guides Grid used for navigation
import React from "react";
import { Link } from "gatsby";
import Image from "../Image"
import { t } from "../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface GuidesColumnsProps {
  data: {
    allContentfulGuide: {
      nodes: {
        title: string;
        slug: string;
        excerpt: string;
        featuredImage: any;
      }[];
    };
  };
}

const GuidesColumns = ({ data }: GuidesColumnsProps) => {
  const props: ColumnsSectionProps = {
    title: t("GuidesColumns.title"),
    bgColor: t("GuidesColumns.bgColor"),
    textColor: t("GuidesColumns.textColor"),
    columns: [],
  };
  const guides = data.allContentfulGuide.nodes;
  props.columns = guides.map((guide) => {
    const link = t("GuidesColumns.linkItem", {
      guide: guide.slug,
    });
    return {
      title: <Link to={link}>{guide.title}</Link>,
      desc: guide.excerpt,
      textColor: "gray-primary",
      bgColor: "bg-white",
      image: (
        <Link to={link}>
          <Image imageData={guide.featuredImage} imageStyle="z-10 m-4 h-56"></Image>
        </Link>
      ),
      btnText: t("GuidesColumns.btnText"),
      btnLink: link,
      btnMode: t("GuidesColumns.btnMode"),
      height: "h-110",
    };
  });
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default GuidesColumns;
