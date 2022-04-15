import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection from "../CTASection";

const DirectionHero = ({ data }) => {
  const { t } = useTranslation();
  const { origin, originAddress, destination, destinationAddress } = data;
  const props = {
    title: t("DirectionHero.title", { destination, origin }),
    desc: t("DirectionHero.desc", { destinationAddress, originAddress }),
    textColor: t("DirectionHero.textColor"),
    bgColor: t("DirectionHero.bgColor"),
    image: (
      <img
        className="md:w-100 lg:w-110 z-10 m-4 w-full rounded"
        alt={origin + " mapa"}
        src={`https://maps.googleapis.com/maps/api/staticmap?center=${destinationAddress}&zoom=12&size=2800x400&maptype=roadmap
&markers=color:red%7C${destinationAddress}&markers=color:red%7C${originAddress}&key=${process.env.GATSBY_GOOGLE_API_KEY}`}
      ></img>
    ),
    btnMode: t("DirectionHero.btnMode"),
    btnType: "pax",
    reverse: "true",
  };
  return <CTASection {...props}></CTASection>;
};

export default DirectionHero;
