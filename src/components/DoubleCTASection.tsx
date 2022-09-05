import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarSide } from "@fortawesome/free-solid-svg-icons";
import Btn, { BtnProps } from "./Btn";

// @desc: Template for static Sections with bg image, title and text
// @props : title | desc | btnType drv/pax/both | btnMode 'light'/'dark'/'primary | btnLink customLink| reverse "false" "true"
// @props for images: bgImage (optional) | bgMobileImage (optional)| image - if you want an image next to the text

export interface DoubleCTAProps extends BtnProps {
  hero: boolean;
  title: string;
  desc?: string;
  textColor: string;
  bgImage?: React.ReactNode;
  bgMobileImage?: React.ReactNode;
  bgColor?: string;
  image?: React.ReactNode;
  bullets?: string[];
  customBulletIcon?: boolean;
  reverse?: boolean;
  doubleTitle?: boolean;
  title2?: string;
  desc2?: string;
}

const DoubleCTASection = (props: DoubleCTAProps) => {
  const {
    hero,
    title,
    desc,
    textColor,
    bgImage,
    bgMobileImage,
    bgColor,
    image,
    bullets,
    customBulletIcon,
    btnType,
    btnText,
    btnLink,
    btnMode,
    reverse,
    doubleTitle,
    title2,
    desc2,
  } = props;

  let sectionBtn = (
    <Btn
      btnType={btnType}
      btnLink={btnLink}
      btnMode={btnMode}
      btnText={btnText}
    ></Btn>
  );

  // if btnType is both will print pax first and drv second
  if (btnType === "both") {
    sectionBtn = (
      <>
        <Btn btnType="pax" btnMode={btnMode}></Btn>
        <br></br>
        <Btn btnType="drv" btnMode={btnMode}></Btn>
      </>
    );
  }

  // if btnType is bothFood will print OnlineFood first and FoodEater second
    if (btnType === "bothFood") {
    sectionBtn = (
      <>
        <Btn btnType="foodEaterOnline" btnMode={btnMode}></Btn>
        <br></br>
        <Btn btnType="foodEater" btnMode={btnMode}></Btn>
      </>
    );
  }

  const customIconStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    borderRadius: "100%",
    display: "inline-block",
    width: "32px",
    height: "32px",
    marginRight: "16px",
    verticalAlign: "top",
  };

  return (
    <section
      className={`relative flex min-h-[40rem] w-full  items-start justify-center overflow-hidden
    ${bgColor && bgColor}`}
    >
      <div
        className={`container mx-auto flex w-full   flex-wrap items-start justify-center py-8 
 ${reverse && "flex-row-reverse"} ${
          image ? "xl:justify-between" : "xl:justify-start"
        }`}
      >
        {image}

        <div
          className={`w-11/12 px-4  text-center lg:w-1/2 text-${textColor} z-10 xl:text-left`}
        >
          {hero ? (
            <h1 className="text-3xl font-bold md:text-4xl">{title}</h1>
          ) : (
            <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
          )}
          {bullets && (
            <>
              <ul className="mt-12 mb-2 list-none text-left text-xl">
                {bullets.map((item, index) => {
                  return (
                    <div key={index}>
                      <li>
                        {!customBulletIcon ? (
                          <FontAwesomeIcon
                            icon={faCarSide}
                            className=" mr-4 text-orange-primary w-6"
                            size="sm"
                          />
                        ) : (
                          <span className="text-center" style={customIconStyle}>
                            {index + 1}
                          </span>
                        )}
                        <p
                          style={{
                            display: "inline-block",
                            width: "85%",
                            margin: "0",
                          }}
                        >
                          {item}
                        </p>
                      </li>
                      <br></br>
                    </div>
                  );
                })}
              </ul>
              <br></br>
            </>
          )}
          <p className="mb-5 text-lg">{desc}</p>
          {doubleTitle ? (
            <h2 className="text-3xl font-bold md:text-4xl">{title2}</h2>
          ) : (
            ""
          )}
          {doubleTitle ? <p className="mb-5 text-lg">{desc2}</p> : ""}
          {sectionBtn}
        </div>
      </div>
      {bgImage}
      {bgMobileImage}
    </section>
  );
};

export default DoubleCTASection;
