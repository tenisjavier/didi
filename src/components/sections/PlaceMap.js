import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSubway, faBus } from "@fortawesome/free-solid-svg-icons";
import CTASection from "../CTASection";

const PlaceMap = ({ data }) => {
  const { t } = useTranslation();
  const {
    name,
    geometry: { lat, lon },
  } = data.contentfulPlace;

  const directions = data.allContentfulDirection.nodes;
  const uniqueLines = [];
  const uniqueBusLines = directions
    .map((node) => {
      if (
        uniqueLines.indexOf(node.lastLine) === -1 &&
        node.lastLine[0] !== "L"
      ) {
        uniqueLines.push(node.lastLine);
        return node.lastLine;
      }
      return null;
    })
    .filter((line) => line);

  const uniqueMetroLines = directions
    .map((node) => {
      if (
        uniqueLines.indexOf(node.lastLine) === -1 &&
        node.lastLine[0] === "L"
      ) {
        uniqueLines.push(node.lastLine);
        return node.lastLine;
      }
      return null;
    })
    .filter((line) => line);

  const props = {
    title: t("PlaceMap.title", { placeName: name }),
    desc: t("PlaceMap.desc"),
    textColor: t("PlaceMap.textColor"),
    bgColor: t("PlaceMap.bgColor"),
    image: (
      <img
        className="z-10 m-4 w-full rounded md:w-100 lg:w-110"
        alt={name + " mapa"}
        src={`https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lon}&zoom=15&size=2800x400&maptype=roadmap
&markers=color:red%7C${lat},${lon}&key=${process.env.GATSBY_GOOGLE_API_KEY}`}
      ></img>
    ),
    bullets: [
      <span>
        <FontAwesomeIcon
          icon={faBus}
          className=" mr-4 text-orange-primary w-5 "
          size="sm"
        />
        <b>Micro: </b>
        {uniqueBusLines.join(", ")}
      </span>,
      <span>
        <FontAwesomeIcon
          icon={faSubway}
          className=" mr-4 text-orange-primary w-5"
          size="sm"
        />
        <b>Metro: </b>
        {uniqueMetroLines.join(", ")}
      </span>,
    ],
    btnMode: t("PlaceMap.btnMode"),
    customBulletIcon: true,
    btnType: "pax",
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default PlaceMap;
