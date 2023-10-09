// @desc Guides Grid used for navigation in food/repartidores/guias and food/restaurantes/guias
import React from "react";
import { Link } from "gatsby";
import Image from "../Image";
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

const FoodDeliveryGuideColumns = ({ data }: GuidesColumnsProps) => {
  const props: ColumnsSectionProps = {
    title: t("FoodDeliveryGuideColumns.title"),
    bgColor: t("FoodDeliveryGuideColumns.bgColor"),
    textColor: t("FoodDeliveryGuideColumns.textColor"),
    columns: [],
  };
  const guides = data.allContentfulGuide.nodes;
  props.columns = guides.map((guide) => {
    const link = t("FoodDeliveryGuideColumns.linkItem", {
      guide: guide.slug,
    });
    return {
      title: <Link to={link}>{guide.title}</Link>,
      desc: guide.excerpt,
      textColor: "gray-primary",
      bgColor: "bg-white",
      image: (
        <Link to={link}>
          <Image
            imageData={guide.featuredImage}
            imageStyle="z-10 m-4 h-56"
          ></Image>
        </Link>
      ),
      btnText: t("FoodDeliveryGuideColumns.btnText"),
      btnLink: link,
      btnMode: t("FoodDeliveryGuideColumns.btnMode"),
      height: "h-110",
    };
  });
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default FoodDeliveryGuideColumns;