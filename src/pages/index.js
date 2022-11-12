import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import CTASection from "../components/CTASection";
import HeroVideo from "../images/didi-home.mp4";
import Layout from "../components/Layout";

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
    hero: false,
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
    hero: false,
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
    hero: false,
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
    <Layout sb={false}>
      <CTASection {...CTAProps} key={1}></CTASection>
      <CTASection {...AboutUsProps} key={2}></CTASection>
      <CTASection {...MissionProps} key={3}></CTASection>
      <CTASection {...AboutDiDiProps} key={4}></CTASection>
    </Layout>
  );
};

export default Index;

export const query = graphql`query ($language: String!) {
  locales: allLocale(filter: {language: {eq: $language}}) {
    edges {
      node {
        ns
        data
        language
      }
    }
  }
  allContentfulCountry(sort: {englishName: ASC}) {
    nodes {
      englishName
      hostname
    }
  }
  allContentfulAsset(
    filter: {title: {in: ["int.HomeAboutUs.image", "int.HomeOurMission.image", "int.AboutDiDi.image"]}}
  ) {
    nodes {
      id
      title
      description
      gatsbyImageData
    }
  }
}`;
