import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import AccordionSection from "../AccordionSection";

const HelpCenterFAQPax = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx(
        filter: {
          frontmatter: { section: { eq: "cl-faq-pax" } }
          fileAbsolutePath: {}
        }
        sort: { fields: fileAbsolutePath }
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
  const title = "Pasajeros";

  return (
    <AccordionSection
      bgColor="bg-gray-light"
      textColor="gray-primary"
      textAccordionColor="orange-primary"
      bgAccordionColor="bg-white"
      title={title}
      items={items}
    ></AccordionSection>
  );
};

export default HelpCenterFAQPax;
