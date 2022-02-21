import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import ListSection from "../ListSection";
import slugify from "react-slugify";

const CityList = () => {
    const countryCode = window.location.pathname.split("/")[1];
    const data = useStaticQuery(graphql`
    {
      allContentfulCountry {
        nodes {
          name
          city {
            name
          }
          code
        }
      }
      }`);
    
    const filterCountry = data.allContentfulCountry.nodes.filter(
        (country) => country.code === countryCode
    );
    const country = filterCountry[0];
    const cities = filterCountry[0].city;

    const items = cities.map((city) => {
      return{
        text: city.name,
        secondText: "",
        link: '/cl/ciudades/lugares-en-' + slugify(city.name),
      }
    });

    const props = {
        title: "Ciudades en " + country.name,
        desc: "Descubre las ciudades de " + country.name + " donde esta operando Didi",
        bgColor: "bg-white",
        textColor: "gray-primary",
        items: items,
    }
    return  <ListSection {...props}></ListSection>
}

export default CityList;