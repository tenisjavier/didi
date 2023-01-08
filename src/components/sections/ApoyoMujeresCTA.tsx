import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface ApoyoMujeresCTA {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const ApoyoMujeresCTA = ({ image }: ApoyoMujeresCTA) => {
  const props: CTAProps = {
    hero: false,
    title: t("ApoyoMujeresCTA.title"),
    desc: t("ApoyoMujeresCTA.desc"),
    textColor: t("ApoyoMujeresCTA.textColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded-full",
    btnMode: t("ApoyoMujeresCTA.btnMode"),
    btnText: t("ApoyoMujeresCTA.btnText"),
    btnType: "drv",
  };
  return <CTASection {...props}></CTASection>;
};

export default ApoyoMujeresCTA;
