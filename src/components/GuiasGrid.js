import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
const GuiasGrid = ({guias}) => {
    
    return ( 
        <main className="min-h-screen bg-orange-primary pt-48 px-10 2xl:px-80 ">
            <div  className="flex w-full justify-center lg:justify-between flex-wrap mb-4 ">
                <h1 className="text-white text-c lg:text-left  text-4xl font-bold">Guias para Socios Conductores</h1>
                <StaticImage
                src="../images/CL-SEO-Car.png"
                alt="Car"
                className="mt-3 lg:mt-0"
                width={200}
                />
            </div>
            <div  className="flex justify-center lg:justify-between w-full flex-wrap">
                 {guias.map( (guia, index) => {
                     return (
                        <Link to={guia.slug}>
                        <div className="h-80 flex-shrink-0 hover:-translate-y-2 cursor-pointer transition duration-150 " key={index}>
                            <img src={guia.featuredImage.node.mediaItemUrl} alt="" className="w-96 h-52 object-cover rounded-lg shadow-lg "/>
                            <h1 className="text-white text-2xl font-bold mt-4 group-hover:text-blue-500 w-96">{guia.title}</h1>
                        </div>
                        </Link>
                     )
                 })}
            </div>

        </main>
    );
}
 
export default GuiasGrid;