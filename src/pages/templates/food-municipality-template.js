import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import FoodCityHero from "../../components/sections/FoodCityHero";
import FoodCityBannerCTA from "../../components/sections/FoodCityBannerCTA";
import FoodCityBannerCTA2 from "../../components/sections/FoodCityBannerCTA2";
import FoodCityBannerCTA3 from "../../components/sections/FoodCityBannerCTA3";
import FoodCityRestaurantCTA from "../../components/sections/FoodCityRestaurantCTA";
import FoodMunicipalityList from "../../components/sections/FoodMunicipalityList";
import FoodAppDownloads from "../../components/sections/FoodAppDownloads";
import FoodNeighborhoodList from "../../components/sections/FoodNeighborhoodList";

const FoodCity = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const cities = data.allContentfulMunicipality.nodes;
  const neighbourhoods = data.allContentfulNeighbourhood.nodes;
  const name = data.contentfulMunicipality.name;
  const cityName = data.contentfulMunicipality.city.name;
  const citySlug = data.contentfulMunicipality.city.slug;

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
      link: `https://web.didiglobal.com/mx/food/${citySlug}`,
      text: cityName,
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
      title={`Pide Comida a Domicilio  en ${name} CDMX `}
      desc={`¿Qué se te antoja en este momento? Pide tu Comida a Domicilio en ${name} CDMX por DiDi Food y disfruta de los mejores restaurantes de Tláhuac, en minutos.`}
      customBreadcrumb={customBreadcrumb}
      schemaMarkup={schema}
    >
      <FoodCityHero
        bgImage={foodHeroBgImage}
        data={data.contentfulMunicipality}
      ></FoodCityHero>
      <FoodCityBannerCTA
        data={data.contentfulMunicipality}
        image={foodBusinessCTAImage}
      ></FoodCityBannerCTA>
      <FoodCityRestaurantCTA
        data={data.contentfulMunicipality}
        image={foodDeliveryCTAImage}
      ></FoodCityRestaurantCTA>
      <FoodCityBannerCTA2
        data={data.contentfulMunicipality}
        image={foodDeliveryCTAImage}
      ></FoodCityBannerCTA2>
      <FoodMunicipalityList data={cities}></FoodMunicipalityList>
      <FoodCityBannerCTA3
        data={data.contentfulMunicipality}
        image={foodCTA3Image}
      ></FoodCityBannerCTA3>
      {/* <FoodAppDownloads images={foodDeliveryDownloadsImages}></FoodAppDownloads> */}
      <FoodNeighborhoodList data={neighbourhoods}></FoodNeighborhoodList>
    </Layout>
  );
};

export default FoodCity;

export const query = graphql`
  query ($id: String) {
    contentfulMunicipality(id: { eq: $id }) {
      name
      slug
      neighbourhood {
        name
      }
      city {
        name
        slug
      }
    }
    allContentfulMunicipality(
      filter: { id: { ne: $id }, city: { country: { code: { eq: "mx" } } } }
    ) {
      nodes {
        name
        slug
        neighbourhood {
          name
        }
        city {
          name
        }
      }
    }
    allContentfulNeighbourhood(
      filter: { municipality: { id: { eq: $id } } }
      sort: { name: ASC }
    ) {
      nodes {
        name
        slug
        municipality {
          name
        }
        city {
          name
        }
      }
    }
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(mx.FoodHero.bgImage)|(mx.FoodBusinessCTA.image)|(mx.FoodDeliveryCTA.image)|(mx.FoodDeliveryDownloads.image)|(mx.FoodCTA.image)/"
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
