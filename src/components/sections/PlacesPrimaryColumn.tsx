// @desc Article Grid used for navigation
import React from "react";
import { Link } from "gatsby";
import { useCountry } from "../../context/countryContext";
import Image from "../Image"
import slugify from "react-slugify";
import ColumnsSection from "../ColumnSection";

interface PrimaryColumnsProps {
  data: {
    name: string;
    address: string;
    city: {
      name: string;
    }
    image: {
      title: string;
      description: string;
      gatsbyImageData: any;
    }
  }[];
}

const PlacesPrimaryColumn = ({ data }: PrimaryColumnsProps) => {
  const countryCode = useCountry().code;
  const bgColor = "bg-blue-primary";
  const title = `Principales viajes realizados en ${data[0].city.name}`;
  const textColor = "white";
  type BtnMode = "primary" | "dark" | "light" | "green" | "hidden";
  let columns = data.map((item) => {
    const link = `/${countryCode}/lugares/como-llegar-a-${slugify(
      item.name
    )}_${slugify(item.address)}`;
    return {
      title: (<Link to={link}>{item.name}</Link>),
      desc: item.address,
      textColor: "gray-primary",
      bgColor: "bg-white",
      image: (
        <Link to={link}>
          <Image imageData={item.image} imageStyle="z-10 m-4 max-h-32"></Image>
        </Link>
      ),
      btnText: "Saber Más",
      btnLink: link,
      btnMode: "dark" as BtnMode,
      height: "h-96",
    };
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
