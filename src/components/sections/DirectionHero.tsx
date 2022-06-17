import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface DirectionHeroProps {
  data: {
    origin: string;
    originAddress: string;
    destination: string;
    destinationAddress: string;
  };
}

const DirectionHero = ({ data }: DirectionHeroProps) => {
  const { t } = useTranslation();
  const { origin, originAddress, destination, destinationAddress } = data;
  const props: CTAProps = {
    hero: true,
    title: t("DirectionHero.title", { destination, origin }),
    desc: t("DirectionHero.desc", { destinationAddress, originAddress }),
    textColor: t("DirectionHero.textColor"),
    bgColor: t("DirectionHero.bgColor"),
    image: (
      <img
        className="z-10 m-4 w-full rounded md:w-100 lg:w-110"
        alt={origin + " mapa"}
        src={`https://maps.googleapis.com/maps/api/staticmap?center=${destinationAddress}&zoom=12&size=2800x400&maptype=roadmap
&markers=color:red%7C${destinationAddress}&markers=color:red%7C${originAddress}&key=${process.env.GATSBY_GOOGLE_API_KEY}`}
      ></img>
    ),
    btnMode: t("DirectionHero.btnMode"),
    btnType: "pax",
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default DirectionHero;
