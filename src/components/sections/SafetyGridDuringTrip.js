import React from "react";
import { t } from "../../context/countryContext";
import { Link } from "gatsby";
import Image from "../Image"
import ColumnsSection from "../ColumnSection";

const SafetyGridDuringTrip = ({ images, features }) => {
  const urlBase = t("SafetyGridDuringTrip.urlBase");
  const props = {
    title: t("SafetyGridDuringTrip.title"),
    desc: t("SafetyGridDuringTrip.desc"),
    bgColor: t("SafetyGridDuringTrip.bgColor"),
    textColor: t("SafetyGridDuringTrip.textColor"),
    columns: t("SafetyGridDuringTrip.columns", { returnObjects: true }),
  };

  props.columns.forEach((col, index) => {
    const image = images[index];
    let feature;
    if(features && col.title) {
      feature = features.filter((f) => {
        const minTitle = String(col.title).toLowerCase();
        const minFTitle = String(f.name).toLowerCase();
        return minTitle.indexOf(minFTitle) !== -1;
      });
      if(feature[0]) {
        col.title = <Link to={urlBase+""+feature[0].slug}>{col.title}</Link>;
        col.image = <Link to={urlBase+""+feature[0].slug}>
                      <Image imageData={image} imageStyle="z-10 m-4"></Image>
                    </Link>;
      } else {
        col.image = image;
        col.imageStyle = "z-10 m-4";
        col.isImage = true;
      }
    } else {
      col.image = image;
      col.imageStyle = "z-10 m-4";
      col.isImage = true;
    }
  });

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default SafetyGridDuringTrip;
