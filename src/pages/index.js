import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Seo from "../components/SEO";
import { Link, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import CTASection from "../components/CTASection";
import HeroVideo from "../images/didi-home.mp4";

const Index = ({ data }) => {
  const countries = data.allContentfulCountry.nodes;
  const images = data.allContentfulAsset.nodes;
  const HomeAboutUsImage = images.filter((image) => {
    return image.title === "int.HomeAboutUs.image";
  })[0];
  const AboutDiDiImage = images.filter((image) => {
    return image.title === "int.AboutDiDi.image";
  })[0];
  const HomeOurMissionBgImage = images.filter((image) => {
    return image.title === "int.HomeOurMission.image";
  })[0];
  const CTAProps = {
    hero: true,
    title: "Welcome to DiDi.",
    desc: "More than a Journey. The World‘s Leading Transportation Platform.",
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

  const AboutDiDiProps = {
    hero: true,
    title: "DiDi Around the World",
    desc: "We connect more than 550 million users around the world with our mobility platform, serving their needs in food delivery, mobility, financial services and more.",
    textColor: "gray-primary",
    bgColor: "bg-white",
    image: (
      <GatsbyImage
        image={AboutDiDiImage.gatsbyImageData}
        alt={AboutDiDiImage.description}
        className="z-10 m-4 w-100 rounded"
      ></GatsbyImage>
    ),
    list: countries.map((c) => {
      return { text: c.englishName, link: c.hostname };
    }),
  };

  const AboutUsProps = {
    hero: true,
    title: "About Us",
    desc: "DiDi Global Inc. is the world’s leading mobility technology platform. We offer a wide range of app-based services across markets including Asia-Pacific, Latin America, Europe and Africa, including ride hailing, taxi hailing, chauffeur, hitch and other forms of shared mobility as well as auto solutions, food delivery, intra-city freight and financial services.\nDiDi provides car owners, drivers and delivery partners with flexible work and income opportunities. We are committed to collaborating with policymakers, the taxi industry, the automobile industry and local communities to solve the world’s transportation, environmental and employment challenges through the use of AI technology and localized smart transportation innovations. DiDi strives to create better life experiences and greater social value by building a safe, inclusive and sustainable transportation and local services ecosystem for cities of the future.",
    textColor: "gray-primary",
    bgColor: "bg-gray-light",
    image: (
      <GatsbyImage
        image={HomeAboutUsImage.gatsbyImageData}
        alt={HomeAboutUsImage.description}
        className="z-10 m-4 w-100 rounded"
      ></GatsbyImage>
    ),
    reverse: true,
  };

  const MissionProps = {
    hero: true,
    title: "Mission: To build a better journey. Vision, to become:",
    bullets: [
      "The world’s largest one-stop transportation platform",
      "The world’s largest operator of vehicle networks",
      "A global leader in smart transportation technologies",
      "A global leader in the revolution in transportation and automotive technology",
    ],
    textColor: "white",
    bgColor: "bg-gray-light",
    bgImage: (
      <GatsbyImage
        image={HomeOurMissionBgImage.gatsbyImageData}
        alt={HomeOurMissionBgImage.description}
        className="!absolute z-0 h-full w-full md:block brightness-50"
      ></GatsbyImage>
    ),
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
          <ul className="m-0 flex flex-col items-center border-x-0 border-b-0  border-t border-solid border-orange-primary bg-gray-primary bg-opacity-80 lg:h-full lg:flex-row lg:border-0 lg:bg-transparent lg:p-0">
            <li className="group flex w-full flex-col p-2 text-white lg:w-44 lg:items-center lg:justify-center lg:p-0 ">
              <Link className="hover:text-white" to={`/contact/`}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <CTASection {...CTAProps}></CTASection>
      <CTASection {...AboutUsProps}></CTASection>
      <CTASection {...MissionProps}></CTASection>
      <CTASection {...AboutDiDiProps}></CTASection>
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
                          {c.englishName}
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
    allContentfulCountry(sort: { fields: name }) {
      nodes {
        englishName
        hostname
      }
    }
    allContentfulAsset(
      filter: {
        title: {
          in: [
            "int.HomeAboutUs.image"
            "int.HomeOurMission.image"
            "int.AboutDiDi.image"
          ]
        }
      }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
  }
`;
