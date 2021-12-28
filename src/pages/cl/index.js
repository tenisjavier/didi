import React from "react";
import Layout from "../../components/Layout";
import SectionTemplate from "../../components/sections/SectionTemplate";

const Index = () => {
  return (
    <Layout>
      <SectionHomeMain></SectionHomeMain>

      <SectionHomeSafety></SectionHomeSafety>

      <SectionHomeDrv></SectionHomeDrv>

      <SectionHomePax></SectionHomePax>
    </Layout>
  );
};

const SectionHomeMain = () => {
  const props = {
    title: "MUÉVETE POR TU CIUDAD",
    textColor: "white",
    bgImage: "bg-orange-pax-red",
    bgImageAlt: "Pasajera Subiendo a DiDi",
    btnType: "both",
    btnMode: "light",
    alignItems: "items-start",
  };
  return <SectionTemplate {...props}></SectionTemplate>;
};

const SectionHomeSafety = () => {
  const props = {
    title: "EN DIDI, TU SEGURIDAD NO ES UN MITO",
    desc: "Revisa todas las funciones de seguridad que tiene nuestra app, antes, durante y después de cada viaje",
    textColor: "white",
    bgColor: "bg-sky-500",
    image: "logo-funciones-seguridad",
    imageAlt: "seguridad logo",
    btnText: "Saber Más",
    btnLink: "/seguridad/",
    btnMode: "light",
    reverse: "true",
  };
  return <SectionTemplate {...props}></SectionTemplate>;
};

const SectionHomeDrv = () => {
  const props = {
    title: "MANEJA CON DiDi",
    desc: "Conéctate con nuestros servicios de autos particulares o taxi de manera más segura y empieza a generar ingresos extra con DiDi.Ahorra para tus vacaciones soñadas, paga la educación de tus hijos o complementa tus ingresos conectándose a la app de movilidad más grande del mundo en tu tiempo libre.Regístrate en DiDi con tus datos y los de tu vehículo y comienza a generar ingresos adicionales. Estarás activo entre 24 a 48 horas para que empieces a manejar.",
    textColor: "gray-primary",
    bgColor: "white",
    image: "driver-window",
    imageAlt: "conductor didi",
    imageRounded: "full",
    btnType: "drv",
  };
  return <SectionTemplate {...props}></SectionTemplate>;
};

const SectionHomePax = () => {
  const props = {
    title: "¡Elige DiDi!",
    desc: "La app de movilidad que te conecta con autos particulares y taxis de forma segura para que tengas un viaje increíble. Disfruta de amplia disponibilidad, mayor cobertura, soporte 24/7 y precios bajos en nuestros servicios de Express y DiDi Pasajero y conéctate tu próximo viaje con la app de movilidad en la que recibes más por lo que pagas.",
    textColor: "white",
    bgColor: "bg-orange-primary",
    image: "woman-phone-car",
    imageAlt: "mujer usando didi",
    imageRounded: "full",
    btnType: "pax",
    btnMode: "light",
    reverse: "true",
  };
  return <SectionTemplate {...props}></SectionTemplate>;
};

export default Index;
