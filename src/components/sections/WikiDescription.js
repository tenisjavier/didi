import React from "react";
import CTASection from "../CTASection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

const WikiDescription = ({ data }) => {
  const { name, description } = data;

  const props = {
    bgColor: "bg-gray-light",
    textColor: "gray-primary",
    title: "Descripción de " + name,
    desc: description.description + " -- Fuente Wikipedia --",
    image: <FontAwesomeIcon icon={faBookOpen} size="5x" className="w-24" />,
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default WikiDescription;
