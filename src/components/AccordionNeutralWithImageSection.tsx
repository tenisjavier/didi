import React from "react";
import AccordionNeutral from "./AccordionNeutral";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import Btn, { BtnProps } from "./Btn";
import { Link } from "gatsby";


export interface AccordionNeutralWithImageProps extends BtnProps {
  items?: any[],
  bgColor?: string,
  bgAccordionColor?: string,
  title?: string,
  desc?: string,
  textColor?: string,
  textAccordionColor?: string,
  btnArray?: any[],
  sectionBtn?: string,
  image?: React.ReactNode;
  descText?: string,
  linkURL?: string,
  linkText?: string,
  afterText?: string
}

const AccordionNeutralWithImageSection = (props: AccordionNeutralWithImageProps) => {
  const {
    items,
    bgColor,
    bgAccordionColor,
    title,
    desc,
    textColor,
    textAccordionColor,
    btnType,
    btnText,
    btnLink,
    btnMode,
    btnArray,
    image,
    descText,
    linkURL,
    linkText,
    afterText
  } = props;

  let sectionBtn = (
    <Btn
      btnType={btnType}
      btnLink={btnLink}
      btnMode={btnMode}
      btnText={btnText}
    ></Btn>
  ); 

  return (
    <section className={`${bgColor} text-${textColor} py-12`}>
      <div className="container mx-auto flex flex-col justify-center">
        <>
        {title && (
          <h2 className="text-center text-3xl md:text-left">{title}</h2>
        )}
        {image}
        {desc && desc.split("\n").map((str) => <p className="text-center md:text-left">{str}</p>)}
        <div className={`flex flex-wrap justify-around `}>
          {items?.map((item, index) => {
            return (
              <AccordionNeutral
                {...item}
                bgColor={bgAccordionColor}
                textColor={textAccordionColor}
                key={index}
              ></AccordionNeutral>
            );
          })}
        </div>
        
        </>
      </div>
      <div className="container mx-auto my-5">
        {descText && <p>{descText}</p>}
        {linkURL && <p style={{color: "#ff7d41"}}><Link to={linkURL}>{linkText}</Link></p>}
        {sectionBtn}
        {afterText && <p>{afterText}</p>}
      </div>
    </section>
  );
};

export default AccordionNeutralWithImageSection;
