import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import RequirementHero from "../../../components/sections/RequirementHero";
import RequirementRichContent from "../../../components/sections/RequirementRichContent";
import DrvCityList from "../../../components/sections/DrvCityList";

const Requirement = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const cities = data.contentfulCountry.city;
  const drvHeroBgImage = images.filter((image) => {
    return image.title === "nz.DrvHero.bgImage";
  })[0];

  const title = "Driver Requirements for " + data.contentfulRequirement.name;
  return (
    <Layout>
      <RequirementHero title={title} bgImage={drvHeroBgImage}></RequirementHero>
      <RequirementRichContent data={data}></RequirementRichContent>
      <DrvCityList data={cities}></DrvCityList>
    </Layout>
  );
};

export default Requirement;

export const query = graphql`
  query ($id: String) {
    allContentfulAsset(
      filter: { title: { regex: "/(nz.DrvHero.bgImage)/" } }
      sort: { title: ASC }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    contentfulRequirement(id: { eq: $id }) {
      name
      requirement {
        raw
      }
    }
    contentfulCountry(code: { eq: "nz" }) {
      city {
        name
        slug
      }
    }
  }
`;
