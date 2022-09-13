import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import SafetyDrvImgHero from "../../../components/sections/SafetyDrvImgHero";
import SafetyDrvColumns from "../../../components/sections/SafetyDrvColumns";

const Seguridad = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const safetyHeroImage = images.filter((image) => {
    return image.title === "mx.SafetyDrv.image";
  })[0];
  const safetyBeforeDrvColumns = images.filter((image) => {
    return image.title === "mx.SafetyBeforeDrvColumns.image";
  });
  const safetyDuringDrvColumns = images.filter((image) => {
    return image.title === "mx.SafetyDuringDrvColumns.image";
  });
  const safetyFinishedDrvColumns = images.filter((image) => {
    return image.title === "mx.SafetyFinishDrvColumns.image";
  });
  const safetyCOVIDDrvColumns = images.filter((image) => {
    return image.title === "mx.SafetyCOVIDDrvColumns.image";
  });

  const safetyDrvColumnsBefore = [
    {
      "title": "1. Verificación facial del pasajero",
      "desc": "Si el primer viaje del pasajero es en un horario nocturno, además de la documentación oficial, se deberá realizar una validación facial para poder solicitar el viaje."
    },
    {
      "title": "2. Anonimización del Teléfono",
      "desc": "Encriptamos tu número de teléfono para que el pasajero no tenga tus datos reales. Solo podrán contactarse por temas de servicio a través de la app."
    },
    {
      "title": "3. Contactos de Confianza",
      "desc": "Puedes elegir hasta 5 personas para compartirles tu viaje en tiempo real desde la app."
    },
    {
      "title": "4. Visibilidad del destino",
      "desc": "DiDi es la única app que te muestra el destino del pasajero antes de aceptar el viaje."
    },
    {
      "title": "5. DiDi Invitado",
      "desc": "Se trata de la nueva función para que los pasajeros puedan indicar en la app si están pidiendo el viaje para alguien más. Así, tú sabrás exactamente a quién recoges."
    }
  ];

  const safetyDrvColumnsDuring = [
    {
      "title": "6. Zonas de Riesgo",
      "desc": "Identificamos las zonas de riesgo para protegerte durante el viaje, por lo que no se podrán solicitar viajes desde o hacia estas zonas. Actualmente contamos con cerca de 300 zonas restringidas y se van actualizando de manera constante. "
    },
    {
      "title": "7. Monitoreo de Viaje",
      "desc": "Si necesitas ayuda, presiona el Botón de Emergencia dentro de tu app para enlazarte al 911. Además, DiDi rastrea tu ubicación exacta."
    },
    {
      "title": "8. Compartir Viaje",
      "desc": "Comparte los datos y ubicación del viaje en tiempo real, desde la app."
    },
    {
      "title": "9. Grabación de Audio Manual o Automática",
      "desc": "En cada viaje tienes la opción de grabar el audio de tu viaje, o también puedes activar la grabación automática para que todos tus viajes se graben sin excepción. Tranquilo, escuchamos tu audio solo si reportas un incidente de seguridad. Puedes reportar usando el Botón de Emergencia."
    },
    {
      "title": "10. Botón de Emergencia",
      "desc": "Si necesitas ayuda, presiona el Botón de Emergencia dentro de tu app para enlazarte al 911 y DiDi rastreará tu ubicación exacta."
    },
    {
      "title": "11. Localización GPS",
      "desc": "Monitoreamos todos los viajes para que, si reportas un incidente, podamos reaccionar de forma inmediata."
    },
    {
      "title": "12. Alianza con C5",
      "desc": "Nos unimos al C5 de Guadalajara y del Estado de México. En caso de que necesites ayuda, se les notificará cuando presiones el Botón de Emergencia para que puedan asistirte."
    },
    {
      "title": "13. Cámaras de Seguridad DiDi",
      "desc": "Instalamos cámaras en más de 900 vehículos en Guadalajara. Si detectas alguna situación de riesgo, puedes presionar el Botón de Emergencia y se comenzará a grabar el video del viaje. Soporte DiDi recibe una alerta para evaluar la situación en tiempo real y, de ser necesario, enviar apoyo a tu ubicación. *Disponible solo en Guadalajara."
    },
    {
      "title": "14. DiDi Mujer",
      "desc": "¿Eres conductora? Con DiDi puedes decidir si quieres realizar viajes solo con pasajeras mujeres."
    },
    {
      "title": "15. Viaje con Cobertura",
      "desc": "Cuando viajas en DiDi tienes una cobertura de responsabilidad civil que incluye gastos médicos por siniestro."
    },
    {
      "title": "16. Inteligencia Artificial",
      "desc": "Usamos AI para cuidarte durante tus viajes. Nuestros modelos Hércules, Clío y Temis analizan características de los viajes, los pasajeros, zonas, horarios e historial para identificar cualquier riesgo y alertarte o rechazar esa solicitud."
    }
  ];

  const safetyDrvColumnsFinished = [
    {
      "title": "17. Soporte DiDi 24/7",
      "desc": "Llámanos al 800 725 8888, contamos con atención 24/7."
    },
    {
      "title": "18. Califica a tu Pasajero",
      "desc": "Califica a tu pasajero después de cada viaje. Si tuviste una mala experiencia puedes seleccionar “No volver a viajar con este pasajero” y reportar cualquier conducta inapropiada."
    },
    {
      "title": "19. Evita viajar con el mismo pasajero",
      "desc": "Si así lo prefieres, puedes elegir la opción de no volver a viajar con alguna persona."
    }
  ];

  const safetyDrvColumnsCOVID = [
    {
      "title": "20. DiDi Prevent",
      "desc": "Al conectarse, todos los conductores pasan por una verificación de uso de cubrebocas a través de inteligencia artificial. Para completarla, deben mandar una selfie, una foto demostrando que desinfectaron su vehículo y voluntariamente reportan su temperatura corporal dentro de los límites normales. Cuando aprueban la validación, comienzan a recibir viajes."
    },
    {
      "title": "21. Barrera Plástica y Material Desinfectante",
      "desc": "Los conductores pueden instalar una división plástica para separar los asientos delanteros de los traseros. Deben usar cubrebocas y tener líquido desinfectante a tu disposición."
    }
  ];
  console.log(safetyBeforeDrvColumns);
  return (
    <Layout>
      <SafetyDrvImgHero image={safetyHeroImage}></SafetyDrvImgHero>
      <SafetyDrvColumns title="Antes del viaje" columns={safetyDrvColumnsBefore} images={safetyBeforeDrvColumns.reverse()}></SafetyDrvColumns>
      <SafetyDrvColumns title="Durante el viaje" columns={safetyDrvColumnsDuring} images={safetyDuringDrvColumns.reverse()}></SafetyDrvColumns>
      <SafetyDrvColumns title="Al finalizar el viaje" columns={safetyDrvColumnsFinished} images={safetyFinishedDrvColumns.reverse()}></SafetyDrvColumns>
      <SafetyDrvColumns title="Seguridad ante COVID-19" desc="Para DiDi es muy importante seguir los lineamientos de protección ante el COVID-19. Por eso implementamos las siguientes medidas de prevención:" columns={safetyDrvColumnsCOVID} images={safetyCOVIDDrvColumns.reverse()}></SafetyDrvColumns>
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
      filter: { title: { regex: "/(mx.SafetyDrv.image)|(mx.SafetyBeforeDrvColumns.image)|(mx.SafetyCOVIDDrvColumns.image)|(mx.SafetyDuringDrvColumns.image)|(mx.SafetyFinishDrvColumns.image)/" } }
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
