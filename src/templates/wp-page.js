import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";
import "../styles/global.css";

const WpTemplate = ({ data, pageContext }) => {
  const title = pageContext.title;

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
            <span className="text-grey-primary"> {title} </span>
          </p>
        </div>
      </main>
    </Layout>
  );
};

export default WpTemplate;
