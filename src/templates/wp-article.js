import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import Link from "gatsby-link";
import { getCountryCodeFromUrl } from "../../config/countries-config";

export const query = graphql`
  query ($id: String!) {
    sitePage(id: { eq: $id }) {
      featuredImageUrl {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG, width: 600, height: 450)
        }
      }
    }
  }
`;

const WpTemplate = ({ data, pageContext }) => {
  const title = pageContext.title;
  const content = pageContext.content;

  const image = getImage(data.sitePage.featuredImageUrl);

  const dirtyContent = content.replace(/\n|\r/g, "");
  const dirtyContent2 = dirtyContent.replace(/\[[^\]]*\]/g, "");
  const cleanContent = DOMPurify.sanitize(dirtyContent2, {
    USE_PROFILES: { html: true },
  });

  const returnCountry = '/' + getCountryCodeFromUrl();
  return (
    <Layout>
    <section className="w-full h-72 bg-orange-primary pt-20">
      <div className="w-9/12 mx-auto h-full">
          <StaticImage
              src="../images/DiDi-Articulos-Logo-B.png"
              alt="didi article logo"
              className="mt-5 w-80 xl:w-100"
          />
          <p className="text-white text-lg xl:text-2xl mt-3">
          Bienvenidos a nuestra sección de novedades y artículos de interés.
          </p>
      </div>
    </section>
    <div className="w-9/12 h-full mx-auto">
        <p className="text-orange-primary text-lg">
            {" "}
            <Link to={returnCountry} className="hover:opacity-80 hover:text-sky-500">
              {" "}
              <FontAwesomeIcon icon={faHome} /> Inicio{" "}
            </Link>{" "}
            / <Link to={returnCountry+'/articulos'} className="hover:opacity-80 hover:text-sky-500"><span> Articulos </span> </Link>/{" "}
            <span className=" text-gray-primary"> {title} </span>
        </p>
      <h1 className="text-orange-primary text-3xl text-bold text-left lg:text-5xl text-center">{title}</h1>

      <GatsbyImage image={image} alt="jeivi" className="lg:float-left lg:mr-4 lg:h-auto float-none h-80"/>
      
      <section className="main-text w-full pb-12">
            {parse(cleanContent)}
      </section>
    </div>
      
    </Layout>
  );
};

export default WpTemplate;
