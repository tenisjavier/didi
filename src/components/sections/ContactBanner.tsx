import React from "react";
import { t } from "../../context/countryContext";
import Banner, { BannerProps } from "../Banner";

const ContactBanner = () => {
  const props: BannerProps = {
    title: t("ContactBanner.title"),
    desc: t("ContactBanner.desc"),
    bgColor: t("ContactBanner.bgColor"),
    textColor: t("ContactBanner.textColor"),
    btnText: t("ContactBanner.btnText"),
    btnLink: t("ContactBanner.btnLink"),
    btnMode: t("ContactBanner.btnMode"),
  };

  return <Banner {...props}></Banner>;
};

export default ContactBanner;
