import React from "react";
import { t } from "../../context/countryContext";
import Banner, {BannerProps} from "../Banner";

const ContactAuthorityBanner = () => {
  const props: BannerProps = {
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
