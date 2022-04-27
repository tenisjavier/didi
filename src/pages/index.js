import React from "react";
import { Link, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import CTASection from "../components/CTASection";
import HeroVideo from "../images/didi-home.mp4";
import Footer from "../components/Footer";

const Index = () => {
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
        className="!absolute z-0  w-full md:block"
      >
        <source src={HeroVideo} type="video/mp4"></source>
      </video>
    ),
    image: (
      <StaticImage
        src="../images/didi-logo.png"
        alt="didi logo"
        className="w-100 z-30 m-4"
        width={250}
      ></StaticImage>
    ),
    alignItems: "center",
  };

  return (
    <>
      <nav className="bg-gray-primary fixed z-30 h-20 w-full bg-opacity-80">
        <div className="flex h-full items-center justify-between">
          <Link className="" to={`/`}>
            <StaticImage
              src={`../images/didi-logo.png`}
              alt="didi logo"
              className=""
              width={100}
            />
          </Link>
        </div>
      </nav>
      <CTASection {...CTAProps}></CTASection>
      <Footer></Footer>
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
  }
`;
