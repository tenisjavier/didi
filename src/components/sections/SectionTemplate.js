import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Btn from "../Btn";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// @desc: Template for static Sections with bg image, title and text
// @props: title | desc | image The image name without extension | btnType 'drv'/'pax' | btnMode 'light'/none
const SectionTemplate = (props) => {
  const {
    title,
    desc,
    textColor,
    image,
    imageAlt,
    btnType,
    btnMode,
    textSide,
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

  const pathToImage = getImage(result);

  return (
    <section className="flex relative flex-column justify-center  w-full min-h-[40rem] max-h-[45rem] bg-orange-primary ">
      <div
        className={
          "md:w-1/2 lg:w-2/5 px-4 text-center text-" +
          textColor +
          " z-10 md:text-left md:pl-20 md:pr-0"
        }
      >
        <h2 className="text-2xl md:text-4xl pb-6 font-bold">{title}</h2>
        <p className="mb-5">{desc}</p>
        <Btn type={btnType} mode={btnMode}></Btn>
      </div>
      <GatsbyImage
        image={pathToImage}
        alt={imageAlt}
        className=" object-fill z-0 absolute h-full w-full"
      ></GatsbyImage>
    </section>
  );
};

export default SectionTemplate;
