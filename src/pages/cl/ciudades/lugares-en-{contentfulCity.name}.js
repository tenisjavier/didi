import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import PaxHero from "../../../components/sections/PaxHero";
import DirectoryList from "../../../components/sections/DirectoryList";
const PlacesInCity = ({ data }) => {
    return (
        <Layout>
            <PaxHero></PaxHero>
            <DirectoryList places={data.contentfulCity.place}
            city={data.contentfulCity.name}></DirectoryList>
        </Layout>
    )
}

export const query = graphql`
  query ($id: String) {
    contentfulCity(id: {eq: $id}) {
        name
        place {
            name
            address
            placeId
        }
    } } `

export default PlacesInCity;