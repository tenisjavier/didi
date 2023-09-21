import React from "react";
import { graphql } from "gatsby";
import { useLocation } from "@reach/router";
import Layout from "../../components/Layout";
import FaqHero from "../../components/sections/FaqHero";
import FoodFaqHero from "../../components/sections/FoodFaqHero";
import FaqContent from "../../components/sections/FaqContent";
import FaqList from "../../components/sections/FaqList";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const FaqsTemplate = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const helpCenterBgImage = images.filter((image) => {
    return image.title === "mx.HelpCenterHero.bgImage";
  })[0];
  const foodFaqBgImage = images.filter((image) => {
    return image.title === "mx.FaqFoodHero.bgImage";
  })[0];
  const { title, content } = data.contentfulFaq;
  const { pathname } = useLocation();
  const productName =
    data.contentfulFaq.product != null ? data.contentfulFaq.product.name : "";

  let productFaqs;

  if (productName) {
    productFaqs = data.allContentfulProduct.nodes.faq;
  }

  let btnType = "";
  let link = "";
  let faqDiDiPay;
  let faqListTitle = "";

  if (pathname.includes("didipay/preguntas-frecuentes")) {
    faqDiDiPay = data.allContentfulFaq.nodes.filter((faq) => {
      return (
        faq.title === "¿Qué es DiDi Pay?" ||
        faq.title ===
        "¿Qué servicios puedo pagar con la billetera digital de DiDi Pay?" ||
        faq.title === "¿Cómo puedo pagar servicios desde la app de DiDi?" ||
        faq.title ===
        "¿Cómo puedo comprar una tarjeta de regalo con DiDi Pay?" ||
        faq.title === "¿Cómo recargar saldo y megas desde la app de DiDi?" ||
        faq.title === "¿Qué puedo obtener con mi cuenta de DiDi Pay?" ||
        faq.title === "¿Puedo obtener un reembolso de lo que deposité a mi Saldo DiDi?" ||
        faq.title === "¿Qué hacer si la transacción falla?"
      );
    });

    link = `/${data.contentfulFaq.country.code}/didipay/preguntas-frecuentes/`;
    btnType = "payment";
    faqListTitle = "Preguntas Frecuentes DiDi Pay";
  }

  if (pathname.includes("/prestamos/preguntas-frecuentes/")) {
    productFaqs = data.allContentfulProduct.nodes.filter((node) => {
      return node.name === data.contentfulFaq.product[0].name;
    });

    link = `/${data.contentfulFaq.country.code}/prestamos/preguntas-frecuentes/`;
    btnType = "prestamosPax";
    faqListTitle = "Más preguntas frecuentes DiDi Préstamos";
  }

  let hero = (
    <FaqHero
      title={title}
      desc={productName}
      bgImage={helpCenterBgImage}
      btnType={btnType}
    ></FaqHero>
  );

  if (pathname.includes("/food"))
    hero = (
      <FoodFaqHero
        title={title}
        desc={productName}
        bgImage={foodFaqBgImage}
      ></FoodFaqHero>
    );

    if(pathname.includes("/repartidores")){
      hero = (
        <FoodFaqHero
          title={title}
          desc={productName}
          bgImage={foodFaqBgImage}
        ></FoodFaqHero>
      );
    }
      

  let faqDesc = "";
  let contentlized = renderRichText(content);

  contentlized.forEach(function (v, i) {
    if (v.type === "p") {
      v.props.children.forEach(function (j) {
        if (j.type === "b") {
          faqDesc += j.props.children;
        } else if (j.type === "a") {
          faqDesc += j.props.children[0];
        } else {
          faqDesc += j;
        }
      });
    }
  });

  if (faqDesc.length > 160) {
    faqDesc = faqDesc.substring(0, 160) + "...";
  }

  return (
    <Layout schema="faq" title={title} desc={faqDesc}>
      {hero}
      <FaqContent title={title} content={content}></FaqContent>

      {productFaqs &&
        productFaqs.map((product) => {
          return (
            <FaqList
              faqs={product.faq}
              link={link}
              title={faqListTitle}
            ></FaqList>
          );
        })}

      {faqDiDiPay && (
        <FaqList faqs={faqDiDiPay} link={link} title={faqListTitle}></FaqList>
      )}
    </Layout>
  );
};

export const query = graphql`
  query ($id: String, $countryCode: String) {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(mx.HelpCenterHero.bgImage)|(mx.FaqFoodHero.bgImage)/"
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
    contentfulFaq(id: { eq: $id }) {
      title
      type
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
      product {
        name
        country {
          code
        }
      }
      country {
        code
      }
    }
    allContentfulProduct(
      filter: { country: { elemMatch: { code: { eq: $countryCode } } } }
    ) {
      nodes {
        name
        country {
          code
        }
        faq {
          title
          slug
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
          country {
            code
          }
        }
      }
    }
    allContentfulFaq(filter: { country: { code: { eq: $countryCode } } }) {
      nodes {
        title
        slug
        type
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
        country {
          code
        }
      }
    }
  }
`;

export default FaqsTemplate;
