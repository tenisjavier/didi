import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import AccordionSection from "../AccordionSection";

const HelpCenterFAQDrv = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx(
        filter: {
          frontmatter: { section: { eq: "cl-faq-drv" } }
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
  const title = "Socio Conductor";
  return (
    <AccordionSection
      bgColor="bg-white"
      textColor="gray-primary"
      textAccordionColor="orange-primary"
      bgAccordionColor="bg-gray-light"
      title={title}
      items={items}
    ></AccordionSection>
  );
};

export default HelpCenterFAQDrv;
