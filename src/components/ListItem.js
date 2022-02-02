import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

const ListItem = ({ text, secondText, link }) => {
  const subText = secondText && secondText.slice(0, 40).concat("...");

  const item = link ? (
    <div className="text-blue-primary flex justify-between items-center px-4">
      <span>
        <p>
          <Link to={link}>{text}</Link>
        </p>
        <p className="text-gray-primary">
          <Link to={link}>{secondText && subText}</Link>
        </p>
      </span>

      <Link to={link}>
        <FontAwesomeIcon icon={faArrowCircleRight} size="1x"></FontAwesomeIcon>
      </Link>
    </div>
  ) : (
    <p>{text}</p>
  );
  return (
    <li className="w-96 border-solid border border-gray-primary rounded">
      {item}
    </li>
  );
};

export default ListItem;
