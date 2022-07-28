// @desc SEO meta definition per path

interface SEOMetaItemInterface {
  title: string;
  desc: string;
}

interface SingleSEOMetaInterface {
  [path: string]: SEOMetaItemInterface;
}

interface AllSEOMetaInterface {
  [countryCode: string]: SingleSEOMetaInterface;
}

const seoMeta: AllSEOMetaInterface = {
  cl: {
    "/": {
      title: "Regístrate como Socio Conductor DiDi",
      desc: "DiDi en Chile, regístrate como socio conductor en las categorías express, taxi y fleet ganando más y manejando menos.",
    },
    "/pasajero/": {
      title: "DiDi Pasajero - Baja la App y Viaja Seguro",
      desc: "DiDi Pasajero. Viaja seguro, barato y rápido. DiDi Express, DiDi Taxi y DiDi Delivery están activos en Chile. Elige la mejor opción.",
    },
    "/driver/": {
      title: "DiDi Conductor - Maneja y Genera Dinero",
      desc: "DiDi Conductor. Revisa los requisitos. Regístrate como socio conductor en las categorías express, taxi y delivery, ganando más y manejando menos.",
    },
    "/didimas/": {
      title: "Club de Beneficios DiDiMás+ para Conductores",
      desc: "Beneficios para Conductores DiDiMás+. DiDi en Chile, regístrate como socio conductor en las categorías express, taxi y fleet ganando más y manejando menos. ",
    },
    "/didimas/copec/": {
      title: "Copec y DiDi - Beneficios para Conductores",
      desc: "Todos los socios conductores y taxistas inscritos en DiDi, que hayan realizado al menos 1 viaje en los últimos 6 meses, podrán acceder al siguiente descuento.",
    },
    "/didimas/carglass/": {
      title: "Carglass y DiDi - Beneficios para Conductores",
      desc: "Carglass es una empresa que se dedica a la reparación y sustitución de vidrios automotrices. Cuenta además con técnicos especializados y una flota para atender tus necesidades a domicilio.",
    },
    "/didimas/autofin/": {
      title: "Autofin y DiDi - Beneficios para Conductores",
      desc: "Autofin es una empresa que se especializa en crédito automotriz y además te asesora en la compra de tu próximo vehículo.",
    },
    "/didimas/movistar/": {
      title: "Movistar y DiDi - Beneficios para Conductores",
      desc: "Contrata por solo $7.990, un plan de telefonía móvil exclusivo que incluye el uso libre de la app DiDi Conductor, sin consumir tus gigas!",
    },
    "/taxi/": {
      title: "DiDi Taxi - Genera Ingresos Extra con DiDi",
      desc: "DiDi en Chile, regístrate como socio conductor en las categorías express, taxi y fleet ganando más y manejando menos. La App nº1 en movilidad llegó.",
    },
    "/food/": {
      title: "Pide comida a través de DiDi Food",
      desc: "Pide comida a domicilio de tus restaurantes favoritos. Es rápido, cómodo y barato. Descarga gratis la app de DiDi Food ¡Recibe tu pedido en minutos!",
    },
    "/food/store/": {
      title: "Inscribe tu Comercio en DiDi Food",
      desc: "Inscribe tu Comercio en DiDi Food y empieza a generar ventas fuera de tu local físico. Expande tu negocio. Es rápido, cómodo y barato. Descarga gratis la app de DiDi Food ¡Recibe tu pedido en minutos!",
    },
    "/food/delivery/": {
      title: "Inscríbete como Repartidor y Gana Dinero en DiDi Food",
      desc: "Como repartidor controlas tus tiempos. Genera ingresos de una manera confiable. Es rápido, cómodo y barato. Descarga gratis la app de DiDi Food ¡Recibe tu pedido en minutos!",
    },
    "/food/about/": {
      title: "La App de Comida Más Confiable",
      desc: "Pide comida a domicilio de tus restaurantes favoritos. Es rápido, cómodo y barato. Descarga gratis la app de DiDi Food ¡Recibe tu pedido en minutos!",
    },
    "/food/contact/": {
      title: "DiDi Food: Contacta nuestro Servicio al Cliente",
      desc: "Si eres repartidos, restaurante o usuario puedes escribirnos por cualquier problema que tengas con DiDi Food.",
    },
    "/food/blog/": {
      title: "Artículos de Comida y Restaurantes",
      desc: "Lee y conoce lugares ricos para ir a comer. Consejos de cocina y más con DiDi Food Blog.",
    },
    "/sobre-didi/": {
      title: "¿Tienes Preguntas sobre DiDi? Revisa las Respuestas",
      desc: "Tanto si eres conductor o usuario de DiDi revisa las principales dudas que el resto de las personas tienen. Así tendrás una mejor experiencia.",
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
    "/guias/": {
      title: "Guías para Conductores DiDi.",
      desc: "Guías educativas para conductores. Entérate de distintos asociados a conducción de un vehículo.",
    },
    "/articulos/": {
      title:
        "Artículos de interés sobre lugares que puedes ir a visitar con DiDi.",
      desc: "Artículos sobre parques, restaurantes, lugares turísticos, etc. Lee sobre distintos destinos.",
    },
    "/ciudades/": {
      title: "Servicios de DiDi por Ciudad.",
      desc: "Conoce que servicios DiDi se encuentran en tu ciudad. Si quieres ser socio conductor revisa los requisitos.",
    },
    "/lugares/": {
      title: "Viaja a Distintos Lugares de Interés",
      desc: "Conoce nuestros términos y condiciones para el uso del sitio web además de nuestras políticas de privacidad.",
    },
    "/legal/": {
      title: "Términos y Condiciones y Políticas de Privacidad.",
      desc: "Conoce nuestros términos y condiciones para el uso del sitio web además de nuestras políticas de privacidad.",
    },
  },
  do: {
    "/": {
      title: "Regístrate como Socio Conductor DiDi",
      desc: "DiDi en República Dominicana, regístrate como socio conductor en las categorías express, taxi y fleet ganando más y manejando menos.",
    },
    "/pasajero/": {
      title: "DiDi Pasajero - Baja la App y Viaja Seguro",
      desc: "DiDi Pasajero. Viaja seguro, barato y rápido. DiDi Express, DiDi Taxi y DiDi Delivery están activos en República Dominicana. Elige la mejor opción.",
    },
    "/driver/": {
      title: "DiDi Conductor - Maneja y Genera Dinero",
      desc: "DiDi Conductor. Revisa los requisitos. Regístrate como socio conductor en las categorías express y moto, ganando más y manejando menos.",
    },
    "/moto/": {
      title: "DiDi Moto - Maneja y Genera Dinero",
      desc: "DiDi en República Dominicana, regístrate como socio conductor en las categorías express, taxi y fleet ganando más y manejando menos. La App nº1 en movilidad llegó.",
    },
    "/food/": {
      title: "Pide comida a través de DiDi Food",
      desc: "Pide comida a domicilio de tus restaurantes favoritos. Es rápido, cómodo y barato. Descarga gratis la app de DiDi Food ¡Recibe tu pedido en minutos!",
    },
    "/food/store/": {
      title: "Inscribe tu Comercio en DiDi Food",
      desc: "Inscribe tu Comercio en DiDi Food y empieza a generar ventas fuera de tu local físico. Expande tu negocio. Es rápido, cómodo y barato. Descarga gratis la app de DiDi Food ¡Recibe tu pedido en minutos!",
    },
    "/food/delivery/": {
      title: "Inscríbete como Repartidor y Gana Dinero en DiDi Food",
      desc: "Como repartidor controlas tus tiempos. Genera ingresos de una manera confiable. Es rápido, cómodo y barato. Descarga gratis la app de DiDi Food ¡Recibe tu pedido en minutos!",
    },
    "/food/about/": {
      title: "La App de Comida Más Confiable",
      desc: "Pide comida a domicilio de tus restaurantes favoritos. Es rápido, cómodo y barato. Descarga gratis la app de DiDi Food ¡Recibe tu pedido en minutos!",
    },
    "/food/contact/": {
      title: "DiDi Food: Contacta nuestro Servicio al Cliente",
      desc: "Si eres repartidos, restaurante o usuario puedes escribirnos por cualquier problema que tengas con DiDi Food.",
    },
    "/food/blog/": {
      title: "Artículos de Comida y Restaurantes",
      desc: "Lee y conoce lugares ricos para ir a comer. Consejos de cocina y más con DiDi Food Blog.",
    },
    "/sobre-didi/": {
      title: "¿Tienes Preguntas sobre DiDi? Revisa las Respuestas",
      desc: "Tanto si eres conductor o usuario de DiDi revisa las principales dudas que el resto de las personas tienen. Así tendrás una mejor experiencia.",
    },
    "/seguridad/": {
      title: "En DiDi tu Seguridad es nuestra prioridad conoce más acá",
      desc: "Conoce aquí las funcionalidades y medidas de seguridad que hemos tomado para que en tu próximo viajes lo disfrutes al máximo.",
    },
    "/centro-de-ayuda/": {
      title: "Centro de Ayuda DiDi - App nº1 en movilidad del mundo",
      desc: "Conoce aquí las funcionalidades y medidas de seguridad que hemos tomado para que en tu próximo viajes lo disfrutes al máximo.",
    },
    "/guias/": {
      title: "Guías para Conductores DiDi.",
      desc: "Guías educativas para conductores. Entérate de distintos asociados a conducción de un vehículo.",
    },
    "/articulos/": {
      title:
        "Artículos de interés sobre lugares que puedes ir a visitar con DiDi.",
      desc: "Artículos sobre parques, restaurantes, lugares turísticos, etc. Lee sobre distintos destinos.",
    },
  },
  ar: {
    "/": {
      title: "Registrate como Socio Conductor DiDi",
      desc: "DiDi en Argentina, registrate como socio conductor en las categorías express y taxi ganando más y manejando menos. Si sos Socio Conductor llamános al +54 (11) 5353-4474",
    },
    "/pasajero/": {
      title: "Pedí un DiDi y Viajá Seguro",
      desc: "DiDi Pasajero. DiDi en Argentina, viajá seguro, barato y rápido. DiDi Express y DiDi Taxi están activos en Argentina. Elegí la mejor opción.",
    },
    "/driver/": {
      title: "DiDi Conductor - Manejá y Generá Dinero",
      desc: "DiDi Conductor, registrate como socio conductor en la categoría de express o taxi, ganando más y manejando menos. Si sos Socio Conductor llamános al +54 (11) 5353-4474",
    },
    "/taxi/": {
      title: "DiDi Taxi - Generá Ingresos Extra con DiDi",
      desc: "DiDi Taxi. Revisá los requisitos y registrate como socio taxista DiDi, ganando más y manejando menos. Si sos Socio Conductor llamános al +54 (11) 5353-4474",
    },

    "/sobre-didi/": {
      title: "Tenés Preguntas sobre DiDi? Revisá las Respuestas",
      desc: "Tanto si sos conductor o usuario de DiDi revisá las principales dudas que el resto de las personas tienen. Así tendrás una mejor experiencia.",
    },
    "/seguridad/": {
      title: "En DiDi tu Seguridad es nuestra prioridad conocé más acá",
      desc: "Conocé aquí las funcionalidades y medidas de seguridad que hemos tomado para que en tu próximo viajes lo disfrutés al máximo.",
    },
    "/centro-de-ayuda/": {
      title: "Centro de Ayuda DiDi - App nº1 en movilidad del mundo",
      desc: "Conoce aquí las funcionalidades y medidas de seguridad que hemos tomado para que en tu próximo viajes lo disfrutes al máximo.",
    },
    "/direcciones/": {
      title: "Cómo llegar a distintos puntos de Argentina",
      desc: "Conocé aquí cuánto tiempo te tomaría llegar hacia un lugar en transporte público vs DiDi",
    },
    "/guias/": {
      title: "Guías para Conductores DiDi.",
      desc: "Guías educativas para conductores. Enterate de distintos asociados a conducción de un vehículo.",
    },
    "/articulos/": {
      title:
        "Artículos de interés sobre lugares que podés ir a visitar con DiDi.",
      desc: "Artículos sobre parques, restaurantes, lugares turísticos, etc. Leé sobre distintos destinos.",
    },
    "/ciudades/": {
      title: "Servicios de DiDi por Ciudad.",
      desc: "Conocé que servicios DiDi se encuentran en tu ciudad. Si querés ser socio conductor revisá los requisitos.",
    },
    "/legal/": {
      title: "Términos y Condiciones y Políticas de Privacidad.",
      desc: "Conocé nuestros términos y condiciones para el uso del sitio web además de nuestras políticas de privacidad.",
    },
  },
  pe: {
    "/": {
      title: "Regístrate como Socio Conductor DiDi",
      desc: "DiDi en Perú, regístrate como socio conductor en las categorías express, taxi y fleet ganando más y manejando menos. Si eres Socio Conductor 2 3304 0932 Si eres Pasajero 2 3304 0931",
    },
    "/pasajero/": {
      title: "DiDi Pasajero - Bája la App y Viaja Seguro",
      desc: "Pasajero. DiDi en Perú, regístrate como socio conductor en la categoría express. Gana Dinero extra manejando con DiDi.",
    },
    "/driver/": {
      title: "DiDi Conductor - Maneja y Genera Dinero",
      desc: "DiDi Conductor en Perú. Revisa los requisitos para convertirte en socio conductor. Regístrate como socio conductor en la categoría express, ganando más y manejando menos.",
    },

    "/sobre-didi/": {
      title: "Tienes Preguntas sobre DiDi? Revisa las Respuestas",
      desc: "Tanto si eres conductor o usuario de DiDi revisa las principales dudas que el resto de las personas tienen. Así tendrás una mejor experiencia.",
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
      title: "Cómo llegar a distintos puntos de Perú",
      desc: "Conoce aquí cuánto tiempo te tomaría llegar hacia un lugar en transporte público vs DiDi",
    },
    "/guias/": {
      title: "Guías para Conductores DiDi.",
      desc: "Guías educativas para conductores. Entérate de distintos asociados a conducción de un vehículo.",
    },
    "/articulos/": {
      title:
        "Artículos de interés sobre lugares que puedes ir a visitar con DiDi.",
      desc: "Artículos sobre parques, restaurantes, lugares turísticos, etc. Lee sobre distintos destinos.",
    },
    "/ciudades/": {
      title: "Servicios de DiDi por Ciudad.",
      desc: "Conoce que servicios DiDi se encuentran en tu ciudad. Si quieres ser socio conductor revisa los requisitos.",
    },
    "/lugares/": {
      title: "Viaja a Distintos Lugares de Interés",
      desc: "Viaja a distintos puntos de la ciudad con DiDi. DiDi es la manera más rápida y segura de viajar. Baja la aplicación ya.",
    },
    "/legal/": {
      title: "Términos y Condiciones y Políticas de Privacidad.",
      desc: "Conoce nuestros términos y condiciones para el uso del sitio web además de nuestras políticas de privacidad.",
    },
  },
  co: {
    "/": {
      title: "Regístrate como Socio Conductor DiDi",
      desc: "DiDi en Perú, regístrate como socio conductor en las categorías express, taxi y fleet ganando más y manejando menos. Si eres Socio Conductor 2 3304 0932 Si eres Pasajero 2 3304 0931",
    },
    "/pasajero/": {
      title: "DiDi Pasajero - Bája la App y Viaja Seguro",
      desc: "Pasajero. DiDi en Perú, regístrate como socio conductor en la categoría express. Gana Dinero extra manejando con DiDi.",
    },
    "/driver/": {
      title: "DiDi Conductor - Maneja y Genera Dinero",
      desc: "DiDi Conductor en Perú. Revisa los requisitos para convertirte en socio conductor. Regístrate como socio conductor en la categoría express, ganando más y manejando menos.",
    },

    "/sobre-didi/": {
      title: "Tienes Preguntas sobre DiDi? Revisa las Respuestas",
      desc: "Tanto si eres conductor o usuario de DiDi revisa las principales dudas que el resto de las personas tienen. Así tendrás una mejor experiencia.",
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
      title: "Cómo llegar a distintos puntos de Perú",
      desc: "Conoce aquí cuánto tiempo te tomaría llegar hacia un lugar en transporte público vs DiDi",
    },
    "/guias/": {
      title: "Guías para Conductores DiDi.",
      desc: "Guías educativas para conductores. Entérate de distintos asociados a conducción de un vehículo.",
    },
    "/articulos/": {
      title:
        "Artículos de interés sobre lugares que puedes ir a visitar con DiDi.",
      desc: "Artículos sobre parques, restaurantes, lugares turísticos, etc. Lee sobre distintos destinos.",
    },
    "/ciudades/": {
      title: "Servicios de DiDi por Ciudad.",
      desc: "Conoce que servicios DiDi se encuentran en tu ciudad. Si quieres ser socio conductor revisa los requisitos.",
    },
    "/lugares/": {
      title: "Viaja a Distintos Lugares de Interés",
      desc: "Viaja a distintos puntos de la ciudad con DiDi. DiDi es la manera más rápida y segura de viajar. Baja la aplicación ya.",
    },
    "/legal/": {
      title: "Términos y Condiciones y Políticas de Privacidad.",
      desc: "Conoce nuestros términos y condiciones para el uso del sitio web además de nuestras políticas de privacidad.",
    },
  },
  pa: {
    "/": {
      title: "Regístrate como Socio Conductor DiDi",
      desc: "DiDi en Panamá, regístrate como socio conductor en las categorías express, taxi y fleet ganando más y manejando menos.",
    },
    "/pasajero/": {
      title: "DiDi Pasajero - Baja la App y Viaja Seguro",
      desc: "DiDi Pasajero. Viaja seguro, barato y rápido. DiDi Express y DiDi Moto están activos en Panamá. Elige la mejor opción.",
    },
    "/driver/": {
      title: "DiDi Conductor - Maneja y Genera Dinero",
      desc: "DiDi Conductor. Revisa los requisitos. Regístrate como socio conductor en las categorías express y moto, ganando más y manejando menos.",
    },
    "/moto/": {
      title: "DiDi Moto - Maneja y Genera Dinero",
      desc: "DiDi en Panamá, regístrate como socio conductor en las categorías express, taxi y fleet ganando más y manejando menos. La App nº1 en movilidad llegó.",
    },
    "/sobre-didi/": {
      title: "¿Tienes Preguntas sobre DiDi? Revisa las Respuestas",
      desc: "Tanto si eres conductor o usuario de DiDi revisa las principales dudas que el resto de las personas tienen. Así tendrás una mejor experiencia.",
    },
    "/seguridad/": {
      title: "En DiDi tu Seguridad es nuestra prioridad conoce más acá",
      desc: "Conoce aquí las funcionalidades y medidas de seguridad que hemos tomado para que en tu próximo viajes lo disfrutes al máximo.",
    },
    "/centro-de-ayuda/": {
      title: "Centro de Ayuda DiDi - App nº1 en movilidad del mundo",
      desc: "Conoce aquí las funcionalidades y medidas de seguridad que hemos tomado para que en tu próximo viajes lo disfrutes al máximo.",
    },
    "/guias/": {
      title: "Guías para Conductores DiDi.",
      desc: "Guías educativas para conductores. Entérate de distintos asociados a conducción de un vehículo.",
    },
    "/articulos/": {
      title:
        "Artículos de interés sobre lugares que puedes ir a visitar con DiDi.",
      desc: "Artículos sobre parques, restaurantes, lugares turísticos, etc. Lee sobre distintos destinos.",
    },
    "/legal/": {
      title: "Términos y Condiciones y Políticas de Privacidad.",
      desc: "Conoce nuestros términos y condiciones para el uso del sitio web además de nuestras políticas de privacidad.",
    },
  },
  au: {
    "/": {
      title: "DiDi Australia - Ride Hailing & Delivery",
      desc: "DiDi Australia offers a full range of app-based transportation services to users across Australia and New Zealand.",
    },
    "/rider/": {
      title: "Ride with DiDi",
      desc: "Get safe, fast and affordable rides with DiDi.",
    },
    "/rider/help/": {
      title: "Ride Help & DiDi FAQs",
      desc: "Need help? Have questions? We're here to assist you!",
    },
    "/rider/didi-share-for-driver/": {
      title: "DiDi Share for Riders",
      desc: "DiDi Share for Riders. Quick and affordable rides for everyday. Up to 2 people. Easy & Affordable.",
    },
    "/driver/": {
      title: "DiDi Driver - Drive and earn with DiDi",
      desc: "Start earning today as a driver-partner with industry-leading safety features and low service fees.",
    },
    "/driver/help/": {
      title: "Driver Help & FAQs",
      desc: "Need help? Have questions? We're here to assist you!",
    },
    "/didi-advance/": {
      title: "DiDi Advance Driver Program",
      desc: "Learn more about our DiDi Advance earnings program for driver-partners.",
    },
    "/delivery/": {
      title: "DiDi Delivery",
      desc: "Power your business with instant and affordable delivery services.",
    },
    "/delivery/personal/": {
      title: "DiDi Delivery - Personal",
      desc: "DiDi Delivery is an on-demand delivery service allowing Australians to send and receive parcels – all delivered by DiDi drivers.",
    },
    "/delivery/business/": {
      title: "DiDi Delivery - Business",
      desc: "Power your business with instant and affordable delivery services powered by DiDi drivers.",
    },
    "/driver/didi-delivery-australia/": {
      title: "DiDi Delivery for Drivers - Next Steps",
      desc: "Earn money delivering goods for stores and people around your city.",
    },
    "/driver/didi-share-for-driver/": {
      title: "DiDi Share for Drivers",
      desc: "DiDi Share for Drivers. Quick and affordable rides for everyday. Up to 2 people. Easy & Affordable.",
    },

    "/about-us/": {
      title: "About Us",
      desc: "Learn more about DiDi, the world's leading mobility platform.",
    },
    "/safety/": {
      title: "Safety",
      desc: "Your safety comes first-- learn more about our industry-leading safety features.",
    },
    "/help-center/": {
      title: "Help Center",
      desc: "FAQs for DiDi riders and drivers.",
    },
    "/contact/": {
      title: "Contact Our Costumer Support Center",
      desc: "DiDi Customer Support can assist you with any enquiries, issues, or questions you have with DiDi.",
    },
    "/blog/": {
      title: "DiDi Australia Blog",
      desc: "Latest updates and articles from DiDi Austrlia.",
    },
    "/cities/": {
      title: "Cities",
      desc: "Learn about which cities DiDi Australia services are available in.",
    },
    "/legal/": {
      title: "Legal",
      desc: "Review our privacy policy and other terms and conditions.",
    },
    "/career/": {
      title: "Work at DiDi",
      desc: "¿Why work at DiDi Australia? Courageous Goals. Engaging Challenges.Tremendous Impact.",
    },
    "/offers/": {
      title: "Best Offers in DiDi",
      desc: "Select you next discount for your next ride",
    },
  },
};

//@desc func that is used in SEO component for getting the title and desc of a page
// @params country is the country code and path
const getMetaByPath = (
  countryCode: string,
  path: string
): SEOMetaItemInterface => {
  const placeRegex =
    /(\/lugares\/(.+))|(\/articulos\/(.+))|(\/guias\/(.+))|(\/ciudades\/(.+))|(\/driver\/(.+))||(\/rider\/(.+))(\/food\/blog\/(.+))/;
  const defaultMetas = {
    title: "DiDi Global: More than a Journey",
    desc: "Didi Chuxing is the world’s leading mobile transportation platform. The company offers a full range of mobile tech-based mobility options for over 450 million users, including Taxi, Premier, Express, Hitch, Luxe, Bus, Designated Driving, Car Rental, Enterprise Solutions and Bike-Sharing",
  };

  //logic for dynamic pages places and directions
  const subfolder = path.match(/([^/]*)\/*$/)![1];
  const placeTitle = subfolder
    .substring(0, subfolder.indexOf("_") && undefined)
    .replace(/-/g, " ")
    .replace(/\b(\w)/g, (s) => s.toUpperCase());

  const metas = placeRegex.test(path)
    ? {
        title: placeTitle,
        desc: `${placeTitle}`,
      }
    : defaultMetas;

  return seoMeta[countryCode][path] || metas;
};

export { getMetaByPath };
