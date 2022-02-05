import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSubway, faBus } from "@fortawesome/free-solid-svg-icons";
import CTASection from "../CTASection";

const PlaceMap = ({ data }) => {
  const {
    name,
    geometry: { lat, lon },
  } = data.contentfulPlace;

  const directions = data.allContentfulDirection.nodes;

  return (
    <CTASection
      title={`Líneas cercanas a  ${name}`}
      desc={`Mejor pide un DiDi y viajarás mas seguro y  más rápido`}
      textColor="gray-primary"
      bgColor="bg-white"
      image={
        <img
          className="md:w-100 lg:w-110 z-10 m-4 w-full rounded"
          alt={name + " mapa"}
          src={`https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lon}&zoom=15&size=2800x400&maptype=roadmap
&markers=color:red%7C${lat},${lon}&key=${process.env.GATSBY_GOOGLE_API_KEY}`}
        ></img>
      }
      bullets={[
        <span>
          <FontAwesomeIcon
            icon={faBus}
            className=" text-orange-primary mr-4 "
            size="sm"
          />
          <b>Micro: </b>
          {directions.map((node) =>
            node.lastLine[0] !== "L" ? `${node.lastLine}, ` : null
          )}
        </span>,
        <span>
          <FontAwesomeIcon
            icon={faSubway}
            className=" text-orange-primary mr-4 "
            size="sm"
          />
          <b>Metro: </b>
          {directions.map((node) =>
            node.lastLine[0] === "L" ? `${node.lastLine}, ` : null
          )}
        </span>,
      ]}
      customBulletIcon="true"
      btnType="pax"
      btnMode="primary"
      reverse="true"
    ></CTASection>
  );
};

export default PlaceMap;
