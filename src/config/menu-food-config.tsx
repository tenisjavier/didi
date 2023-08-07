// @desc: utility library for food menu links

export interface SingleDropMenuItem {
  text?: string;
  url?: string;
}

export interface SingleMenuItemFood {
  text: string;
  url: string;
  dropMenu?: SingleDropMenuItem[];
}

interface AllMenuInterface {
  [countryCode: string]: SingleMenuItemFood[];
}

const menuLinksFood: AllMenuInterface = {
  mx: [
    {
      text: "Restaurantes",
      url: "/mx/food/restaurantes/",
      dropMenu: [
        {
          text: "Registro",
          url: "/mx/food/restaurantes/registro/",
        },
        {
          text: "Impuestos",
          url: "/mx/food/restaurantes/impuestos/",
        },
        {
          text: "Guías",
          url: "/mx/food/restaurantes/guias-educacionales/",
        },
        {
          text: "FAQs",
          url: "/mx/food/restaurantes/preguntas-frecuentes/",
        },
        {
          text: "Kit Digital",
          url: "/mx/food/restaurantes/kit-digital/",
        },
        {
          text: "Promociones y Campañas",
          url: "/mx/food/restaurantes/promociones-y-campanas/",
        },
        {
          text: "Descarga",
          url: "/mx/food/restaurantes/descarga/",
        },
      ],
    },
    {
      text: "Socio repartidor",
      url: "/mx/food/repartidores/",
      dropMenu: [
        {
          text: "Club Repartidores",
          url: "/mx/food/repartidores/club-repartidores/",
        },
        {
          text: "Ganancias",
          url: "/mx/food/repartidores/ganancias/",
        },
        {
          text: "Registro",
          url: "/mx/food/repartidores/registro/",
        },
        {
          text: "Rendimiento",
          url: "/mx/food/repartidores/rendimiento/",
        },
        {
          text: "Seguridad",
          url: "/mx/food/repartidores/seguridad/",
        },
        {
          text: "Guías",
          url: "/mx/food/repartidores/guias/",
        },
      ],
    },
    {
      text: "Acerca",
      url: "/mx/food/acerca-didi-food/",
      dropMenu: [
        {
          text: "Preguntas Frecuentes",
          url: "/mx/food/preguntas-frecuentes/",
        },
      ],
    },
    {
      text: "Contacto",
      url: "/mx/food/contacto/",
    },
    {
      text: "Blog",
      url: "/mx/food/blog/",
    },
  ],

  cr: [
    {
      text: "Restaurantes",
      url: "/cr/food/restaurantes/",
      dropMenu: [
        {
          text: "Registro",
          url: "/cr/food/restaurantes/registro/",
        },
        {
          text: "Guías",
          url: "/cr/food/restaurantes/guias-educacionales/",
        },
        {
          text: "FAQs",
          url: "/cr/food/restaurantes/preguntas-frecuentes/",
        },
        {
          text: "Kit Digital",
          url: "/cr/food/restaurantes/kit-digital/",
        },
        {
          text: "Promociones y Campañas",
          url: "/cr/food/restaurantes/promociones-y-campanas/",
        },
        {
          text: "Descarga",
          url: "/cr/food/restaurantes/descarga/",
        },
      ],
    },
    {
      text: "Socio repartidor",
      url: "/cr/food/repartidores/",
      dropMenu: [
        {
          text: "Club Repartidores",
          url: "/cr/food/repartidores/club-repartidores/",
        },
        {
          text: "Ganancias",
          url: "/cr/food/repartidores/ganancias/",
        },
        {
          text: "Registro",
          url: "/cr/food/repartidores/registro/",
        },
        {
          text: "Rendimiento",
          url: "/cr/food/repartidores/rendimiento/",
        },
        {
          text: "Seguridad",
          url: "/cr/food/repartidores/seguridad/",
        },
        {
          text: "Guías",
          url: "/cr/food/repartidores/guias/",
        },
      ],
    },
    {
      text: "Acerca",
      url: "/cr/food/acerca-didi-food/",
    },
    {
      text: "Contacto",
      url: "/cr/food/contacto/",
    },
    {
      text: "Blog",
      url: "/cr/food/blog/",
    },
  ],
  co: [
    {
      text: "Restaurantes",
      url: "/co/food/restaurantes/",
      dropMenu: [
        {
          text: "Registro",
          url: "/co/food/restaurantes/registro/",
        },
        {
          text: "Guías",
          url: "/co/food/restaurantes/guias-educacionales/",
        },
        {
          text: "FAQs",
          url: "/co/food/restaurantes/preguntas-frecuentes/",
        },
        {
          text: "Kit Digital",
          url: "/co/food/restaurantes/kit-digital/",
        },
        {
          text: "Promociones y Campañas",
          url: "/co/food/restaurantes/promociones-y-campanas/",
        },
        {
          text: "Descarga",
          url: "/co/food/restaurantes/descarga/",
        },
      ],
    },
    {
      text: "Socio repartidor",
      url: "/co/food/repartidores/",
      dropMenu: [
        {
          text: "Club Repartidores",
          url: "/co/food/repartidores/club-repartidores/",
        },
        {
          text: "Ganancias",
          url: "/co/food/repartidores/ganancias/",
        },
        {
          text: "Registro",
          url: "/co/food/repartidores/registro/",
        },
        {
          text: "Rendimiento",
          url: "/co/food/repartidores/rendimiento/",
        },
        {
          text: "Seguridad",
          url: "/co/food/repartidores/seguridad/",
        },
        {
          text: "Guías",
          url: "/co/food/repartidores/guias/",
        },
      ],
    },
    {
      text: "Acerca",
      url: "/co/food/acerca-didi-food/",
    },
    {
      text: "Contacto",
      url: "/co/food/contacto/",
    },
    {
      text: "Blog",
      url: "/co/food/blog",
    },
  ],
  pe: [
    {
      text: "Tienda",
      url: "/pe/food/restaurantes/",
    },
    {
      text: "Socio repartidor",
      url: "/pe/food/repartidores/",
      dropMenu: [
        {
          text: "Club Repartidores",
          url: "/pe/food/repartidores/club-repartidores/",
        },
        {
          text: "Ganancias",
          url: "/pe/food/repartidores/ganancias/",
        },
        {
          text: "Registro",
          url: "/pe/food/repartidores/registro/",
        },
        {
          text: "Rendimiento",
          url: "/pe/food/repartidores/rendimiento/",
        },
        {
          text: "Seguridad",
          url: "/pe/food/repartidores/seguridad/",
        },
      ],
    },
    {
      text: "Acerca",
      url: "/pe/food/acerca-didi-food/",
    },
    {
      text: "Contacto",
      url: "/pe/food/contacto/",
    },
    {
      text: "Blog",
      url: "/pe/food/blog",
    },
  ],
  mxen: [
    {
      text: "Store",
      url: "/mx/food/en/restaurants/",
    },
    {
      text: "Delivery",
      url: "/mx/food/en/couriers/",
    },
    {
      text: "About",
      url: "/mx/food/en/about/",
    },
    {
      text: "Contact",
      url: "/mx/food/en/contact/",
    },
  ],
};

const getMenuLinksFood = (countryCode: string) => {
  return menuLinksFood[countryCode] || [];
};

export { getMenuLinksFood };
