//? This component is to encapsule the specific image component of the framework

import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

//* if framework change this should be updated

export type ImageDataType = {
  title: string;
  description: string;
  gatsbyImageData?: IGatsbyImageData;
};

interface ImageProps {
  imageData: ImageDataType;
  imageStyle?: string;
  src?: string;
}

const Image = ({ imageData, imageStyle, src }: ImageProps) => {
  if (src) {
    imageData = {
      title: imageData.title,
      description: imageData.description,
      gatsbyImageData: {
        height: 30,
        width: 30,
        layout: "constrained",
        images: {
          fallback: {
            src,
            srcSet: src,
          }
        }
      }
    }
  }

  return (
    // <div id={imageData?.gatsbyImageData?.images?.fallback?.src} className={imageStyle}>
    <GatsbyImage
      image={imageData?.gatsbyImageData as IGatsbyImageData}
      alt={imageData?.description}
      className={imageStyle}
      id={imageData?.gatsbyImageData?.images?.fallback?.src}
    ></GatsbyImage>
    // </div>
  );
};

export default Image;
