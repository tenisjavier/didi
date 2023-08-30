import React from "react";
import { t } from "../../../../context/countryContext";
import VikingSection, { VikingSectionProps } from "../../../VikingSection";
import { ImageDataType } from "../../../Image";


interface VikingHeroProps {
  imageOne: ImageDataType,
  imageTwo: ImageDataType,
}


const VikingHero = ({ imageOne, imageTwo }: VikingHeroProps) => {
  const props: VikingSectionProps = {
    imageOne: imageOne,
    imageTwo: imageTwo,
    titleOne: t('VikingSection.vikingColOne.title'),
    titleTwo: t("VikingSection.vikingColTwo.title"),
    subTitleOne: t("VikingSection.vikingColOne.subTitle"),
    subTitleTwo: t("VikingSection.vikingColTwo.subTitle"),
    btnLinkOne: t("VikingSection.vikingColOne.btnLink"),
    btnLinkTwo: t("VikingSection.vikingColTwo.btnLink"),
    btnTextOne: t("VikingSection.vikingColOne.btnText"),
    btnTextTwo: t("VikingSection.vikingColTwo.btnText"),
    bgColOne: t("VikingSection.vikingColOne.bgColor"),
    bgColTwo: t("VikingSection.vikingColTwo.bgColor"),
    textColorColOne: t("VikingSection.vikingColOne.textColor"),
    textColorColTwo: t("VikingSection.vikingColTwo.textColor"),
    textFooter: t("VikingSection.vikingFooter.text"),
  };
  return <VikingSection {...props}></VikingSection>;
};

export default VikingHero;
