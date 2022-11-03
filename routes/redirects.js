// @desc: Create Redirects
// @return: null
const redirectsInit = async (graphql, createRedirect) => {
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
};

module.exports.init = redirectsInit;
