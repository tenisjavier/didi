// @desc: utility library for menu Links

export interface SingleMenuItemFood {
  text: string;
  url: string;
}

interface AllMenuInterface {
  [countryCode: string]: SingleMenuItemFood[];
}

const menuLinksFood: AllMenuInterface = {
  cl: [
    {
      text: "Home",
      url: "/cl/food/",
    },
    {
      text: "Tienda",
      url: "/cl/food/store",
    },
    {
      text: "Socio repartidor",
      url: "/cl/food/delivery",
    },
    {
      text: "Acerca",
      url: "/cl/food/about",
    },
    {
      text: "Blog",
      url: "cl/food/blog",
    },
  ],
  do: [
    {
      text: "Home",
      url: "/do/food/",
    },
    {
      text: "Tienda",
      url: "/do/food/store",
    },
    {
      text: "Socio repartidor",
      url: "/do/food/delivery",
    },
    {
      text: "Acerca",
      url: "/do/food/about",
    },
    {
      text: "Blog",
      url: "/do/food/blog",
    },
  ],
};

const getMenuLinksFood = (countryCode: string) => {
  return menuLinksFood[countryCode] || [];
};

export { getMenuLinksFood };
