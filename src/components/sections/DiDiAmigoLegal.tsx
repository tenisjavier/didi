import React from "react";
import { t } from "../../context/countryContext";
import Banner, { BannerProps } from "../Banner";

const DiDiAmigoLegal = () => {
  const props: BannerProps = {
    title: t("DiDiAmigoLegal.title"),
    desc: t("DiDiAmigoLegal.desc"),
    bgColor: t("DiDiAmigoLegal.bgColor"),
    textColor: t("DiDiAmigoLegal.textColor"),
    btnText: t("DiDiAmigoLegal.btnText"),
    btnLink: t("DiDiAmigoLegal.btnLink"),
    btnMode: t("DiDiAmigoLegal.btnMode"),
  };

  return <Banner {...props}></Banner>;
};

export default DiDiAmigoLegal;
