// @desc: utility library for food menu links

export interface SingleDropMenuItem {
  text?: string;
  url?: string;
}

export interface SingleMenuItemRestaurant {
  text: string;
  url: string;
  dropMenu?: SingleDropMenuItem[];
}

interface AllMenuInterface {
  [countryCode: string]: SingleMenuItemRestaurant[];
}

const menuLinksRestaurant: AllMenuInterface = {
  mx: [
    {
      text: "Inicio",
      url: "/mx/food/store/restaurant",
    },
    {
      text: "Registro",
      url: "/mx/food/store/restaurant/registro",
      dropMenu: [
        { 
          text: "Descarga",
          url: '/mx/food/store/restaurant/descarga',
        },
      ]
    },
    {
      text: "Impuestos",
      url: "/mx/food/store/restaurant/impuesto",
    },
    {
      text: "Guías Educacionales",
      url: "/mx/food/store/restaurant/guias-educacionales",
    },
    {
      text: "More",
      url: "#",
      dropMenu: [
        {
          text: "Promociones",
          url: "/mx/food/store/restaurant/offers"
        },
        {
          text: "Preguntas Frecuentes",
          url: "/mx/food/store/restaurant/preguntas-frecuentes"
        },
        {
          text: "Kit Digital",
          url: "/mx/food/store/restaurant/kit-digital"
        },
      ]
    },
  ],
};

const getMenuLinksRestaurant = (countryCode: string) => {
  return menuLinksRestaurant[countryCode] || [];
};

export { getMenuLinksRestaurant };
