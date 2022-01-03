import React from "react";
import Btn from "./Btn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

// @desc: Template for static Sections with bg image, title and text
// @props : title | desc | btnType drv/pax/both | btnMode 'light'/'dark'/'primary | btnLink customLink| reverse "false" "true"
// @props for images: bgImage (optional) | bgMobileImage (optional)| image - if you want an image next to the text
const CTASection = (props) => {
  const {
    title,
    desc,
    textColor,
    bgImage,
    bgMobileImage,
    bgColor,
    image,
    bullets,
    btnType,
    btnText,
    btnLink,
    btnMode,
    reverse,
  } = props;

  let sectionBtn = (
    <Btn type={btnType} link={btnLink} mode={btnMode}>
      {btnText}
    </Btn>
  );

  // if btnType is both will print pax first and drv second
  if (btnType === "both") {
    sectionBtn = (
      <>
        <Btn type="pax" mode={btnMode}></Btn>
        <br></br>
        <Btn type="drv" mode={btnMode}></Btn>
      </>
    );
  }
  return (
    <section
      className={`flex  relative justify-center items-center  w-full min-h-[40rem] max-h-[65rem] 
        ${bgColor && bgColor}  `}
    >
      <div
        className={`flex flex-wrap justify-center relative items-center md:mx-16  w-full max-w-6xl 
        ${reverse && "flex-row-reverse"} ${
          image ? "lg:justify-between" : "lg:justify-start"
        }`}
      >
        {image}
        <div
          className={`w-2/3 lg:w-1/2  px-4 text-center text-${textColor} z-10 lg:text-left`}
        >
          <h2 className="text-3xl md:text-4xl pb-6 font-bold">{title}</h2>
          {bullets && (
            <>
              <ul className="text-left list-none text-xl">
                {bullets.map((item) => {
                  return (
                    <>
                      <li>
                        <FontAwesomeIcon
                          icon={faPlayCircle}
                          className=" mr-4 text-orange-primary "
                          size="lg"
                        />
                        {item}
                      </li>
                      <br></br>
                    </>
                  );
                })}
              </ul>
              <br></br>
            </>
          )}
          <p className="mb-5">{desc}</p>
          {sectionBtn}
        </div>
      </div>
      {bgImage}
      {bgMobileImage}
    </section>
  );
};

export default CTASection;
