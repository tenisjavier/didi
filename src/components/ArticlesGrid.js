import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Search from './Search';
import ArticleCard from './ArticleCard';
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
                <div className="flex justify-between flex-wrap items-center">
                    <h1 className="text-black text-2xl lg:text-4xl font-bold w-full lg:w-1/2 text-center lg:text-left">Últimos Artículos Publicados</h1>
                    <div className="w-full lg:w-1/3">
                        <Search placeholder="articulos"/>
                    </div>
                </div> 
              
                <div className="mt-6 flex flex-wrap justify-center lg:justify-between ">
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                </div>
            </main>
        </div>
     );
}
 
export default ArticlesGrid;