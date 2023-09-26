
export interface SingleDropMenuItem {
  text?: string;
  url?: string;
}

export interface SingleMenuItemCard {
  text: string;
  url: string;
  dropMenu?: SingleDropMenuItem[];
  icon?: string;
}

interface AllMenuInterface {
  [countryCode: string]: SingleMenuItemCard[];
}

const menuLinksCard: AllMenuInterface = {
  mx: [
    {
      text: "Funciones",
      url: "/mx/tarjeta-de-credito/funciones/",
    },
    {
      text: "Beneficios",
      url: "/mx/tarjeta-de-credito/beneficios/",
    },
    {
      text: "Blog",
      url: "/mx/tarjeta-de-credito/blog/",
    },
    {
      text: "Preguntas frecuentes",
      url: "/mx/tarjeta-de-credito/preguntas-frecuentes/",
    },
  ],
};

const getMenuLinksCard = (countryCode: string) => {
  return menuLinksCard[countryCode] || [];
};

export { getMenuLinksCard };
