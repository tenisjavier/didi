import React from "react";
import SectionTemplate from "./SectionTemplate";

const SectionHomeHeader = () => {
  return (
    <SectionTemplate
      title="MUEVETE POR TU CIUDAD"
      textColor="white"
      bgImage="bg-image-orange-home"
      bgImageAlt="conductor didi"
      bgMobileImage="bg-image-orange-home"
      bgMobileImageAlt="conductor didi"
      btnType="both"
      btnMode="light"
      alignItems="items-start"
    ></SectionTemplate>
  );
};

export default SectionHomeHeader;
