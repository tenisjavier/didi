import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { GatsbyImage } from "gatsby-plugin-image";

const ListItem = ({ text, secondText, link, image }) => {
  const subText = secondText && secondText.slice(0, 40).concat("...");

  const item = link ? (
    <div className="text-blue-primary flex items-center justify-between px-4">
      <span className="z-10">
        <p>
          <Link to={link}>{text}</Link>
        </p>
        <p className="text-gray-primary">
          <Link to={link}>{secondText && subText}</Link>
        </p>
      </span>

      <Link to={link} className="z-10">
        <FontAwesomeIcon
          icon={faArrowCircleRight}
          size="1x"
          className="w-4"
        ></FontAwesomeIcon>
      </Link>
    </div>
  ) : (
    <p>{text}</p>
  );
  return (
    <li className="border-gray-primary w-96 rounded border border-solid h-32 m-1 relative">
      {image && (
        <GatsbyImage
          image={image.gatsbyImageData}
          alt={image.description}
          className="!absolute z-0 h-full w-full block bg-cover brightness-50"
        ></GatsbyImage>
      )}
      {item}
    </li>
  );
};

export default ListItem;
