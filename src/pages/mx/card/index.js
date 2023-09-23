import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import CardHero from "../../../components/sections/Card/CardHero";
import CreditCardCTA from "../../../components/sections/Card/CreditCardCTA";
import CashBackCTA from "../../../components/sections/Card/CashBackCTA";
import ShortText from "../../../components/sections/Card/ShortText";
import TasasCTA from "../../../components/sections/Card/TasasCTA";
import BeneficiosCTA from "../../../components/sections/Card/BeneficiosCTA";
import SeguroCTA from "../../../components/sections/Card/SeguroCTA";
import SolicitaCTA from "../../../components/sections/Card/SolicitaCTA";
import CreditCardFAQ from "../../../components/sections/Card/CreditCardFAQ";

const Card = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const faqs = data.allContentfulFaq.nodes;

  const creditCardHeroImage = images.filter((image) => {
    return image.title === "mx.CreditCardHero.image";
  })[0];

  const CreditCardCTAImage = images.filter((image) => {
    return image.title === "mx.CreditCardCTA.image";
  })[0];

  const TasasCTAImage = images.filter((image) => {
    return image.title === "mx.CreditFaqCard.image";
  })[0];

  const SeguroCTAImage = images.filter((image) => {
    return image.title === "mx.CreditCardSeguroCTA.image";
  })[0];

  const SolicitaCTAImage = images.filter((image) => {
    return image.title === "mx.CreditCardCTA2.image";
  })[0];

  return (
    <Layout index={false}>
      <CardHero image={creditCardHeroImage}></CardHero>
      <ShortText />
      <CreditCardCTA image={CreditCardCTAImage} />
      <CashBackCTA />
      <BeneficiosCTA />
      <SeguroCTA bgImage={SeguroCTAImage} />
      <SolicitaCTA image={SolicitaCTAImage}></SolicitaCTA>
      <TasasCTA image={TasasCTAImage}></TasasCTA>
      <CreditCardFAQ data={faqs}></CreditCardFAQ>
    </Layout>
  );
};

export default Card;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(mx.CreditFaqCard.image)|(mx.FuncionesCardCTA.image)|(mx.CreditCardHero.image)|(mx.CreditCardCTA.image)|(mx.CreditCardSeguroCTA.image)|(mx.CreditCardCTA2)/"
        }
      }
      sort: { title: ASC }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    allContentfulFaq(
      filter: { country: { code: { eq: "mx" } }, type: { eq: "card" } }
    ) {
      nodes {
        slug
        title
        content {
          raw
          references {
            ... on ContentfulAsset {
              contentful_id
              title
              description
              gatsbyImageData(width: 800)
              __typename
            }
          }
        }
      }
    }
  }
`;
