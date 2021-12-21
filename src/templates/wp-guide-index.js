import React from 'react'; 
import Layout from '../components/Layout';
import GuiasGrid from '../components/GuiasGrid';
const Guias = ({pageContext}) => {
    const { allData: guias } = pageContext;
    return ( 
    <Layout>
        <GuiasGrid guias={guias}/>
    </Layout>
    );
}

export default Guias;