import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
const GuiasGrid = () => {
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
                <div className="h-80 flex-shrink-0">
                    <StaticImage
                    src="../images/index_img.png"
                    alt="Car"
                    className=""
                    width={320}
                    />
                    <h1 className="text-white text-2xl font-bold mt-4">Hoja de Vida conductor</h1>
                </div>

                <div className="h-80 flex-shrink-0">
                    <StaticImage
                    src="../images/index_img.png"
                    alt="Car"
                    className=""
                    width={320}
                    />
                    <h1 className="text-white text-2xl font-bold mt-4">Hoja de Vida conductor</h1>
                </div>

                <div className="h-80 flex-shrink-0">
                    <StaticImage
                    src="../images/index_img.png"
                    alt="Car"
                    className=""
                    width={320}
                    />
                    <h1 className="text-white text-2xl font-bold mt-4">Hoja de Vida conductor</h1>
                </div>
            </div>

            <div  className="flex justify-center lg:justify-between w-full flex-wrap">
                <div className="h-80 flex-shrink-0">
                    <StaticImage
                    src="../images/index_img.png"
                    alt="Car"
                    className=""
                    width={320}
                    />
                    <h1 className="text-white text-2xl font-bold mt-4">Hoja de Vida conductor</h1>
                </div>

                <div className="h-80 flex-shrink-0">
                    <StaticImage
                    src="../images/index_img.png"
                    alt="Car"
                    className=""
                    width={320}
                    />
                    <h1 className="text-white text-2xl font-bold mt-4">Hoja de Vida conductor</h1>
                </div>

                <div className="h-80 flex-shrink-0">
                    <StaticImage
                    src="../images/index_img.png"
                    alt="Car"
                    className=""
                    width={320}
                    />
                    <h1 className="text-white text-2xl font-bold mt-4">Hoja de Vida conductor</h1>
                </div>
            </div>
        </main>
    );
}
 
export default GuiasGrid;