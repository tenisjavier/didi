import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Btn from "../Btn";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

// @desc: Template for static Sections with bg image, title and text
// @props : title | desc | btnType drv/pax/both | btnMode 'light'/none | btnLink customLink| reverse "false" "true"
// @props for images: bgImage and bgImageAlt | bgMobileImage and bgMobileImageAlt| image if you want an image next to the text
const SectionTemplate = (props) => {
  const {
    title,
    desc,
    textColor,
    bgImage,
    bgImageAlt,
    bgMobileImage,
    bgMobileImageAlt,
    bgColor,
    image,
    imageAlt,
    imageRounded,
    map,
    bullets,
    btnType,
    btnText,
    btnLink,
    btnMode,
    reverse,
  } = props;
  const data = useStaticQuery(
    graphql`
      {
        allFile(filter: { sourceInstanceName: { eq: "images" } }) {
          nodes {
            name
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    `
  );
  const files = data.allFile.nodes;
  var result = files.filter((file) => {
    return file.name === bgImage;
  })[0];

  var mobileResult = files.filter((file) => {
    return file.name === bgMobileImage;
  })[0];

  var imageResult = files.filter((file) => {
    return file.name === image;
  })[0];

  const pathToBgImage = getImage(result);
  const pathToMobileImage = getImage(mobileResult);
  const pathToImage = getImage(imageResult);

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
      className={`flex flex-wrap justify-center relative items-center  w-full min-h-[40rem] max-h-[55rem] 
        ${bgColor && bgColor} ${reverse && "flex-row-reverse"} ${
        image || map ? "md:justify-around" : "md:justify-start"
      }`}
    >
      <GatsbyImage
        image={pathToImage}
        alt={imageAlt}
        className={`z-10 w-96 m-4  ${image ? "block" : "hidden"}  ${
          imageRounded && "rounded-full"
        }`}
      ></GatsbyImage>
      <img
        src={map}
        alt={imageAlt}
        className={`z-10 w-96 m-4  ${map ? "block" : "hidden"} `}
      ></img>
      <div
        className={`md:w-1/2  px-4 text-center text-${textColor} z-10 md:text-left md:pl-20 md:pr-0`}
      >
        <h2 className="text-3xl md:text-4xl pb-6 font-bold">{title}</h2>
        {bullets && (
          <>
            <ul className="text-left">
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
      <GatsbyImage
        image={pathToBgImage}
        alt={bgImageAlt}
        className={`md:block object-fill z-0 absolute h-full w-full ${
          bgMobileImage && "hidden"
        }`}
      ></GatsbyImage>
      <GatsbyImage
        image={pathToMobileImage}
        alt={bgMobileImageAlt}
        className="block md:hidden object-fill z-0 absolute h-full w-full"
      ></GatsbyImage>
    </section>
  );
};

export default SectionTemplate;
