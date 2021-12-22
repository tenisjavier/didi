import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Search from './Search';
const ArticlesGrid = () => {
    return ( 
        <div className="min-h-screen">
            <section className="w-full h-72 bg-orange-primary pt-20">
                <div className="w-9/12 mx-auto h-full">
                    <StaticImage
                        src="../images/DiDi-Articulos-Logo-B.png"
                        alt="didi article logo"
                        className="mt-5 w-80 xl:w-100"
                    />
                    <p className="text-white text-lg xl:text-2xl mt-3">
                    Bienvenidos a nuestra sección de novedades y artículos de interés.
                    </p>
                </div>
            </section>

            <main className="w-9/12 mx-auto h-full mt-10">
                <div className="flex justify-between">
                    <h1 className="text-black text-4xl font-bold">Últimos Artículos Publicados</h1>
                    <Search placeholder="articulos"/>
                </div> 
              
                <div class="border-8 border-indigo-600 h-16 w-44 border1 "></div>
            </main>
        </div>
     );
}
 
export default ArticlesGrid;