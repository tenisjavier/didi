import React, { useState } from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import FoodBusinessCTA from "../../../components/sections/FoodBusinessCTA";
import FoodColumns from "../../../components/sections/FoodColumns";
import FoodDeliveryCTA from "../../../components/sections/FoodDeliveryCTA";
import DiDiFoodCarousel from "../../../components/sections/Food/DiDiFoodCarousel";
import HeroCarrousel from "../../../components/sections/HeroCarrousel";
import FoodDeliveryHero from "../../../components/sections/FoodDeliveryHero";
import FoodBusinessHero from "../../../components/sections/FoodBusinessHero";
import FoodHero from "../../../components/sections/FoodHero";

const Food = ({ data }) => {
  const [activeHero, setActiveHero] = useState(0);
  const updateHero = (id) => {
    setActiveHero(id);
  };

  const images = data.allContentfulAsset.nodes;

  const foodColumnsImages = images.filter((image) => {
    return image.title.indexOf("cr.FoodColumns.image") !== -1;
  });
  const foodBusinessCTAImage = images.filter((image) => {
    return image.title === "cr.FoodBusinessCTA.image";
  })[0];
  const foodDeliveryCTAImage = images.filter((image) => {
    return image.title === "cr.FoodDeliveryCTA.image";
  })[0];
  const DiDiFoodCarouselImages = images.filter((image) => {
    return image.title === "cr.DiDiFoodCarousel.image";
  });

  const foodHeroBgImage = images.filter((image) => {
    return image.title === "cr.FoodHero.bgImage";
  })[0];
  const foodHeroBgImageMobile = images.filter((image) => {
    return image.title === "cr.FoodHeroMobile.bgImage";
  })[0];

  const repartidoresHeroBgImage = images.filter((image) => {
    return image.title === "cr.FoodDeliveryHero.bgImage";
  })[0];
  const repartidoresHeroBgImageMobile = images.filter((image) => {
    return image.title === "cr.FoodDeliveryHeroMobile.bgImage";
  })[0];

  const restaurantHeroBgImage = images.filter((image) => {
    return image.title === "cr.FoodBusinessHero.bgImage";
  })[0];
  const restaurantHeroBgImageMobile = images.filter((image) => {
    return image.title === "cr.FoodBusinessHeroMobile.bgImage";
  })[0];

  const carrouselIcons0 = images.filter((image) => {
    return image.title === "carousel_food_icon";
  })[0];
  const carrouselIcons1 = images.filter((image) => {
    return image.title === "carousel_courier_icon";
  })[0];
  const carrouselIcons2 = images.filter((image) => {
    return image.title === "carousel_restaurant_icon";
  })[0];

  const carrouselIcons = [carrouselIcons0, carrouselIcons1, carrouselIcons2];

  //Set the order of the carousel's brands.
  const order = [
    "MCD",
    "Tacobell",
    "Little Caesars",
    "Burger King",
    "Pizza Hut",
    "Ready Pizza",
    "Starbucks",
    "Domino's",
    "Carl's Jr",
    "Nacion Sushi",
    "Pops",
    "Juan Valdez",
    "Papa Johns",
    "Johnny Rockets",
    "Tico Burguesas",
    "Spoon",
  ];

  const DiDiFoodCarouselImagesSorted = DiDiFoodCarouselImages.sort((a, b) => {
    const indexA = order.indexOf(a.description);
    const indexB = order.indexOf(b.description);

    if (indexA !== -1 && indexB !== -1) {
      return indexA - indexB;
    }

    if (indexA !== -1) {
      return -1;
    } else if (indexB !== -1) {
      return 1;
    }

    return 0;
  });

  return (
    <Layout sb={false}>
      <div className="carousel-section">
        <div
          className={`${activeHero !== 0 && "hidden"} carousel-section-item`}
        >
          <FoodHero
            desc=" "
            bgImage={foodHeroBgImage}
            mobileBgImage={foodHeroBgImageMobile}
            mobileTitlePosition="top"
          ></FoodHero>
        </div>
        <div
          className={`${activeHero !== 1 && "hidden"} carousel-section-item`}
        >
          <FoodDeliveryHero
            desc=" "
            bgImage={repartidoresHeroBgImage}
            mobileBgImage={repartidoresHeroBgImageMobile}
            mobileTitlePosition="top"
          ></FoodDeliveryHero>
        </div>
        <div
          className={`${activeHero !== 2 && "hidden"} carousel-section-item`}
        >
          <FoodBusinessHero
            desc=" "
            bgImage={restaurantHeroBgImage}
            mobileBgImage={restaurantHeroBgImageMobile}
            mobileTitlePosition="top"
          ></FoodBusinessHero>
        </div>
        <HeroCarrousel
          images={carrouselIcons}
          updateHero={updateHero}
          position="onHero"
        ></HeroCarrousel>
<<<<<<< HEAD
        {version === "b" && (
          <DiDiFoodCarousel
            images={DiDiFoodCarouselImagesSorted}
          ></DiDiFoodCarousel>
        )}
      </div>
=======
      </>
>>>>>>> 778f85d3a7c9b72e3395db36d577cd94907121c4

      <FoodColumns images={foodColumnsImages}></FoodColumns>

      <DiDiFoodCarousel
        images={DiDiFoodCarouselImagesSorted}
      ></DiDiFoodCarousel>
      <FoodBusinessCTA image={foodBusinessCTAImage}></FoodBusinessCTA>
      <FoodDeliveryCTA image={foodDeliveryCTAImage}></FoodDeliveryCTA>
    </Layout>
  );
};

export default Food;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(carousel_food_icon)|(carousel_courier_icon)|(carousel_restaurant_icon)|(cr.FoodHero.bgImage)|(cr.FoodHeroMobile.bgImage)|(cr.FoodBusinessHero.bgImage)|(cr.FoodBusinessHeroMobile.bgImage)|(cr.FoodDeliveryHero.bgImage)|(cr.FoodDeliveryHeroMobile.bgImage)|(cr.FoodColumns.image)|(cr.FoodBusinessCTA.image)|(cr.FoodDeliveryCTA.image)|(cr.DiDiFoodCarousel.image)/"
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
  }
`;
