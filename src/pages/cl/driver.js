import React from "react";
import Layout from "../../components/Layout";
import SectionTemplate from "../../components/sections/SectionTemplate";
import SilderSection from "../../components/sections/SliderSection";
import Requerimientos from "../../components/sections/Requerimiento";
const Pasajero = () => {
  return (
    <Layout>
      <SectionDrvMain></SectionDrvMain>
      <SilderSection title="Hay un DiDi Para ti"></SilderSection>
      <Requerimientos></Requerimientos>
    </Layout>
  );
};

const SectionDrvMain = () => {
  const props = {
    title: "MANEJA CON DiDi",
    desc: "Para DiDi, los socios conductores y socios taxistas son muy importantes. Por eso, nos preocupamos por tener tasas de servicio competitivas que beneficien los ingresos de los socios conductores.",
    textColor: "white",
    bgImage: "bg-orange-drv-green",
    bgImageAlt: "conductor didi",
    btnType: "drv",
    btnMode: "light",
  };
  return <SectionTemplate {...props}></SectionTemplate>;
};
export default Pasajero;
