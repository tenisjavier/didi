import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Btn from "./Btn";

const GuideListItem = ({ text, secondText, link, image }) => {
  const item = link ? (
    <div className="items-center justify-between px-4">
      <GatsbyImage
        image={image.props.image.gatsbyImageData}
        alt={image.props.image.description}
        width={150}
        height={150}
        className="z-10 m-4 max-h-26"
      ></GatsbyImage>
      <p className="mb-4 text-xl font-bold text-orange-primary">{text}</p>
      <Btn
        btnType={"none"}
        btnLink={link}
        btnMode={"primary"}
        btnText={"Conoce más"}
      ></Btn>
    </div>
  ) : (
    <p>{text}</p>
  );
  return <li className={`relative w-100`}>{item}</li>;
};

export default GuideListItem;
