import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import CTASection, { CTAProps } from "../CTASection";

interface ProductCTAComponentProps {
  title: string;
  desc: string;
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const ProductCTAComponent = ({
  title,
  desc,
  image,
}: ProductCTAComponentProps) => {
  const props: CTAProps = {
    hero: false,
    title: title,
    desc: desc,
    textColor: "gray-primary",
    image: (
      <GatsbyImage
        image={image.gatsbyImageData!}
        alt={image.description}
        className="z-10 m-4 w-80  rounded"
      ></GatsbyImage>
    ),
    btnMode: "primary",
    btnType: "pax",
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default ProductCTAComponent;
