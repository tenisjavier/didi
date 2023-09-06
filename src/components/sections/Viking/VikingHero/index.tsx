import React from "react";
import { t } from "../../../../context/countryContext";
import VikingSection, { VikingSectionProps } from "../../../VikingSection";
import { ImageDataType } from "../../../Image";


interface VikingHeroProps {
  imageOne: ImageDataType,
  imageTwo: ImageDataType,
}


const VikingHero = ({ imageOne, imageTwo }: VikingHeroProps) => {
  const colOne: VikingSectionProps['colOne'] = {
    image: imageOne,
    title: t('VikingSection.vikingColOne.title'),
    subTitle: t("VikingSection.vikingColOne.subTitle"),
    btnText: t("VikingSection.vikingColOne.btnText"),
    btnLink: t("VikingSection.vikingColOne.btnLink"),
    bgColorCard: t("VikingSection.vikingColOne.bgColor"),
    textColor: t("VikingSection.vikingColOne.textColor"),
    btnType: t("VikingSection.vikingColOne.btnType"),
    btnMode: t("VikingSection.vikingColOne.btnMode"),
  }

  const colTwo: VikingSectionProps['colTwo'] = {
    image: imageTwo,
    title: t('VikingSection.vikingColTwo.title'),
    subTitle: t("VikingSection.vikingColTwo.subTitle"),
    btnText: t("VikingSection.vikingColTwo.btnText"),
    btnLink: t("VikingSection.vikingColTwo.btnLink"),
    bgColorCard: t("VikingSection.vikingColTwo.bgColor"),
    textColor: t("VikingSection.vikingColTwo.textColor"),
    btnType: t("VikingSection.vikingColTwo.btnType"),
    btnMode: t("VikingSection.vikingColTwo.btnMode"),
  }

  const props: VikingSectionProps = {
    colOne,
    colTwo,
    textFooter: t("VikingSection.vikingFooter.text"),
    hasTwoColumns: t("VikingSection.hasTwoColumns"),
  };
  return <VikingSection {...props}></VikingSection>;
};

export default VikingHero;
