//? This component is to encapsule the specific image component of the framework

import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

//* if framework change this should be updated

export type ImageDataType = {
  title: string;
  description: string;
  gatsbyImageData: IGatsbyImageData;
};

interface ImageProps {
  imageData: ImageDataType;
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
