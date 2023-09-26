type FooterTitles = "contactanos" | "regulacion" | "blog" | "siguenos";
type iconsType = "facebook" | "instagram" | "tiktok" | "twitter";

export type FooterLinks = {
  [key in FooterTitles]: {
    title?: string;
    items?: {
      text?: string;
      link?: string;
      icon?: iconsType;
    }[];
  };
};

interface AllFooterInterface {
  [countryCode: string]: FooterLinks;
}

const footerLinks: AllFooterInterface = {
  mx: {
    contactanos: {
      items: [
        { text: "Soporte DiDi", link: "/mx/tarjeta-de-credito/preguntas-frecuentes/" },
        { text: "Escríbenos a: {tarjetacredito@mx.didiglobal.com}" },
        { text: "Llámanos al: {800 953 3300}" },
      ],
      title: "Contáctanos",
    },
    regulacion: {
      items: [
        { text: "Buró de entidades financieras", link: "https://www.buro.gob.mx/" },
        // { text: "CONDUSEF", link: "/" },
        { text: "CNBV", link: "https://www.gob.mx/cnbv" },
      ],
      title: "Regulación",
    },
    blog: {
      items: [
        { text: "Artículos", link: "/mx/tarjeta-de-credito/blog/" },
      ],
      title: "Blog",
    },
    siguenos: {
      items: [
        { icon: "facebook", link: "https://www.facebook.com/didicardmx/" },
        { icon: "instagram", link: "https://instagram.com/didicardmx?igshid=MzRlODBiNWFlZA==" },
        // { icon: "tiktok", link: "/" },
        // { icon: "twitter", link: "/" },
      ],
      title: "Síguenos",
    },
  },
};

const getFooterTarjetaDeCreditoLinks = (countryCode: string): FooterLinks => {
  return footerLinks[countryCode];
};

export { getFooterTarjetaDeCreditoLinks };
