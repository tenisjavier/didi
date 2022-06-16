import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection from "../CTASection";

const DrvCityHero = ({ data }) => {
  const { t } = useTranslation();
  const {
    name,
    geometry: { lat, lon },
  } = data;

  const props = {
    hero: true,
    title: t("DrvCityHero.title", { city: `${name}` }),
    desc: t("DrvCityHero.desc", { city: `${name}` }),
    textColor: t("DrvCityHero.textColor"),
    bgColor: t("DrvCityHero.bgColor"),
    image: (
      <img
        className="z-10 m-4 w-full rounded md:w-100 lg:w-110"
        alt={name + " mapa"}
        src={`https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lon}&zoom=12&size=1200x500&maptype=roadmap
&markers=color:red%7C${lat},${lon}&key=${process.env.GATSBY_GOOGLE_API_KEY}`}
      ></img>
    ),
    btnMode: t("DrvCityHero.btnMode"),
    btnType: "drv",
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default DrvCityHero;
