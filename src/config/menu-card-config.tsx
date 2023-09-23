
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
      url: "/mx/card/funciones/",
    },
    {
      text: "Beneficios",
      url: "/mx/card/beneficios/",
    },
    {
      text: "Blog",
      url: "/mx/card/blog/",
    },
    {
      text: "Preguntas frecuentes",
      url: "/mx/card/preguntas-frecuentes/",
    },
  ],
};

const getMenuLinksCard = (countryCode: string) => {
  return menuLinksCard[countryCode] || [];
};

export { getMenuLinksCard };
