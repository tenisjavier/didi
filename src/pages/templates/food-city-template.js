import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import FoodCityHero from "../../components/sections/FoodCityHero";
import FoodCityBannerCTA from "../../components/sections/FoodCityBannerCTA";
import FoodCityBannerCTA2 from "../../components/sections/FoodCityBannerCTA2";
import FoodCityBannerCTA3 from "../../components/sections/FoodCityBannerCTA3";
import FoodCityRestaurantCTA from "../../components/sections/FoodCityRestaurantCTA";
import FoodCityList from "../../components/sections/FoodCityList";
import FoodAppDownloads from "../../components/sections/FoodAppDownloads";

const FoodCity = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const itemsList = data.allContentfulCity.nodes;
  const name = data.contentfulCity.name;

  const foodHeroBgImage = images.filter((image) => {
    return image.title === "mx.FoodHero.bgImage";
  })[0];
  const foodBusinessCTAImage = images.filter((image) => {
    return image.title === "mx.FoodBusinessCTA.image";
  })[0];
  const foodDeliveryCTAImage = images.filter((image) => {
    return image.title === "mx.FoodDeliveryCTA.image";
  })[0];
  const foodCTA3Image = images.filter((image) => {
    return image.title === "mx.FoodCTA.image";
  })[0];
  const foodDeliveryDownloadsImages = images.filter((image) => {
    return image.title.indexOf("mx.FoodDeliveryDownloads.image") !== -1;
  });
  const customBreadcrumb = [
    {
      link: `https://web.didiglobal.com/mx/food/`,
      text: "Food",
    },
    {
      link: "#",
      text: name,
    },
  ];
  const schema = {
    "@context": "http://schema.org/colonia",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": `¿Cómo pedir comida a domicilio en ${name} con DiDi Food?`,
      "url": "https://web.didiglobal.com/mx/food/colonia/",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `1. Descarla la app DiDifood aquí \n2. Elige tu comida favorita entre los mas de 500 restaurantes en ${name} que entregan con DiDifood. \n3. Recibe el 50% de descuento en tu primera orden. \n4. Disfruta de tu antojo`
      }
    },{
      "@type": "Question",
      "name": `¿Cuánto tardará en llegar mi comida con DiDi Food?`,
      "url": "https://web.didiglobal.com/mx/food/colonia/",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `El tiempo medio de entrega es de 27 minutos. En DiDi Food siempre procesamos tu orden tan rápido como nos es posible. Puedes ver una estimación del tiempo que nos llevará entregar tu comida en la app: Descarla la app DiDifood aquí`
      }
    },{
      "@type": "Question",
      "name": `¿Qué restaurantes llevan comida domicilio en ${name}`,
      "url": "https://web.didiglobal.com/mx/food/colonia/",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `En el App de DiDifood encontraras mas de null restaurantes con entrega a domicilio en ${name}`
      }
    },{
      "@type": "Question",
      "name": `¿Hace DiDi Food entregas de comida en ${name}?`,
      "url": "https://web.didiglobal.com/mx/food/colonia/",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `Si, Didi Food hace entregas de comida en ${name} y esta disponible en más de 70 ciudades de Mexico. Llevate tu primera orden a mitad de precio!`
      }
    }, {
      "@type": "Question",
      "name": `¿Es seguro pedir comida con DiDi Food?`,
      "url": "https://web.didiglobal.com/mx/food/colonia/",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `A veces puede ser estresante pedir comida a domicilio. Por lo tanto, nos asegurarnos bien de que tú, tu comida y tus datos estén siempre seguros y protegidos.`
      }
    }
  ]
  }

  return (
    <Layout
      title={`Pide Comida a Domicilio  en ${name} CDMX`}
      desc={`¿Qué se te antoja en este momento? Pide tu Comida a Domicilio en ${name} CDMX por DiDi Food y disfruta de los mejores restaurantes de Tláhuac, en minutos.`}
      customBreadcrumb={customBreadcrumb}
      schemaMarkup={schema}
    >
      <FoodCityHero
        bgImage={foodHeroBgImage}
        data={data.contentfulCity}
      ></FoodCityHero>
      <FoodCityBannerCTA
        data={data.contentfulCity}
        image={foodBusinessCTAImage}
      ></FoodCityBannerCTA>
      <FoodCityRestaurantCTA
        data={data.contentfulCity}
        image={foodDeliveryCTAImage}
      ></FoodCityRestaurantCTA>
      <FoodCityBannerCTA2
        data={data.contentfulCity}
        image={foodDeliveryCTAImage}
      ></FoodCityBannerCTA2>
      <FoodCityList data={itemsList}></FoodCityList>
      <FoodCityBannerCTA3
        data={data.contentfulCity}
        image={foodCTA3Image}
      ></FoodCityBannerCTA3>
      {/* <FoodAppDownloads images={foodDeliveryDownloadsImages}></FoodAppDownloads> */}
    </Layout>
  );
};

export default FoodCity;

export const query = graphql`
  query ($id: String) {
    allContentfulCity(
      filter: { id: { ne: $id }, country: { code: { eq: "mx" } } }
    ) {
      nodes {
        id
        name
        slug
      }
    }
    contentfulCity(id: { eq: $id }) {
      name
      slug
    }
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(mx.FoodHero.bgImage)|(mx.FoodBusinessCTA.image)|(mx.FoodDeliveryCTA.image)|(mx.FoodCTA.image)|(mx.FoodDeliveryDownloads.image)/"
        }
      }
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
