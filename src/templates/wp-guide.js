import React from "react";
import Layout from "../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import { StaticImage } from "gatsby-plugin-image";

const GuiaTemplate = ({ pageContext }) => {
  const { title, excerpt, content: html_content , featuredImageUrl} = pageContext;
  console.log(featuredImageUrl);
  const dirtyExcerpt = excerpt.replace(/\n|\r/g, "");
  const cleanExcerpt = DOMPurify.sanitize(dirtyExcerpt, {
    USE_PROFILES: { html: true },
  });

  const dirtyHTML = html_content.replace(/\n|\r/g, "");
  const cleanHTML = DOMPurify.sanitize(dirtyHTML, {
    USE_PROFILES: { html: true },
  });

  const bg_img_style = { backgroundImage: `url(${featuredImageUrl || "https://chile.didiglobal.com/wp-content/uploads/sites/16/2021/10/GettyImages-1129377251.png"})`};

  return (
    <Layout>
      <div className="hidden header-sec lg:block" style={bg_img_style}>
        <div className=" ml-32 lg:ml-60 xl:ml-96">
          <h1 className="lg:text-3xl xl:text-5xl text-white font-bold mb-6">{title}</h1>
          <p className="text-lg text-white w-2/4">{parse(cleanExcerpt)}</p>
        </div>
      </div>

      <main className="pt-32 lg:pt-16 min-h-screen flex justify-center">
        <div className="container h-full mx-16 md:mx-28 lg:mx-52 xl:mx-96">
          <p className="text-yellow-500 text-lg">
            {" "}
            <Link to="/cl" className="hover:opacity-80">
              {" "}
              <FontAwesomeIcon icon={faHome} /> Inicio{" "}
            </Link>{" "}
            / <span> Guias </span> /{" "}
            <span className=" text-grey-primary"> {title} </span>
          </p>
            <StaticImage
              src="https://chile.didiglobal.com/wp-content/uploads/sites/16/2021/10/GettyImages-1129377251.png"
              alt="page image"
              className="w-full z-0 mt-8 lg:hidden"
            />
          <section className="main-text w-11/12 pb-12">
            {parse(cleanHTML)}
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default GuiaTemplate;
