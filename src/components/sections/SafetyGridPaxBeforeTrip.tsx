import React from "react";
import { t } from "../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";
import Image, { ImageDataType } from "../Image";
import { Link } from "gatsby";

interface SafetyFeaturesGrid {
  features: {
    name: string;
    slug: string;
  }[];
  images: ImageDataType[];
}
const SafetyGridPaxBeforeTrip = ({ images, features }: SafetyFeaturesGrid) => {
  const urlBase = t("SafetyGridPaxBeforeTrip.urlBase");
  const props: ColumnsSectionProps = {
    title: t("SafetyGridPaxBeforeTrip.title"),
    bgColor: t("SafetyGridPaxBeforeTrip.bgColor"),
    textColor: t("SafetyGridPaxBeforeTrip.textColor"),
    columns: t("SafetyGridPaxBeforeTrip.columns", { returnObjects: true }),
    width: "w-72",
  };

  console.log("SafetyGridPaxBeforeTrip", images);
  console.log("SafetyGridPaxBeforeTrip", props.columns);
  props.columns = props.columns.map((c, index) => {
    const image = images[index];
    c.imageStyle = "z-10 m-4";
    c.isImage = true;
    let link = c.title;
    let colImage = <Image imageData={image} imageStyle="z-10 m-4"></Image>;
    if (features) {
      let feature = features.filter((f) => {
        const minTitle = String(c.title).toLowerCase();
        const minFTitle = String(f.name).toLowerCase();
        return minTitle.indexOf(minFTitle) !== -1;
      });
      if (feature[0]) {
        link = <Link to={urlBase + "" + feature[0].slug}>{c.title}</Link>;
        colImage = (
          <Link to={urlBase + "" + feature[0].slug}>
            <Image imageData={image} imageStyle="z-10 m-4"></Image>
          </Link>
        );
      }
    }
    return {
      title: link,
      desc: c.desc,
      textColor: "gray-primary",
      bgColor: "transparent",
      image: colImage,
    };
  });

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default SafetyGridPaxBeforeTrip;
