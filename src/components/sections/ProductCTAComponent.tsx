import React from "react";
import CTASection, { CTAProps } from "../CTASection";

interface ProductCTAComponentProps {
  title: string;
  desc: string;
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
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
    image: image,
    imageStyle: "z-10 m-4 w-80  rounded",
    btnMode: "primary",
    btnType: "pax",
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default ProductCTAComponent;
