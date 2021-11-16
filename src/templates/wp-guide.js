import React from "react";
import Layout from "../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";
import DOMPurify from "dompurify";
import parse from "html-react-parser";

const GuiaTemplate = ({ pageContext }) => {
  const { title, excerpt, content: html_content } = pageContext;

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
      <div class="header-sec">
        <div className="mx-96">
          <h1 className="text-5xl text-white font-bold mb-6">{title}</h1>
          <p className="text-lg text-white w-2/4">{parse(cleanExcerpt)}</p>
        </div>
      </div>

      <main className="pt-16 min-h-screen">
        <div className="container h-full mx-96">
          <p className="text-yellow-500 text-lg">
            {" "}
            <Link to="/cl" className="hover:opacity-80">
              {" "}
              <FontAwesomeIcon icon={faHome} /> Inicio{" "}
            </Link>{" "}
            / <span> Guias </span> /{" "}
            <span className="text-grey-primay"> {title} </span>
          </p>
          <section className="main-text w-11/12 pb-12">
            {parse(cleanHTML)}
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default GuiaTemplate;
