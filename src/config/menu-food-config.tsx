// @desc: utility library for food menu links

export interface SingleDropMenuItem {
  text?: string;
  url?: string;
}

export interface SingleMenuItemFood {
  text: string;
  url: string;
  dropMenu?: SingleDropMenuItem[];
  icon?: string;
}

interface AllMenuInterface {
  [countryCode: string]: SingleMenuItemFood[];
}

const menuLinksFood: AllMenuInterface = {
  mx: [
    {
      text: "Restaurantes",
      url: "/mx/food/restaurantes/",
      icon: "menu-restaurant",
      dropMenu: [
        {
          text: "Restaurantes",
          url: "/mx/food/restaurantes/",
        },
        {
          text: "Registra tu Restaurante",
          url: "https://www.didi-food.com/es-MX/store",
        },
        {
          text: "Impuestos",
          url: "/mx/food/restaurantes/impuestos/",
        },
        {
          text: "Preguntas frecuentes",
          url: "/mx/food/restaurantes/preguntas-frecuentes/",
        },
        {
          text: "Kit Digital",
          url: "/mx/food/restaurantes/kit-digital/",
        },
        {
          text: "Guías de uso de la app",
          url: "/mx/food/restaurantes/guias/",
        },
      ],
    },
    {
      text: "Socio repartidor",
      url: "/mx/food/repartidores/",
      icon: "menu-delivery",
      dropMenu: [
        {
          text: "Socio Repartidor",
          url: "/mx/food/repartidores/",
        },
        {
          text: "Regístrate como Repartidor",
          url: "https://global-food-courier.onelink.me/zzaY/delivery",
        },
        {
          text: "Repartidores FAQ",
          url: "/mx/food/repartidores/preguntas-frecuentes/",
        },
        {
          text: "Guías de uso de la app",
          url: "/mx/food/repartidores/guias/",
        },
      ],
    },
    {
      text: "Acerca",
      url: "/mx/food/acerca-didi-food/",
      icon: "menu-help",
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
      icon: "menu-contact",
    },
    {
      text: "Blog",
      url: "/mx/food/blog/",
      icon: "menu-blog",
    },
  ],

  cr: [
    {
      text: "Restaurantes",
      url: "/cr/food/restaurantes/",
      icon: "menu-restaurant",
      dropMenu: [
        {
          text: "Restaurantes",
          url: "/cr/food/restaurantes/",
        },
        {
          text: "Registrá tu Restaurante",
          url: "https://www.didi-food.com/es-CR/store",
        },
        {
          text: "Guías de uso de la app",
          url: "/cr/food/restaurantes/",
        },
        {
          text: "Preguntas frecuentes",
          url: "/cr/food/restaurantes/preguntas-frecuentes/",
        },
        {
          text: "Kit Digital",
          url: "/cr/food/restaurantes/kit-digital/",
        },
        {
          text: "Guías de uso de la app",
          url: "/cr/food/restaurantes/guias/",
        },
      ],
    },
    {
      text: "Socio Repartidor",
      url: "/cr/food/repartidores/",
      icon: "menu-delivery",
      dropMenu: [
        {
          text: "Socio Repartidor",
          url: "/cr/food/repartidores/",
        },
        {
          text: "Registrate como Repartidor",
          url: "https://global-food-courier.onelink.me/zzaY/delivery",
        },
        {
          text: "Repartidores FAQ",
          url: "/cr/food/repartidores/preguntas-frecuentes/",
        },
        {
          text: "Guías de uso de la app",
          url: "/cr/food/repartidores/guias/",
        },
      ],
    },
    {
      text: "Acerca",
      url: "/cr/food/acerca-didi-food/",
      icon: "menu-help",
      dropMenu: [
        {
          text: "Preguntas Frecuentes",
          url: "/cr/food/preguntas-frecuentes/",
        },
      ],
    },
    {
      text: "Contacto",
      url: "/cr/food/contacto/",
      icon: "menu-contact",
    },
    {
      text: "Blog",
      url: "/cr/food/blog/",
      icon: "menu-blog",
    },
  ],
  co: [
    {
      text: "Restaurantes",
      url: "/co/food/restaurantes/",
      icon: "menu-restaurant",
      dropMenu: [
        {
          text: "Restaurantes",
          url: "/co/food/restaurantes/",
        },
        {
          text: "Registra tu Restaurante",
          url: "https://www.didi-food.com/es-CO/store",
        },
        {
          text: "Preguntas frecuentes",
          url: "/co/food/restaurantes/preguntas-frecuentes/",
        },
        {
          text: "Kit Digital",
          url: "/co/food/restaurantes/kit-digital/",
        },
        {
          text: "Guías de uso de la app",
          url: "/co/food/restaurantes/guias/",
        },
      ],
    },
    {
      text: "Socio repartidor",
      url: "/co/food/repartidores/",
      icon: "menu-delivery",
      dropMenu: [
        {
          text: "Socio repartidor",
          url: "/co/food/repartidores/",
        },
        {
          text: "Registrate como Repartidor",
          url: "https://global-food-courier.onelink.me/zzaY/delivery",
        },
        {
          text: "Repartidores FAQ",
          url: "/co/food/repartidores/preguntas-frecuentes/",
        },
        {
          text: "Guías de uso de la app",
          url: "/co/food/repartidores/guias/",
        },
      ],
    },
    {
      text: "Acerca",
      url: "/co/food/acerca-didi-food/",
      icon: "menu-help",
      dropMenu: [
        {
          text: "Preguntas Frecuentes",
          url: "/co/food/preguntas-frecuentes/",
        },
      ],
    },
    {
      text: "Contacto",
      url: "/co/food/contacto/",
      icon: "menu-contact",
    },
    {
      text: "Blog",
      url: "/co/food/blog",
      icon: "menu-blog",
    },
  ],
  pe: [
    {
      text: "Restaurantes",
      url: "/pe/food/restaurantes/",
      icon: "menu-restaurant",
      dropMenu: [
        {
          text: "Restaurantes",
          url: "/pe/food/restaurantes/",
        },
        {
          text: "Registra tu Restaurante",
          url: "https://www.didi-food.com/es-PE/store",
        },
        {
          text: "Kit Digital",
          url: "/pe/food/restaurantes/kit-digital/",
        },
        {
          text: "Guías de uso de la app",
          url: "/pe/food/restaurantes/guias/",
        },
      ],
    },
    {
      text: "Socio repartidor",
      url: "/pe/food/repartidores/",
      icon: "menu-delivery",
      dropMenu: [
        {
          text: "Socio Repartidor",
          url: "/pe/food/repartidores/",
        },
        {
          text: "Regístrate como Repartidor",
          url: "https://global-food-courier.onelink.me/zzaY/delivery",
        },
        {
          text: "Repartidores FAQ",
          url: "/pe/food/repartidores/preguntas-frecuentes/",
        },
        {
          text: "Guías de uso de la app",
          url: "/pe/food/repartidores/guias/",
        },
      ],
    },
    {
      text: "Acerca",
      url: "/pe/food/acerca-didi-food/",
      icon: "menu-help",
      dropMenu: [
        {
          text: "Preguntas Frecuentes",
          url: "/pe/food/preguntas-frecuentes/",
        },
      ],
    },
    {
      text: "Contacto",
      url: "/pe/food/contacto/",
      icon: "menu-contact",
    },
    {
      text: "Blog",
      url: "/pe/food/blog",
      icon: "menu-blog",
    },
  ],
};

const getMenuLinksFood = (countryCode: string) => {
  return menuLinksFood[countryCode] || [];
};

export { getMenuLinksFood };
