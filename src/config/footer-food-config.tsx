export interface FooterLinksFood {
  text: string;
  link: string;
}

interface AllFooterInterface {
  [countryCode: string]: FooterLinksFood[];
}

const footerLinksFood: AllFooterInterface = {
  int: [],

  mx: [
    { text: "Restaurantes", link: "/mx/food/restaurantes/" },
    { text: "Socio repartidor", link: "/mx/food/repartidores/" },
    { text: "Ciudades Disponibles", link: "/mx/food/ciudad/" },
    {
      text: "Legal",
      link: "/mx/legal/",
    },
    { text: "Privacidad", link: "/mx/legal/" },
    { text: "Renta de equipo", link: "/mx/food/renta-de-equipo/" },
  ],
  cr: [
    { text: "Restaurantes", link: "/cr/food/restaurantes/" },
    { text: "Socio repartidor", link: "/cr/food/repartidores/" },
    { text: "Ciudades Disponibles", link: "/cr/food/ciudad/" },
    { text: "Legal", link: "/cr/legal/" },
    { text: "Renta de equipo", link: "/cr/food/renta-de-equipo/" },
  ],
  co: [
    { text: "Restaurantes", link: "/co/food/restaurantes/" },
    { text: "Socio repartidor", link: "/co/food/repartidores/" },
    { text: "Ciudades Disponibles", link: "/co/food/ciudad/" },
    { text: "Legal", link: "/co/legal/" },
    { text: "Renta de equipo", link: "/co/food/renta-de-equipo/" },
  ],
  pe: [
    { text: "Restaurantes", link: "/pe/food/restaurantes/" },
    { text: "Socio repartidor", link: "/pe/food/repartidores/" },
    { text: "Ciudades Disponibles", link: "/pe/food/ciudad/" },
    { text: "Legal", link: "/pe/legal/" },
  ],
};

const getFooterLinksFood = (countryCode: string): FooterLinksFood[] => {
  return footerLinksFood[countryCode];
};

export { getFooterLinksFood };
