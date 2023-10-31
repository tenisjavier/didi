// @desc: Create Redirects
// @return: null
const redirectsInit = async (graphql, createRedirect) => {
  createRedirect({
    fromPath: `/mx/food/restaurantes/descarga/`,
    toPath: `/mx/food/restaurantes/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/mx/food/colonia/`,
    toPath: `/mx/food/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/thejourney/`,
    toPath: `/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/co/food/restaurantes/descarga/`,
    toPath: `/co/food/restaurantes/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/cr/food/restaurantes/descarga/`,
    toPath: `/cr/food/restaurantes/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/pe/food/restaurantes/descarga/`,
    toPath: `/pe/food/restaurantes/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/co/food/repartidores/club-repartidores/`,
    toPath: `/co/food/repartidores/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/co/food/repartidores/club-repartidores/`,
    toPath: `/co/food/repartidores/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/cr/food/repartidores/club-repartidores/`,
    toPath: `/cr/food/repartidores/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/mx/food/repartidores/club-repartidores/`,
    toPath: `/mx/food/repartidores/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/pe/food/repartidores/club-repartidores/`,
    toPath: `/pe/food/repartidores/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/co/food/repartidores/rendimiento/`,
    toPath: `/co/food/repartidores/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/cr/food/repartidores/rendimiento/`,
    toPath: `/cr/food/repartidores/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/mx/food/repartidores/rendimiento/`,
    toPath: `/mx/food/repartidores/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/pe/food/repartidores/rendimiento/`,
    toPath: `/pe/food/repartidores/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/co/food/repartidores/ganancias/`,
    toPath: `/co/food/repartidores/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/cr/food/repartidores/ganancias/`,
    toPath: `/cr/food/repartidores/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/mx/food/repartidores/ganancias/`,
    toPath: `/mx/food/repartidores/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/pe/food/repartidores/ganancias/`,
    toPath: `/pe/food/repartidores/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/co/food/repartidores/seguridad/`,
    toPath: `/co/food/repartidores/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/cr/food/repartidores/seguridad/`,
    toPath: `/cr/food/repartidores/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/mx/food/repartidores/seguridad/`,
    toPath: `/mx/food/repartidores/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/pe/food/repartidores/seguridad/`,
    toPath: `/pe/food/repartidores/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/co/food/repartidores/registro/`,
    toPath: `/co/food/repartidores/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/cr/food/repartidores/registro/`,
    toPath: `/cr/food/repartidores/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/mx/food/repartidores/registro/`,
    toPath: `/mx/food/repartidores/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/pe/food/repartidores/registro/`,
    toPath: `/pe/food/repartidores/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/co/food/restaurantes/guias-educacionales/*`,
    toPath: `/co/food/restaurantes/preguntas-frecuentes/*`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/cr/food/restaurantes/guias-educacionales/*`,
    toPath: `/cr/food/restaurantes/preguntas-frecuentes/*`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/pe/food/restaurantes/guias-educacionales/*`,
    toPath: `/pe/food/restaurantes/preguntas-frecuentes/*`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/mx/food/restaurantes/guias-educacionales/*`,
    toPath: `/mx/food/restaurantes/preguntas-frecuentes/*`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/co/food/repartidores/guias-educacionales/*`,
    toPath: `/co/food/repartidores/preguntas-frecuentes/*`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/cr/food/repartidores/guias-educacionales/*`,
    toPath: `/cr/food/repartidores/preguntas-frecuentes/*`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/pe/food/repartidores/guias-educacionales/*`,
    toPath: `/pe/food/repartidores/preguntas-frecuentes/*`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/mx/food/repartidores/guias-educacionales/*`,
    toPath: `/mx/food/repartidores/preguntas-frecuentes/*`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/ru/`,
    toPath: `/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/ru/*`,
    toPath: `/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/do/food/`,
    toPath: `/mx/food/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/do/food/*`,
    toPath: `/mx/food/*`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/cr/food/restaurantes/registro/`,
    toPath: `https://www.didi-food.com/es-CR/store`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/co/food/restaurantes/registro/`,
    toPath: `https://www.didi-food.com/es-CO/store`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/mx/food/restaurantes/registro/`,
    toPath: `https://page.didiglobal.com/public-biz/pc-login/2.0.0/index.html?source=70001&appid=50002&role=13&country_id=484&lang=es-MX&redirectUrl=%2F%2Fcrm.didi-food.com%2Fcrm%2FselfEntry%2Fpassport%2FsetCookie%3FjumpPage%3Dhttps%253A%252F%252Fwww.didi-food.com%252Fes-MX%252Fstore%252Fself-onboarding%252Flist#`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/cl/food/`,
    toPath: `/mx/food/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/cl/food/*`,
    toPath: `/mx/food/*`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/mx/seguridad/conductores/funciones/`,
    toPath: `/mx/seguridad/conductores/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/mx/seguridad/conductores/funciones/*`,
    toPath: `/mx/seguridad/conductores/*`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/au/safety/fatigue-prevention-feature/`,
    toPath: `/au/safety/fatigue-prevention-feature/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/pa/driver/`,
    toPath: `/pa/conductor/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/pa/driver/*`,
    toPath: `/pa/conductor/*`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/cr/driver/`,
    toPath: `/cr/conductor/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/cr/driver/*`,
    toPath: `/cr/conductor/*`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/do/driver/`,
    toPath: `/do/conductor/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/do/driver/*`,
    toPath: `/do/conductor/*`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/ec/driver/`,
    toPath: `/ec/conductor/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/ec/driver/*`,
    toPath: `/ec/conductor/*`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/co/driver/`,
    toPath: `/co/conductor/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/co/driver/*`,
    toPath: `/co/conductor/*`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/ar/driver/`,
    toPath: `/ar/conductor/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/ar/driver/*`,
    toPath: `/ar/conductor/*`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/cl/driver/`,
    toPath: `/cl/conductor/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/cl/driver/*`,
    toPath: `/cl/conductor/*`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/pe/driver/`,
    toPath: `/pe/conductor/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/pe/driver/*`,
    toPath: `/pe/conductor/*`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/mx/clubdidi/`,
    toPath: `/mx/didimas/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/mx/clubdidi/`,
    toPath: `/mx/didimas/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/mx/clubdidi/*`,
    toPath: `/mx/didimas/*`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/mx/didimas/privauto`,
    toPath: `/mx/didimas/punto`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/mx/didipay-preguntas-frecuentes/`,
    toPath: `/mx/didipay/preguntas-frecuentes/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/cr/leones/`,
    toPath: `/cr/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/mx/food/ciudad/ciudad-de-mexico-cmx/`,
    toPath: `/mx/food/ciudad/ciudad-de-mexico-cdmx/`,
    isPermanent: true,
  });
  // 301 restaurantes
  createRedirect({
    fromPath: `/cl/food/store/`,
    toPath: `/cl/food/restaurantes/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/cr/food/store/`,
    toPath: `/cr/food/restaurantes/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/pe/food/store/`,
    toPath: `/pe/food/restaurantes/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/do/food/store/`,
    toPath: `/do/food/restaurantes/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/co/food/store/`,
    toPath: `/co/food/restaurantes/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/mx/food/store/`,
    toPath: `/mx/food/restaurantes/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/mx/food/en/store/`,
    toPath: `/mx/food/restaurantes/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/mx/food/en/`,
    toPath: `/mx/food/`,
    isPermanent: true,
  });
  // 301 repartidores
  createRedirect({
    fromPath: `/cl/food/delivery/`,
    toPath: `/cl/food/repartidores/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/cr/food/delivery/`,
    toPath: `/cr/food/repartidores/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/pe/food/delivery/`,
    toPath: `/pe/food/repartidores/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/do/food/delivery/`,
    toPath: `/do/food/repartidores/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/co/food/delivery/`,
    toPath: `/co/food/repartidores/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/mx/food/delivery/`,
    toPath: `/mx/food/repartidores/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/mx/food/en/delivery/`,
    toPath: `/mx/food/repartidores/`,
    isPermanent: true,
  });
  // 301 acerca
  createRedirect({
    fromPath: `/cl/food/about/`,
    toPath: `/cl/food/acerca-didi-food/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/cr/food/about/`,
    toPath: `/cr/food/acerca-didi-food/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/pe/food/about/`,
    toPath: `/pe/food/acerca-didi-food/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/do/food/about/`,
    toPath: `/do/food/acerca-didi-food/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/co/food/about/`,
    toPath: `/co/food/acerca-didi-food/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/mx/food/about/`,
    toPath: `/mx/food/acerca-didi-food/`,
    isPermanent: true,
  });
  // 301 contacto
  createRedirect({
    fromPath: `/cl/food/contact/`,
    toPath: `/cl/food/contacto/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/cr/food/contact/`,
    toPath: `/cr/food/contacto/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/pe/food/contact/`,
    toPath: `/pe/food/contacto/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/do/food/contact/`,
    toPath: `/do/food/contacto/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/co/food/contact/`,
    toPath: `/co/food/contacto/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/mx/food/contact/`,
    toPath: `/mx/food/contacto/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/eg/driver/driver-help/*`,
    toPath: `/eg/help-center/*`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/nz/driver/help/*`,
    toPath: `/nz/help-center/*`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/nz/offers/`,
    toPath: `/nz/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/hk/*`,
    toPath: `https://hk.didiglobal.com/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/hk/`,
    toPath: `https://hk.didiglobal.com/`,
    isPermanent: true,
  });
};

module.exports.init = redirectsInit;
