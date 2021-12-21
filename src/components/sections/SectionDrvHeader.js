import React from "react";
import SectionTemplate from "./SectionTemplate";

const SectionDrvHeader = () => {
  return (
    <SectionTemplate
      title="MANEJA CON DiDi"
      desc="Para DiDi, los socios conductores y socios taxistas son muy
      importantes. Por eso, nos preocupamos por tener tasas de servicio
      competitivas que beneficien los ingresos de los socios conductores."
      textColor="white"
      bgImage="bg-image-orange-drv"
      bgImageAlt="conductor didi"
      bgMobileImage="bg-image-orange-home"
      bgMobileImageAlt="conductor didi"
      btnType="drv"
      btnMode="light"
    ></SectionTemplate>
  );
};

export default SectionDrvHeader;
