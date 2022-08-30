import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Banner from "../Banner";

const ContactAuthorityBanner = () => {
  const { t } = useTranslation();
  const props = {
    title: t("ContactAuthorityBanner.title"),
    desc: t("ContactAuthorityBanner.desc"),
    bgColor: t("ContactAuthorityBanner.bgColor"),
    textColor: t("ContactAuthorityBanner.textColor"),
    btnMode: t("ContactAuthorityBanner.btnMode"),
    btnText: t("ContactAuthorityBanner.btnText"),
    btnLink: t("ContactAuthorityBanner.btnLink"),
  };

  return <Banner {...props}></Banner>;
};

export default ContactAuthorityBanner;
