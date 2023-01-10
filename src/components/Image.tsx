//? This component is to encapsule the specific image component of the framework

import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

//* if framework change this should be updated

interface ImageProps {
  imageData: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
  imageStyle?: string;
}

const Image = ({ imageData, imageStyle }: ImageProps) => {
  return (
    <GatsbyImage
      image={imageData.gatsbyImageData}
      alt={imageData.description}
      className={imageStyle}
    ></GatsbyImage>
  );
};

export default Image;
