import React from "react";
import { t } from "../../../../context/countryContext";
import Banner, { BannerProps } from "../../../Banner";
import textHighlighter from "../../../../util/textHighlighter";

const DiDiCreditBanner = () => {
  const props: BannerProps = {
    title: textHighlighter(t("DiDiCreditBanner.title")),
    bgColor: t("DiDiCreditBanner.bgColor"),
    textColor: t("DiDiCreditBanner.textColor"),
    borderColor: "orange-primary",
  };

  return <Banner {...props}></Banner>;
};

export default DiDiCreditBanner;
