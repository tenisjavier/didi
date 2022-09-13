import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import SafetyPaxImgHero from "../../../components/sections/SafetyPaxImgHero";
import SafetyPaxColumns from "../../../components/sections/SafetyPaxColumns";

const Seguridad = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const safetyHeroImage = images.filter((image) => {
    return image.title === "mx.SafetyPax.image";
  })[0];
  const safetyBeforePaxColumns = images.filter((image) => {
    return image.title === "mx.SafetyBeforePaxColumns.image";
  });
  const safetyDuringPaxColumns = images.filter((image) => {
    return image.title === "mx.SafetyDuringPaxColumns.image";
  });
  const safetyFinishedPaxColumns = images.filter((image) => {
    return image.title === "mx.SafetyFinishPaxColumns.image";
  });
  const safetyCOVIDPaxColumns = images.filter((image) => {
    return image.title === "mx.SafetyCOVIDPaxColumns.image";
  });

  const safetyPaxColumnsBefore = [
    {
      "title": "1. Verificación de Conductores",
      "desc": "Realizamos una validación estricta del perfil de todos los conductores revisando más de 10 documentos. *Los requisitos pueden cambiar por ciudad."
    },
    {
      "title": "2. Reconocimiento Facial",
      "desc": "Para conectarse a su cuenta, los conductores realizan una prueba de Reconocimiento Facial para validar su identidad."
    },
    {
      "title": "3. Pruebas de Confianza",
      "desc": "En ciertos casos, los conductores realizan una prueba presencial de conducta con reacción pupilar. "
    },
    {
      "title": "4. Información del Viaje",
      "desc": "Antes de subir al auto, la app te mostrará el nombre y la foto del conductor, los filtros seguridad que aprobó, número de viajes, tiempo en la plataforma y los datos del vehículo."
    },
    {
      "title": "5. Anonimización del Teléfono",
      "desc": "Encriptamos tu número de teléfono para que el conductor no tenga tus datos reales. Solo se pueden contactar por temas de servicio a través de la app."
    },
    {
      "title": "6. Contactos de Confianza",
      "desc": "Puedes elegir hasta 5 personas para compartirles tus viajes en tiempo real."
    },
    {
      "title": "7. DiDi Invitado",
      "desc": "¿Le pides el viaje a alguien más? Con esta nueva herramienta tu invitado va a poder ver su viaje en tiempo real desde su teléfono, así como los datos del auto y conductor."
    }
  ];

  const safetyPaxColumnsDuring = [
    {
      "title": "8. Botón de Emergencia",
      "desc": "DiDi trabaja en conjunto con las autoridades para rastrear tu ubicación en tiempo real y enviar ayuda si es necesario."
    },
    {
      "title": "9. Compartir Viaje",
      "desc": "Cuando viajas en DiDi puedes compartir tu ubicación en tiempo real y los datos del viaje."
    },
    {
      "title": "10. Monitoreo de Viaje",
      "desc": "Si necesitas ayuda, presiona el Botón de Emergencia dentro de tu app para enlazarte al 911 y DiDi rastreará tu ubicación exacta."
    },
    {
      "title": "11. Grabación de Audio Manual o Automática",
      "desc": "En cada viaje tienes la opción de grabar el audio de tu viaje, o también puedes activar la grabación automática para que todos tus viajes se graben sin excepción. Calma, escuchamos tu audio solo si reportas un incidente de seguridad. Puedes reportar usando el Botón de Emergencia."
    },
    {
      "title": "12. Alianza con C5",
      "desc": "Nos unimos al C5 de Guadalajara y del Estado de México. En caso de que necesites ayuda, se les notificará cuando presiones el Botón de Emergencia para que puedan asistirte."
    },
    {
      "title": "13. Cámaras de Seguridad",
      "desc": "Instalamos cámaras en más de 900 vehículos en Guadalajara. Si existe alguna situación de riesgo, tu conductor puede presionar el Botón de Emergencia y se comenzará a grabar el video del viaje. Soporte DiDi recibe una alerta para evaluar la situación en tiempo real y, de ser necesario, enviar apoyo a tu ubicación. *Disponible solo en Guadalajara."
    },
    {
      "title": "14. Localización GPS",
      "desc": "Rastreamos por GPS todos los viajes para que, si reportas un incidente, podamos reaccionar de forma inmediata."
    },
    {
      "title": "15. Cobertura Adicional",
      "desc": "Con DiDi cuentas con Cobertura Adicional a la del vehículo para cada viaje; es una cobertura de responsabilidad civil que incluye gastos médicos por siniestro."
    },
    {
      "title": "16. Inteligencia Artificial",
      "desc": "Usamos AI para cuidarte durante tus viajes. Por ejemplo, Pitia es un modelo que analiza hora, lugar y otras variables para asignar solo a conductores más experimentados."
    }
  ];

  const safetyPaxColumnsFinished = [
    {
      "title": "17. Recuperación de Objetos Olvidados",
      "desc": "¿Olvidaste algo en el vehículo? Con DiDi puedes contactar directamente al conductor para acordar la devolución."
    },
    {
      "title": "18. Soporte 24/7",
      "desc": "Llámanos al 800 988 8888, contamos con atención 24/7."
    },
    {
      "title": "19. Califica a tu Conductor",
      "desc": "Califica a tu conductor después de cada viaje. Si tuviste una mala experiencia, puedes seleccionar “No volver a viajar con este conductor” y reportar cualquier conducta inapropiada. También puedes calificar con 5 estrellas si el servicio te gustó mucho."
    }
  ];

  const safetyPaxColumnsCOVID = [
    {
      "title": "20. DiDi Prevent",
      "desc": "Al conectarse, todos los conductores pasan por una verificación de uso de cubrebocas a través de inteligencia artificial. Para completarla, deben mandar una selfie, una foto demostrando que desinfectaron su vehículo y voluntariamente reportan su temperatura corporal dentro de los límites normales. Cuando aprueban la validación comienzan a recibir viajes."
    },
    {
      "title": "21. Barrera Plástica y Material Desinfectante",
      "desc": "Los conductores pueden instalar una división plástica para separar los asientos delanteros de los traseros. Deben usar cubrebocas y tener líquido desinfectante a tu disposición."
    }
  ];
  console.log(safetyBeforePaxColumns);
  return (
    <Layout>
      <SafetyPaxImgHero image={safetyHeroImage}></SafetyPaxImgHero>
      <SafetyPaxColumns title="Antes del viaje" columns={safetyPaxColumnsBefore} images={safetyBeforePaxColumns.reverse()}></SafetyPaxColumns>
      <SafetyPaxColumns title="Durante el viaje" columns={safetyPaxColumnsDuring} images={safetyDuringPaxColumns.reverse()}></SafetyPaxColumns>
      <SafetyPaxColumns title="Al finalizar el viaje" columns={safetyPaxColumnsFinished} images={safetyFinishedPaxColumns.reverse()}></SafetyPaxColumns>
      <SafetyPaxColumns title="Seguridad ante COVID-19" desc="Para DiDi es muy importante seguir los lineamientos de protección ante el COVID-19. Por eso implementamos las siguientes medidas de prevención:" columns={safetyPaxColumnsCOVID} images={safetyCOVIDPaxColumns.reverse()}></SafetyPaxColumns>
    </Layout>
  );
};

export default Seguridad;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allContentfulAsset(
      filter: { title: { regex: "/(mx.SafetyPax.image)|(mx.SafetyBeforePaxColumns.image)|(mx.SafetyCOVIDPaxColumns.image)|(mx.SafetyDuringPaxColumns.image)|(mx.SafetyFinishPaxColumns.image)/" } }
      sort: { fields: title }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
  }
`;
