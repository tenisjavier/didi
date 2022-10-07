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
  cl: [
    {
      text: "Tienda",
      url: "/cl/food/store/",
    },
    {
      text: "Socio repartidor",
      url: "/cl/food/delivery/",
    },
    {
      text: "Acerca",
      url: "/cl/food/about/",
    },
    {
      text: "Contacto",
      url: "/cl/food/contact/",
    },
    {
      text: "Blog",
      url: "/cl/food/blog/",
    },
  ],
  mx: [
    {
      text: "Tienda",
      url: "/mx/food/store/",
    },
    {
      text: "Socio repartidor",
      url: "/mx/food/delivery/",
    },
    {
      text: "Acerca",
      url: "/mx/food/about/",
      dropMenu: [
        {
          text: "Preguntas Frecuentes",
          url: "/mx/food/preguntas-frecuentes/",
        },
      ],
    },
    {
      text: "Contacto",
      url: "/mx/food/contact/",
    },
    {
      text: "Blog",
      url: "/mx/food/blog/",
    },
  ],
  do: [
    {
      text: "Tienda",
      url: "/do/food/store/",
    },
    {
      text: "Socio repartidor",
      url: "/do/food/delivery/",
    },
    {
      text: "Acerca",
      url: "/do/food/about/",
    },
    {
      text: "Contacto",
      url: "/do/food/contact/",
    },
    {
      text: "Blog",
      url: "/do/food/blog/",
    },
  ],
  cr: [
    {
      text: "Tienda",
      url: "/cr/food/store/",
    },
    {
      text: "Socio repartidor",
      url: "/cr/food/delivery/",
    },
    {
      text: "Acerca",
      url: "/cr/food/about/",
    },
    {
      text: "Contacto",
      url: "/cr/food/contact/",
    },
    {
      text: "Blog",
      url: "/cr/food/blog/",
    },
  ],
  co: [
    {
      text: "Tienda",
      url: "/co/food/store/",
    },
    {
      text: "Socio repartidor",
      url: "/co/food/delivery/",
    },
    {
      text: "Acerca",
      url: "/co/food/about/",
    },
    {
      text: "Contacto",
      url: "/co/food/contact/",
    },
    {
      text: "Blog",
      url: "/co/food/blog/",
    },
  ],
};

const getMenuLinksFood = (countryCode: string) => {
  return menuLinksFood[countryCode] || [];
};

export { getMenuLinksFood };
