import React from 'react';
import { graphql } from 'gatsby'  
import Layout from '../../components/Layout';
import GuiasGrid from '../../components/GuiasGrid';
const Guias = ({data}) => {
    console.log(data);
    return ( 
    <Layout>
        <GuiasGrid guias={data.wpChile.allGuia.nodes}/>
    </Layout>
    );
}

export const query = graphql`
    query{
        wpChile {
        allGuia {
            nodes {
            title
            slug
            featuredImage {
                node {
                mediaItemUrl
                }
            }
            }
        }
        }
    }
`
export default Guias;