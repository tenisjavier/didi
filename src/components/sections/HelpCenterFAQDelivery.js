import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import AccordionSection from "../AccordionSection";

const HelpCenterFAQDelivery = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx(
        filter: {
          frontmatter: { section: { eq: "cl-faq-delivery" } }
          fileAbsolutePath: {}
        }
      ) {
        nodes {
          body
          frontmatter {
            title
          }
        }
      }
    }
  `);

  let items = [];
  data.allMdx.nodes.forEach((node) => {
    items.push({
      title: node.frontmatter.title,
      content: node.body,
    });
  });
  const desc =
    "Cuentas con DiDi 24/7 para escucharte, para ayudarte.Conoce nuestro centro de ayuda para usuarios y Socios Conductores.";

  return (
    <AccordionSection
      bgColor="bg-gray-light"
      bgAccordionColor="bg-white"
      textAccordionColor="orange-primary"
      title="DiDi Entrega"
      desc={desc}
      items={items}
    ></AccordionSection>
  );
};

export default HelpCenterFAQDelivery;
