import React from "react";
import CTASection, { CTAProps } from "../CTASection";

interface PartnerPrivateFeatureProps {
  title: string;
  desc: string;
  btnLink: string;
  btnLinkText: string;
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const PartnerPrivateFeature = ({
  title,
  desc,
  image,
  btnLink,
  btnLinkText,
}: PartnerPrivateFeatureProps) => {
  const props: CTAProps = {
    hero: false,
    title: title,
    desc: desc,
    textColor: "gray-primary",
    bgColor: "bg-gray-light",
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded",
    btnMode: "primary",
    btnLink: btnLink || "",
    btnText: btnLinkText || "",
  };

  return <CTASection {...props}></CTASection>;
};

export default PartnerPrivateFeature;
