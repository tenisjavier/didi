export interface FooterLinksFood {
  text: string;
  link: string;
}

interface AllFooterInterface {
  [countryCode: string]: FooterLinksFood[];
}

const footerLinksFood: AllFooterInterface = {
  int: [],
  cl: [
    { text: "Home", link: "/cl/food/" },
    { text: "Tienda", link: "/cl/food/store/" },
    { text: "Socio repartidor", link: "/cl/food/delivery/" },
    { text: "Acerca", link: "/cl/food/about/" },
    { text: "Contacto", link: "/cl/food/contact/" },
    { text: "Blog", link: "/cl/food/blog/" },
    { text: "Terms and Conditions", link: "/cl/food/terminos-y-condiciones/" },
    { text: "Privacidad", link: "/cl/food/privacidad/" },
    { text: "Renta de equipo", link: "/cl/food/renta-de-equipo/" },
  ],
  mx: [
    { text: "Home", link: "/mx/food/" },
    { text: "Tienda", link: "/mx/food/store/" },
    { text: "Socio repartidor", link: "/mx/food/delivery/" },
    { text: "Acerca", link: "/mx/food/about/" },
    { text: "Contacto", link: "/mx/food/contact/" },
    { text: "Blog", link: "/mx/food/blog/" },
    { text: "Terms and Conditions", link: "/mx/food/terminos-y-condiciones/" },
    { text: "Privacidad", link: "/mx/food/privacidad/" },
    { text: "Renta de equipo", link: "/mx/food/renta-de-equipo/" },
  ],
  do: [
    { text: "Home", link: "/do/food/" },
    { text: "Tienda", link: "/do/food/store/" },
    { text: "Socio repartidor", link: "/do/food/delivery/" },
    { text: "Acerca", link: "/do/food/about/" },
    { text: "Contacto", link: "/do/food/contact/" },
    { text: "Blog", link: "/do/food/blog/" },
    { text: "Terms and Conditions", link: "/do/food/terminos-y-condiciones/" },
    { text: "Privacidad", link: "/do/food/privacidad/" },
    { text: "Renta de equipo", link: "/do/food/renta-de-equipo/" },
  ],
  cr: [
    { text: "Home", link: "/cr/food/" },
    { text: "Tienda", link: "/cr/food/store/" },
    { text: "Socio repartidor", link: "/cr/food/delivery/" },
    { text: "Acerca", link: "/cr/food/about/" },
    { text: "Contacto", link: "/cr/food/contact/" },
    { text: "Blog", link: "/cr/food/blog/" },
    { text: "Terms and Conditions", link: "/cr/food/terminos-y-condiciones/" },
    { text: "Privacidad", link: "/cr/food/privacidad/" },
    { text: "Renta de equipo", link: "/cr/food/renta-de-equipo/" },
  ],
  co: [
    { text: "Home", link: "/co/food/" },
    { text: "Tienda", link: "/co/food/store/" },
    { text: "Socio repartidor", link: "/co/food/delivery/" },
    { text: "Acerca", link: "/co/food/about/" },
    { text: "Contacto", link: "/co/food/contact/" },
    { text: "Blog", link: "/co/food/blog/" },
    { text: "Terms and Conditions", link: "/co/food/terminos-y-condiciones/" },
    { text: "Privacidad", link: "/co/food/privacidad/" },
    { text: "Renta de equipo", link: "/co/food/renta-de-equipo/" },
  ],
};

const getFooterLinksFood = (countryCode: string): FooterLinksFood[] => {
  return footerLinksFood[countryCode];
};

export { getFooterLinksFood };
