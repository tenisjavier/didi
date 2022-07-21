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
    { text: "Tienda", link: "/cl/food/store" },
    { text: "Socio repartidor", link: "/cl/food/delivery" },
    { text: "Acerca", link: "/cl/food/about" },
    { text: "Blog", link: "/cl/food/blog" }
  ],
  do: [
    { text: "Home", link: "/do/food/" },
    { text: "Tienda", link: "/do/food/store" },
    { text: "Socio repartidor", link: "/do/food/delivery" },
    { text: "Acerca", link: "/do/food/about" },
    { text: "Blog", link: "/do/food/blog" }
  ],
};

const getFooterLinksFood = (countryCode: string): FooterLinksFood[] => {
  return footerLinksFood[countryCode];
};

export { getFooterLinksFood };
