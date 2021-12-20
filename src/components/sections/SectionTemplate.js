import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Btn from "../Btn";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// @desc: Template for static Sections with bg image, title and text
// @props: title | desc | image The image name without extension | btnType drv/pax/both | btnMode 'light'/none | alignItems items-start or items-end
const SectionTemplate = (props) => {
  const {
    title,
    desc,
    textColor,
    image,
    imageAlt,
    mobileImage,
    mobileImageAlt,
    btnType,
    btnText,
    btnLink,
    btnMode,
    alignItems,
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
    return file.name === image;
  })[0];

  var mobileResult = files.filter((file) => {
    return file.name === mobileImage;
  })[0];

  const pathToImage = getImage(result);
  const pathToMobileImage = getImage(mobileResult);

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
      className={
        "flex relative flex-column justify-center  w-full min-h-[40rem] max-h-[45rem] bg-orange-primary " +
        alignItems
      }
    >
      <div
        className={
          "md:w-1/2 lg:w-2/5 px-4 text-center text-" +
          textColor +
          " z-10 md:text-left md:pl-20 md:pr-0"
        }
      >
        <h2 className="text-2xl md:text-4xl pb-6 font-bold">{title}</h2>
        <p className="mb-5">{desc}</p>
        {sectionBtn}
      </div>
      <GatsbyImage
        image={pathToImage}
        alt={imageAlt}
        className={`md:block object-fill z-0 absolute h-full w-full ${
          mobileImage && "hidden"
        }`}
      ></GatsbyImage>
      <GatsbyImage
        image={pathToMobileImage}
        alt={mobileImageAlt}
        className="block md:hidden object-fill z-0 absolute h-full w-full"
      ></GatsbyImage>
    </section>
  );
};

export default SectionTemplate;
