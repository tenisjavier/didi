import React from "react";
import SectionTemplate from "./SectionTemplate";

const SectionHomeHeader = () => {
  return (
    <SectionTemplate
      title="MUEVETE POR TU CIUDAD"
      textColor="white"
      image="bg-image-orange-home"
      imageAlt="conductor didi"
      mobileImage="bg-image-orange-home"
      mobileImageAlt="conductor didi"
      btnType="both"
      btnMode="light"
      alignItems="items-start"
    ></SectionTemplate>
  );
};

export default SectionHomeHeader;
