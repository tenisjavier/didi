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

const SafetyGridPaxDuringTrip = ({ images, features }: SafetyFeaturesGrid) => {
  console.log("SafetyGridPaxDuringTrip", images);
  console.log("SafetyGridPaxDuringTrip", features);
  const urlBase = t("SafetyGridPaxBeforeTrip.urlBase");
  const props: ColumnsSectionProps = {
    title: t("SafetyGridPaxDuringTrip.title"),
    bgColor: t("SafetyGridPaxDuringTrip.bgColor"),
    textColor: t("SafetyGridPaxDuringTrip.textColor"),
    columns: t("SafetyGridPaxDuringTrip.columns", { returnObjects: true }),
    width: "w-72",
  };

  props.columns = props.columns.map((c, index) => {
    const image = images[index];
    c.imageStyle = "z-10 m-4";
    c.isImage = true;
    let link = c.title;
    let colImage = <Image imageData={image || images[0]} imageStyle="z-10 m-4"></Image>;
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
            <Image imageData={image || images[0]} imageStyle="z-10 m-4"></Image>
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

export default SafetyGridPaxDuringTrip;
