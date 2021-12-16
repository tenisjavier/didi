import React from "react";
import Layout from "../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export const query = graphql`
  query ($id: String!) {
    sitePage(id: { eq: $id }) {
      featuredImageUrl {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG, width: 1600)
        }
      }
    }
  }
`;

const GuideTemplate = ({ data, pageContext }) => {
  const { title, excerpt, content: html_content } = pageContext;
  const image = getImage(data.sitePage.featuredImageUrl);
  console.log("image", image);

  const dirtyExcerpt = excerpt.replace(/\n|\r/g, "");
  const cleanExcerpt = DOMPurify.sanitize(dirtyExcerpt, {
    USE_PROFILES: { html: true },
  });

  const dirtyHTML = html_content.replace(/\n|\r/g, "");
  const cleanHTML = DOMPurify.sanitize(dirtyHTML, {
    USE_PROFILES: { html: true },
  });

  return (
    <Layout>
      {/* Section H1 Feature Image and Excerpt Desktop */}
      <section className="relative flex justify-center h-screen">
        <GatsbyImage
          image={image}
          alt={title}
          className="hidden object-fill lg:block w-full"
        />
        <div className=" hidden  lg:block absolute bottom-10 left-16 z-1  text-white text-justify drop-shadow">
          <h1 className=" font-bold  mb-4 text-4xl">{title}</h1>
          <p className="text-lg w-1/3">{parse(cleanExcerpt)}</p>
        </div>
      </section>

      <main className="pt-32 lg:pt-16 flex min-h-screen justify-center">
        <div className="container h-full mx-16">
          <p className="text-yellow-500 text-lg">
            {" "}
            <Link to="/cl" className="hover:opacity-80">
              {" "}
              <FontAwesomeIcon icon={faHome} /> Inicio{" "}
            </Link>{" "}
            / <span> Guias </span> /{" "}
            <span className=" text-grey-primary"> {title} </span>
          </p>
          <h1 className=" font-bold  my-4 text-3xl text-center md:text-4xl lg:hidden">
            {title}
          </h1>
          <GatsbyImage
            image={image}
            alt="page image"
            className="w-full z-0 lg:hidden"
          />
          <section className="main-text w-full pb-12">
            {parse(cleanHTML)}
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default GuideTemplate;
