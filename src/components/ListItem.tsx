import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "../components/Image";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

interface ListItemProps {
  text?: string;
  secondText?: string;
  link?: string;
  image?: any;
  contentful_id?: string;
}

const ListItem = ({ text, secondText, link, image, contentful_id }: ListItemProps) => {
  const subText = secondText && secondText.slice(0, 40).concat("...");

  const item = link ? (
    <div className={`id-${contentful_id} flex items-center justify-between px-4`}>
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
          className={`w-4 ${link === "#" && "hidden"}`}
        ></FontAwesomeIcon>
      </Link>
    </div>
  ) : (
    <p>{text}</p>
  );
  return (
    <li
      className={`id-${contentful_id} ${image ? "text-white" : "text-blue-primary"
        } border-gray-primary  rounded border border-solid h-32  relative`}
    >
      {image && (
        <Image
          imageData={image}
          imageStyle={
            "!absolute z-0 h-full w-full !block bg-cover brightness-50"
          }
        ></Image>
      )}
      {item}
    </li>
  );
};

export default ListItem;
