// @desc Article Grid used for navigation
import React from "react";
import { Link } from "gatsby";
import ColumnsSection from "../ColumnSection";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import slugify from "react-slugify";

const PlacesPrimaryColumn = ({ data }) => {
  const bgColor = "bg-blue-primary";
  const title = `Principales viajes realizados en ${data[0].city.name}`;
  const textColor = "white";

  let columns = [];
  data.forEach((item) => {
    const link = `/ar/lugares/como-llegar-a-${slugify(item.name)}_${slugify(
      item.address
    )}`;
    columns.push({
      title: <Link to={link}>{item.name}</Link>,
      desc: item.address,
      textColor: "gray-primary",
      bgColor: "bg-white",
      image: (
        <Link to={link}>
          <GatsbyImage
            image={getImage(item.image)}
            alt={item.title}
            width={700}
            height={700}
            className="z-10  m-4 max-h-32"
          ></GatsbyImage>
        </Link>
      ),
      btnText: "Saber Más",
      btnLink: link,
      btnMode: "dark",
      height: "h-96",
    });
  });
  return (
    <ColumnsSection
      columns={columns}
      bgColor={bgColor}
      title={title}
      textColor={textColor}
    ></ColumnsSection>
  );
};

export default PlacesPrimaryColumn;
