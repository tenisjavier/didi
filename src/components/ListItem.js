import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

const ListItem = ({ text, secondText, link }) => {
  const subText = secondText && secondText.slice(0, 40).concat("...");

  const item = link ? (
    <div className="text-blue-primary flex items-center justify-between px-4">
      <span>
        <p>
          <Link to={link}>{text}</Link>
        </p>
        <p className="text-gray-primary">
          <Link to={link}>{secondText && subText}</Link>
        </p>
      </span>

      <Link to={link}>
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
    <li className="border-gray-primary w-96 rounded border border-solid h-32 m-1">
      {item}
    </li>
  );
};

export default ListItem;
