// @desc SEO meta definition per path

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
      title: "Maneja como Socio Taxista DiDi registrándote acá | DiDi Chile",
      desc: "DiDi en Chile, regístrate como socio conductor en las categorías express, taxi y fleet ganando más y manejando menos. La App nº1 en movilidad llegó.",
    },
    "/seguridad/": {
      title:
        "En DiDi tu Seguridad es nuestra prioridad conoce más acá | DiDi Chile",
      desc: "Conoce aquí las funcionalidades y medidas de seguridad que hemos tomado para que en tu próximo viajes lo disfrutes al máximo.",
    },
    "/centro-de-ayuda/": {
      title:
        "Centro de Ayuda DiDi - App nº1 en movilidad del mundo | DiDi Chile",
      desc: "Conoce aquí las funcionalidades y medidas de seguridad que hemos tomado para que en tu próximo viajes lo disfrutes al máximo.",
    },
  },
};

const getMetaByPath = (country, path) => {
  const defaultMetas = {
    title: "DiDi: APP de Movilidad",
    desc: "DiDi en Chile, regístrate como socio conductor en las categorías express, taxi y fleet ganando más y manejando menos. Si eres Socio Conductor 2 3304 0932 Si eres Pasajero 2 3304 0931",
  };

  return seoMeta[country][path] || defaultMetas;
};

module.exports = { getMetaByPath };
