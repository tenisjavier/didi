import React from "react";
import { t } from "../../../../context/countryContext";
import CTAFullSection, { CTAFullSectionProps } from "../../../CTAFullSection";
import { ImageDataType } from "../../../Image";

interface SeguroCTAProps {
  bgImage?: ImageDataType;
}

const SeguroCTA = ({ bgImage }: SeguroCTAProps) => {

  const props: CTAFullSectionProps = {
    colOne: {
      bullets: {
        bullets: t("SeguroCTAColOne.bullets", { returnObjects: true }),
      },
      textColor: t("SeguroCTAColOne.textColor"),
    },
    colTwo: {
      bullets: {
        bullets: t("SeguroCTAColTwo.bullets", { returnObjects: true }),
      },
      textColor: t("SeguroCTAColTwo.textColor"),
    },
    titleSection: t("SeguroCTA.sectionTitle"),
    subTitleSection: t("SeguroCTA.sectionSubTitle"),
    textColorSection: t("SeguroCTA.sectionTextColor"),
    bgImage,
    bgSection: 'bg-orange-primary',
  };
  return <CTAFullSection {...props}></CTAFullSection>;
};

export default SeguroCTA;
