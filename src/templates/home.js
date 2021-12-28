import React from "react";
import Layout from "../components/Layout";
import SectionCards from "../components/sections/SectionCards";

const HomeTemplate = () => {
  const bgColor = "bg-orange-primary";
  const cards = [
    {
      title: "Amplia disponibilidad y cobertura",
      desc: "Tenemos opciones que se adaptan a tus necesidades de movilidad, ¡encuéntranos ahora en todo Chile!",
      bgColor: "bg-white",
      bgTextColor: "",
      image: "https://v1.tailwindcss.com/img/card-top.jpg",
      imageAlt: "Con DiDi puedes viajar pagando menos.",
      btnText: "Saber Más",
      btnLink: "Con DiDi puedes viajar pagando menos.",
      btnMode: "light",
    },
    {
      title: "Precios bajos",
      desc: "Disfruta de viajes tranquilos y de todos nuestros beneficios sin pagar más.",
      bgColor: "bg-white",
      bgTextColor: "text-gray-primary",
      image:
        "https://cdn-icons.flaticon.com/png/512/1055/premium/1055183.png?token=exp=1640714487~hmac=8db86694deb7b1d895b6165ef2d478df",
      imageAlt: "Con DiDi puedes viajar pagando menos.",
      btnText: "Saber Más",
      btnLink: "Con DiDi puedes viajar pagando menos.",
      btnMode: "light",
    },
    {
      title: "Soporte 24/7",
      desc: "Tu seguridad es nuestra prioridad, por eso contamos con soporte telefónico 24/7 para atender todas tus dudas o solicitudes.",
      bgColor: "bg-white",
      bgTextColor: "text-gray-primary",
      image:
        "https://cdn-icons.flaticon.com/png/512/1055/premium/1055183.png?token=exp=1640714487~hmac=8db86694deb7b1d895b6165ef2d478df",
      imageAlt: "Con DiDi puedes viajar pagando menos.",
      btnText: "Saber Más",
      btnLink: "Con DiDi puedes viajar pagando menos.",
      btnMode: "light",
    },
  ];
  return (
    <Layout>
      <SectionCards cards={cards} bgColor={bgColor}></SectionCards>
    </Layout>
  );
};

export default HomeTemplate;
