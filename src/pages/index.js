import React from "react";
import Seo from "../components/SEO";
import { Link, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import CTASection from "../components/CTASection";
import HeroVideo from "../images/didi-home.mp4";

const Index = ({ data }) => {
  const countries = data.allContentfulCountry.nodes;
  const CTAProps = {
    hero: true,
    title: "Welcome to DiDi.",
    desc: "More than a journey.",
    textColor: "white",
    bgColor: "bg-gray-primary",
    bgImage: (
      <video
        autoPlay
        muted
        loop
        id="myVideo"
        className="!absolute z-0  h-140 overflow-hidden md:block"
      >
        <source src={HeroVideo} type="video/mp4"></source>
      </video>
    ),
    image: (
      <StaticImage
        src="../images/didi-logo.png"
        alt="DiDi"
        className="z-20 m-4 "
        width={250}
      ></StaticImage>
    ),
    alignItems: "center",
  };

  return (
    <>
      <Seo></Seo>
      <nav className="fixed z-30 h-20 w-full bg-gray-primary bg-opacity-80">
        <div className="flex h-full items-center justify-between">
          <Link className="" to={`/`}>
            <StaticImage
              src={`../images/didi-logo.png`}
              alt="DiDi"
              className=""
              width={100}
            />
          </Link>
        </div>
      </nav>
      <CTASection {...CTAProps}></CTASection>
      <footer>
        <div className="h-96 bg-gray-primary lg:h-80">
          <div className="container mx-auto flex h-full flex-wrap">
            <div className="flex h-1/2 w-full flex-initial flex-col items-center justify-center lg:h-full lg:w-1/2 lg:items-start">
              <Link to="/">
                <StaticImage
                  src="../images/didi-logo.png"
                  alt="DiDi"
                  width={180}
                />
              </Link>

              <div className="text-c h-auto w-3/4 lg:w-full lg:pr-52 lg:text-left">
                {countries.map((c, index) => {
                  if (index === 0) {
                    return (
                      <a
                        href={c.hostname}
                        key={index}
                        className="text-sm text-yellow-500 hover:text-yellow-300"
                      >
                        {c.name}
                      </a>
                    );
                  } else {
                    return (
                      <span key={index} className="text-white">
                        {" "}
                        •{" "}
                        <a
                          href={c.hostname}
                          className="text-sm text-yellow-500 hover:text-yellow-300"
                        >
                          {c.name}
                        </a>
                      </span>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Index;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allContentfulCountry {
      nodes {
        name
        hostname
      }
    }
  }
`;
