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
  ],
  do: [
    { text: "Home", link: "/do/food/" },
    { text: "Tienda", link: "/do/food/store/" },
    { text: "Socio repartidor", link: "/do/food/delivery/" },
    { text: "Acerca", link: "/do/food/about/" },
    { text: "Contacto", link: "/do/food/contact/" },
    { text: "Blog", link: "/do/food/blog/" },
  ],
  cr: [
    { text: "Home", link: "/cr/food/" },
    { text: "Tienda", link: "/cr/food/store/" },
    { text: "Socio repartidor", link: "/cr/food/delivery/" },
    { text: "Acerca", link: "/cr/food/about/" },
    { text: "Contacto", link: "/cr/food/contact/" },
    { text: "Blog", link: "/cr/food/blog/" },
  ],
  co: [
    { text: "Home", link: "/co/food/" },
    { text: "Tienda", link: "/co/food/store/" },
    { text: "Socio repartidor", link: "/co/food/delivery/" },
    { text: "Acerca", link: "/co/food/about/" },
    { text: "Contacto", link: "/co/food/contact/" },
    { text: "Blog", link: "/co/food/blog/" },
  ],
};

const getFooterLinksFood = (countryCode: string): FooterLinksFood[] => {
  return footerLinksFood[countryCode];
};

export { getFooterLinksFood };
