import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../../components/Layout";
import PartnerPrivateHero from "../../../../components/sections/PartnerPrivateHero";
import PartnerPrivateFeature from "../../../../components/sections/PartnerPrivateFeature";
import PartnerContent from "../../../../components/sections/PartnerContent";
import PartnersGrid from "../../../../components/sections/PartnersGrid";

const Partner = ({ data }) => {
  const { heroTitle, heroDesc, heroImage, promoLink, promoLinkText } =
    data.contentfulPartner;
  const { featureTitle, featureDesc, featureImage } = data.contentfulPartner;
  const { content } = data.contentfulPartner;

  const partners = data.allContentfulPartner.nodes;

  return (
    <Layout index={false}>
      <PartnerPrivateHero
        title={heroTitle}
        desc={heroDesc}
        image={heroImage}
        btnLink={promoLink}
        btnLinkText={promoLinkText}
      ></PartnerPrivateHero>
      {featureTitle && (
        <PartnerPrivateFeature
          title={featureTitle}
          desc={featureDesc}
          image={featureImage}
          btnLink={promoLink}
          btnLinkText={promoLinkText}
        ></PartnerPrivateFeature>
      )}
      <PartnerContent content={content}></PartnerContent>
      <PartnersGrid data={partners}></PartnersGrid>
    </Layout>
  );
};

export default Partner;

export const query = graphql`
  query ($id: String) {
    contentfulPartner(id: { eq: $id }) {
      promoLink
      promoLinkText
      heroTitle
      heroDesc
      heroImage {
        gatsbyImageData
        description
      }
      featureTitle
      featureDesc
      featureImage {
        gatsbyImageData
        description
      }
      content {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            title
            description
            gatsbyImageData(width: 450)
            __typename
          }
        }
      }
    }
    allContentfulPartner(
      filter: { country: { code: { eq: "co" } }, id: { ne: $id } }
    ) {
      nodes {
        name
        slug
        desc
        logo {
          gatsbyImageData
          description
        }
      }
    }
  }
`;
