import React from "react";
import { t } from "../../context/countryContext";
import { Link } from "gatsby";
import Image from "../Image"
import ColumnsSection from "../ColumnSection";

const SafetyGridAfterTrip = ({ images, features }) => {
  const urlBase = t("SafetyGridAfterTrip.urlBase");
  const props = {
    title: t("SafetyGridAfterTrip.title"),
    bgColor: t("SafetyGridAfterTrip.bgColor"),
    textColor: t("SafetyGridAfterTrip.textColor"),
    columns: t("SafetyGridAfterTrip.columns", { returnObjects: true }),
  };

  props.columns.forEach((col, index) => {
    const image = images[index];
    const feature = features.filter((f) => {
      return col.title.toLowerCase().indexOf(f.name.toLowerCase()) !== -1;
    });
    if(feature[0]) {
      console.log(feature[0].slug);
      col.title = <Link to={urlBase+""+feature[0].slug}>{col.title}</Link>;
      col.image = <Link to={urlBase+""+feature[0].slug}>
                    <Image imageData={image} imageStyle="z-10 m-4"></Image>
                  </Link>;
    } else {
      col.image = image;
      col.imageStyle = "z-10 m-4";
      col.isImage = true;
    }
  });
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default SafetyGridAfterTrip;
