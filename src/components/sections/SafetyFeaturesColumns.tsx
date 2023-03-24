import React from "react";
import { Link } from "gatsby";
import Image from "../Image"
import { t } from "../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface SafetyFeaturesProps {
  data: {
    name: string;
    description: string;
    slug: string;
    componentImages: {
      gatsbyImageData: any;
      description: string;
      title: string;
    }[]
  }[];
  title: string;
}

const SafetyFeatures = ({ data, title }: SafetyFeaturesProps) => {
  const props: ColumnsSectionProps = {
    title: title || t("SafetyFeatures.title"),
    bgColor: t("SafetyFeatures.bgColor"),
    textColor: t("SafetyFeatures.textColor"),
    columns: [],
  };

  const features = data;

  props.columns = features.map((feature) => {
    const link = t("SafetyFeatures.linkItem", {
      feature: feature.slug,
    });
    return {
      title: <Link to={link}>{feature.name}</Link>,
      desc: feature.description,
      textColor: "gray-primary",
      bgColor: "bg-white",
      image: (
        <Link to={link}>
          <Image imageData={feature.componentImages[0]} imageStyle="z-10 m-4 h-56"></Image>
        </Link>
      )
    };
  });
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default SafetyFeatures;
