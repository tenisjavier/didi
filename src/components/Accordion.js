import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faMinusSquare } from "@fortawesome/free-solid-svg-icons";
import { MDXRenderer } from "gatsby-plugin-mdx";

const Acordian = ({ title, content, bgColor, textColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState("0px");
  const content1 = useRef(null);

  const closeClass =
    "text-lg bg-gray-200 text-gray-primary py-0 w-full px-20 transition-all duration-700 overflow-hidden";
  const openClass = `bg-white text-gray-primary w-full py-5 px-20 transition-all duration-700 text-lg overflow-hidden`;
  const toggtle = () => {
    setIsOpen(!isOpen);
    setHeight(isOpen ? `0px` : `${content1.current.scrollHeight + 50}px`);
    console.log(content1.current.scrollHeight);
  };
  return (
    <>
      <div
        aria-hidden="true"
        className={`flex items-center justify-between w-full px-10 lg:px-20 cursor-pointer mt-6 rounded ${
          isOpen ? "bg-white" : bgColor
        }`}
        onClick={() => toggtle()}
      >
        <h3 className={`text-${textColor} text-md md:text-2xl`}>{title}</h3>
        <FontAwesomeIcon
          icon={isOpen ? faMinusSquare : faPlusSquare}
          className={`text-${textColor} text-xl`}
        />
      </div>
      <div
        className={`accordion ${isOpen ? openClass : closeClass}`}
        //dangerouslySetInnerHTML={{ __html: content }}
        style={{ maxHeight: height }}
        ref={content1}
      >
        <MDXRenderer>{content}</MDXRenderer>
      </div>
    </>
  );
};

export default Acordian;
