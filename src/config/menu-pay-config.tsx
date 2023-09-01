// @desc: utility library for pay menu links

export interface SingleDropMenuItem {
  text?: string;
  url?: string;
}

export interface SingleMenuItemPay {
  text: string;
  url: string;
  dropMenu?: SingleDropMenuItem[];
  icon?: string;
}

interface AllMenuInterface {
  [countryCode: string]: SingleMenuItemPay[];
}

const menuLinksPay: AllMenuInterface = {
  mx: [
    {
      text: "Preguntas Frecuentes",
      url: "/mx/didipay/preguntas-frecuentes/",
      icon: "menu-help",
    },
    {
      text: "Paga tus Servicios",
      url: "/mx/didipay/servicios/",
      icon: "menu-pay",
    },
    {
      text: "Recarga tu Celular",
      url: "/mx/didipay/recarga-celular/",
      icon: "menu-about",
    },
    {
      text: "Tarjetas de Regalo",
      url: "/mx/didipay/tarjetas-de-regalo/",
      icon: "menu-gift-card",
    },
    {
      text: "Blog",
      url: "/mx/didipay/blog/",
      icon: "menu-blog",
    },
  ],
};

const getMenuLinksPay = (countryCode: string) => {
  return menuLinksPay[countryCode] || [];
};

export { getMenuLinksPay };
