import React from 'react';
import ArticlesGrid from '../components/ArticlesGrid';
import Layout from '../components/Layout';

const Articulos = ({pageContext}) => {
    const { allData: articulos } = pageContext;
    return ( 
    <Layout>
        <ArticlesGrid articulos={articulos}/>
    </Layout>
          );
}
 
export default Articulos;