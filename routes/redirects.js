// @desc: Create Redirects
// @return: null
const redirectsInit = async (graphql, createRedirect) => {
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
    toPath: `/mx/food/en/restaurantes/`,
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
    toPath: `/mx/food/en/repartidores/`,
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
