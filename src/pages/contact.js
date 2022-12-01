import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import CTASection from "../components/CTASection";
import ContactColumnPart from "../components/ContactColumnPart";
import "../styles/gray.css";

const Index = ({ data }) => {
  const images = data.allContentfulAsset.nodes;

  const ContactUsHeroBgImage = images.filter((image) => {
    return image.title === "int.ContactUsHero.bgImage";
  })[0];

  const CTAProps = {
    hero: true,
    title: "Contact DiDi Global",
    desc: "",
    textColor: "white",
    bgColor: "bg-gray-primary",
    bgImage: (
      <GatsbyImage
        image={ContactUsHeroBgImage.gatsbyImageData}
        alt={ContactUsHeroBgImage.description}
        className="!absolute z-0 h-full w-full md:block brightness-50"
      ></GatsbyImage>
    ),
  };

  const ContactColumnPartProps = {
    contacts: [
      {
        title: "Beijing Headquarters",
        desc: "Building B1&B2, Digital Valley, Zhongguancun Software Park Compound 8, Dongbeiwang Road, Haidian District Beijing 100000 P.R.China",
      },
      {
        title: "Business Partnership",
        desc: "bd@didiglobal.com",
      },
      {
        title: "Brand Cooperation",
        desc: "shichanghezuo@didiglobal.com",
      },
      {
        title: "Advertising",
        desc: "ad@didiglobal.com",
      },
      {
        title: "Media contact",
        desc: "globalpr@didiglobal.com",
      },
      {
        title: "Open Platform",
        desc: "api@didiglobal.com",
      },
      {
        title: "DiDi Labs in Mountain View",
        desc: "450 National Ave., Mountain View, CA 94043",
      },
      {
        title: "Customer Service Hotline",
        desc: "support@didiglobal.com",
      },
    ],
  };

  return (
    <div id="gray">
      <Layout>
        <CTASection {...CTAProps}></CTASection>
        <ContactColumnPart {...ContactColumnPartProps}></ContactColumnPart>
      </Layout>
    </div>
  );
};

export default Index;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: { title: { in: ["int.ContactUsHero.bgImage"] } }
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
