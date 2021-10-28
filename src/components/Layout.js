import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
    const tags = [{cont: "Pasajero", drop: true, list: ["Socio Conductor", "Conductor Santiago"]}, {cont: "DiDi Conductor", drop: true, list: ["Socio Conductor", "Conductor Santiago"]}, {cont: "DiDi Taxi", drop:false}];
    const links = [{mainPath:"https://chile.didiglobal.com/pasajero/",secPath: ["https://chile.didiglobal.com/driver", "https://chile.didiglobal.com/driver/santiago"]}, {mainPath:"https://chile.didiglobal.com/driver", secPath: ["https://chile.didiglobal.com/driver", "https://chile.didiglobal.com/driver/santiago"]},
     {mainPath: "https://chile.didiglobal.com/taxi", secPath:[]}];
    const isSearch = false; 
    return (
        <>
        <Header tagList={tags} linkList={links} withSearch={isSearch}></Header>
            <body style={{minHeight:"1000px"}}>
                {children}
            </body>
        <Footer></Footer>
        </>
    )
}

export default Layout
