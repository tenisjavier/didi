import React from "react";
import CTASection, { CTAProps } from "../CTASection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

interface WikiProps {
  data: {
    name: string;
    description: string;
  }
}

const WikiDescription = ({ data }: WikiProps) => {
  const props: CTAProps = {
    hero: false,
    bgColor: "bg-gray-light",
    textColor: "gray-primary",
    title: "Descripción de " + data.name,
    desc: data.description + " -- Fuente Wikipedia --",
    imageRawRender: (
      <FontAwesomeIcon icon={faBookOpen} size="5x" className="w-24" />
    ),
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default WikiDescription;
