import React from "react";
import Layout from "../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import "../styles/global.css";

const GuiaTemplate = ({ pageContext }) => {
  const title = pageContext.title;
  const html_content = pageContext.content;
  const dirtyHTML = html_content.replace(/\n|\r/g, "");
  const cleanHTML = DOMPurify.sanitize(dirtyHTML, {
    USE_PROFILES: { html: true },
  });
  return (
    <Layout>
      <div class="header-sec">
        <div className="mx-96">
          <h1 className="text-5xl text-white font-bold mb-6">{title}</h1>
          <p className="text-lg text-white w-2/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea commodi
            cumque similique, eius odio rem quidem tenetur consectetur illum
            nemo nobis excepturi eligendi amet iste asperiores omnis temporibus
            minus inventore.
          </p>
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
            <span className="text-grey-333"> {title} </span>
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
