import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faMinusSquare } from "@fortawesome/free-solid-svg-icons";
import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from "gatsby-source-contentful/rich-text";
import RichContent from "./RichContent";

interface Accordion {
  title: string;
  content: RenderRichTextData<ContentfulRichTextGatsbyReference>;
  bgColor: string;
  textColor: string;
}

const Accordion = ({ title, content, bgColor, textColor }: Accordion) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState("0px");
  const content1: any = useRef(null);

  const closeClass =
    "text-lg bg-gray-200 text-gray-primary py-0 w-full px-20 transition-all duration-700 overflow-hidden";
  const openClass = `bg-white text-gray-primary w-full py-5 px-20 transition-all duration-700 text-lg overflow-hidden`;
  const toggtle = () => {
    setIsOpen(!isOpen);
    setHeight(isOpen ? `0px` : `${content1.current.scrollHeight + 50}px`);
  };
  return (
    <>
      <div
        aria-hidden="true"
        className={`mt-6 flex w-full cursor-pointer items-center justify-between rounded px-10 lg:px-20 ${
          isOpen ? "bg-white" : bgColor
        }`}
        onClick={() => toggtle()}
      >
        <h3 className={`text-${textColor} text-md md:text-2xl`}>{title}</h3>
        <FontAwesomeIcon
          icon={isOpen ? faMinusSquare : faPlusSquare}
          className={`text-${textColor} text-xl w-6`}
        />
      </div>
      <div
        className={`accordion ${isOpen ? openClass : closeClass}`}
        //dangerouslySetInnerHTML={{ __html: content }}
        style={{ maxHeight: height }}
        ref={content1}
      >
        <RichContent richContent={content}></RichContent>
      </div>
    </>
  );
};

export default Accordion;
