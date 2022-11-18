import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import ListPartnerHero from "../../components/sections/ListPartnerHero";
import FAQPartners from "../../components/sections/FAQPartners";

const ListOfPartners = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const faqs = data.allContentfulFaq.nodes;
  const drvHeroBgImage = images.filter((image) => {
    return image.title === "ru.ParnersListHero.bgImage";
  })[0];
  var cities = [];
  faqs.forEach((f, index) => {
    if (cities.indexOf(f.relatedCity) === -1) {
      cities.push(f.relatedCity);
    }
  });

  return (
    <Layout>
      <ListPartnerHero bgImage={drvHeroBgImage}></ListPartnerHero>
      {cities.sort().map((city, index) => {
        var citiesPartners = faqs.filter((faq) => {
          return faq.relatedCity === city;
        });
        return (
          <FAQPartners
            data={citiesPartners.reverse()}
            title={city}
            key={index}
          ></FAQPartners>
        );
      })}
    </Layout>
  );
};

export default ListOfPartners;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: { title: { in: ["ru.ParnersListHero.bgImage"] } }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    allContentfulFaq(
      filter: { relatedCity: { ne: null }, country: { code: { eq: "ru" } } }
    ) {
      nodes {
        title
        relatedCity
        content {
          raw
        }
      }
    }
  }
`;
