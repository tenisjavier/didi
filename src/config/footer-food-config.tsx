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
      text: "Términos y Condiciones",
      link: "/mx/legal/",
    },
    { text: "Privacidad", link: "/mx/legal/" },
    { text: "Renta de equipo", link: "/mx/food/renta-de-equipo/" },
  ],
  cr: [
    { text: "Home", link: "/cr/food/" },
    { text: "Restaurantes", link: "/cr/food/restaurantes/" },
    { text: "Socio repartidor", link: "/cr/food/repartidores/" },
    { text: "Acerca", link: "/cr/food/acerca-didi-food/" },
    { text: "Contacto", link: "/cr/food/contacto/" },
    { text: "Blog", link: "/cr/food/blog/" },
    { text: "Terms and Conditions", link: "/cr/food/terminos-y-condiciones/" },
    { text: "Privacidad", link: "/cr/food/privacidad/" },
    { text: "Renta de equipo", link: "/cr/food/renta-de-equipo/" },
  ],
  co: [
    { text: "Home", link: "/co/food/" },
    { text: "Restaurantes", link: "/co/food/restaurantes/" },
    { text: "Socio repartidor", link: "/co/food/repartidores/" },
    { text: "Acerca", link: "/co/food/acerca-didi-food/" },
    { text: "Contacto", link: "/co/food/contacto/" },
    { text: "Blog", link: "/co/food/blog/" },
    { text: "Terms and Conditions", link: "/co/food/terminos-y-condiciones/" },
    { text: "Privacidad", link: "/co/food/privacidad/" },
    { text: "Renta de equipo", link: "/co/food/renta-de-equipo/" },
  ],
  pe: [
    { text: "Home", link: "/pe/food/" },
    { text: "Restaurantes", link: "/pe/food/restaurantes/" },
    { text: "Socio repartidor", link: "/pe/food/repartidores/" },
    { text: "Acerca", link: "/pe/food/acerca-didi-food/" },
    { text: "Contacto", link: "/pe/food/contacto/" },
  ],
};

const getFooterLinksFood = (countryCode: string): FooterLinksFood[] => {
  return footerLinksFood[countryCode];
};

export { getFooterLinksFood };
