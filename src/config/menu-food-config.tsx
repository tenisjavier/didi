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
};

const getMenuLinksFood = (countryCode: string) => {
  return menuLinksFood[countryCode] || [];
};

export { getMenuLinksFood };
