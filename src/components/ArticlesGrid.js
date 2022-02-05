import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Search from "./Search";
import ArticleCard from "./ArticleCard";
const ArticlesGrid = ({ articulos }) => {
  return (
    <div className="min-h-screen">
      <section className="bg-orange-primary h-72 w-full pt-20">
        <div className="mx-auto h-full w-9/12">
          <StaticImage
            src="../images/DiDi-Articulos-Logo-B.png"
            alt="didi article logo"
            className="xl:w-100 mt-5 w-80"
          />
          <p className="mt-3 text-lg text-white xl:text-2xl">
            Bienvenidos a nuestra sección de novedades y artículos de interés.
          </p>
        </div>
      </section>

      <main className="mx-auto mt-10 h-full w-9/12">
        <div className="flex flex-wrap items-center justify-between">
          <h1 className="w-full text-center text-2xl font-bold text-black lg:w-1/2 lg:text-left lg:text-4xl">
            Últimos Artículos Publicados
          </h1>
          <div className="w-full lg:w-1/3">
            <Search placeholder="articulos" />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap justify-center lg:justify-between ">
          {articulos.map((articulo, index) => (
            <ArticleCard key={index} article={articulo} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default ArticlesGrid;
