// @desc Guides Grid used for navigation
import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface GuidesDeliveryColumnsProps {
  data: {
    allContentfulGuide: {
      nodes: {
        title: string;
        slug: string;
        excerpt: string;
        featuredImage: ImageDataLike;
      }[];
    };
  };
}

const GuidesDeliveryColumns = ({ data }: GuidesDeliveryColumnsProps) => {
  const props: ColumnsSectionProps = {
    title: t("GuidesDeliveryColumns.title"),
    bgColor: t("GuidesDeliveryColumns.bgColor"),
    textColor: t("GuidesDeliveryColumns.textColor"),
    columns: [],
  };
  const guides = data.allContentfulGuide.nodes;
  props.columns = guides.map((guide) => {
    const link = t("GuidesDeliveryColumns.linkItem", {
      guide: guide.slug,
    });
    return {
      title: <Link to={link}>{guide.title}</Link>,
      desc: guide.excerpt,
      textColor: "gray-primary",
      bgColor: "bg-white",
      image: (
        <Link to={link}>
          <GatsbyImage
            image={getImage(guide.featuredImage)!}
            alt={guide.title}
            className="z-10  m-4 h-56"
          ></GatsbyImage>
        </Link>
      ),
      btnText: t("GuidesDeliveryColumns.btnText"),
      btnLink: link,
      btnMode: t("GuidesDeliveryColumns.btnMode"),
      height: "h-50",
    };
  });
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default GuidesDeliveryColumns;
