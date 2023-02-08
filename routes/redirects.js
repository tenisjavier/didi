// @desc: Create Redirects
// @return: null
const redirectsInit = async (graphql, createRedirect) => {
  //testing subdomains
  createRedirect({
    fromPath: `https://chile.didiglobal.com/wp-admin/`,
    toPath: `/cl/`,
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
};

module.exports.init = redirectsInit;
