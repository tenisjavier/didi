// @desc SEO meta definition per path

// @desc seoMeta is for static pages
const seoMeta = {
  cl: {
    "/": {
      title: "Regístrate como Socio Conductor DiDi",
      desc: "DiDi en Chile, regístrate como socio conductor en las categorías express, taxi y fleet ganando más y manejando menos. Si eres Socio Conductor 2 3304 0932 Si eres Pasajero 2 3304 0931",
    },
    "/pasajero/": {
      title: "Pide un DiDi y Viaja Seguro",
      desc: "Pasajero. DiDi en Chile, regístrate como socio conductor en las categorías express, taxi y fleet ganando más y manejando menos. Si eres Socio Conductor 2 3304 0932 Si eres Pasajero 2 3304 0931",
    },
    "/driver/": {
      title: "Socios Conductores DiDi - Maneja y Genera Dinero",
      desc: "Driver Page. DiDi en Chile, regístrate como socio conductor en las categorías express, taxi y fleet ganando más y manejando menos. Si eres Socio Conductor 2 3304 0932 Si eres Pasajero 2 3304 0931",
    },
    "/taxi/": {
      title: "Maneja como Socio Taxista DiDi Registrándote Acá",
      desc: "DiDi en Chile, regístrate como socio conductor en las categorías express, taxi y fleet ganando más y manejando menos. La App nº1 en movilidad llegó.",
    },
    "/seguridad/": {
      title: "En DiDi tu Seguridad es nuestra prioridad conoce más acá",
      desc: "Conoce aquí las funcionalidades y medidas de seguridad que hemos tomado para que en tu próximo viajes lo disfrutes al máximo.",
    },
    "/centro-de-ayuda/": {
      title: "Centro de Ayuda DiDi - App nº1 en movilidad del mundo",
      desc: "Conoce aquí las funcionalidades y medidas de seguridad que hemos tomado para que en tu próximo viajes lo disfrutes al máximo.",
    },
    "/direcciones/": {
      title: "Cómo llegar a distintos puntos de Chile",
      desc: "Conoce aquí cuánto tiempo te tomaría llegar hacia un lugar en transporte público vs DiDi",
    },
  },
};

//@desc func that is used in SEO component for getting the title and desc of a page
// @params country is the country code and path
const getMetaByPath = (country, path) => {
  const placeRegex = /\/direcciones\/(.+)/;
  const defaultMetas = {
    title: "DiDi: APP de Movilidad",
    desc: "DiDi en Chile, regístrate como socio conductor en las categorías express, taxi y fleet ganando más y manejando menos. Si eres Socio Conductor 2 3304 0932 Si eres Pasajero 2 3304 0931",
  };

  //logic for dynamic pages places and directions
  const subfolder = path.match(/([^\/]*)\/*$/)[1];
  const placeTitle = subfolder
    .substring(0, subfolder.indexOf("_"))
    .replace(/-/g, " ")
    .replace(/\b(\w)/g, (s) => s.toUpperCase());

  const metas = placeRegex.test(path)
    ? {
        title: placeTitle,
        desc: `${placeTitle}. Pasajero. DiDi en Chile, regístrate como socio conductor en las categorías express, taxi y fleet ganando más y manejando menos. Si eres Socio Conductor 2 3304 0932 Si eres Pasajero 2 3304 0931`,
      }
    : defaultMetas;

  return seoMeta[country][path] || metas;
};

module.exports = { getMetaByPath };
