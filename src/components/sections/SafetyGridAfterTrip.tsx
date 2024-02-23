import React from "react";
import { Link } from "gatsby";
import Image, { ImageDataType } from "../Image";
import { t } from "../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface SafetyFeaturesGrid {
  features: {
    name: string;
    slug: string;
    image: ImageDataType;
  }[];
  images: ImageDataType[];
}

const SafetyGridAfterTrip = ({ images, features }: SafetyFeaturesGrid) => {
  const urlBase = t("SafetyGridAfterTrip.urlBase");
  const props: ColumnsSectionProps = {
    title: t("SafetyGridAfterTrip.title"),
    bgColor: t("SafetyGridAfterTrip.bgColor"),
    textColor: t("SafetyGridAfterTrip.textColor"),
    columns: t("SafetyGridAfterTrip.columns", { returnObjects: true }),
  };

  props.columns = props.columns.map((c, index) => {
    let image = images?.[index];
    let link = c.title;
    let colImage = <Image imageData={image} imageStyle="z-10 m-4"></Image>;
    if (features) {
      let feature = features.filter((f) => {
        const minTitle = String(c.title).toLowerCase();
        const minFTitle = String(f.name).toLowerCase();
        return minTitle.indexOf(minFTitle) !== -1;
      });

      image = features?.find((f) => f?.name === feature?.[0]?.name)?.image || image
      colImage = <Image imageData={image} imageStyle="z-10 m-4"></Image>;

      if (feature?.[0]) {
        link = <Link to={urlBase + "" + feature?.[0].slug}>{c.title}</Link>;
        console.log('link', urlBase + "" + feature?.[0].slug)
        colImage = (
          <Link to={urlBase + "" + feature?.[0].slug}>
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

export default SafetyGridAfterTrip;
