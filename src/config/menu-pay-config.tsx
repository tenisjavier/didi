// @desc: utility library for pay menu links

export interface SingleDropMenuItem {
  text?: string;
  url?: string;
}

export interface SingleMenuItemPay {
  text: string;
  url: string;
  dropMenu?: SingleDropMenuItem[];
}

interface AllMenuInterface {
  [countryCode: string]: SingleMenuItemPay[];
}

const menuLinksPay: AllMenuInterface = {
  mx: [
    {
      text: "Preguntas Frecuentes",
      url: "/mx/didipay/preguntas-frecuentes/",
    },
    {
      text: "Paga tus Servicios",
      url: "/mx/didipay/servicios/",
    },
    {
      text: "Recarga tu Celular",
      url: "/mx/didipay/recarga-celular/",
    },
    {
      text: "Tarjetas de Regalo",
      url: "/mx/didipay/tarjetas-de-regalo/",
    },
    {
      text: "Blog",
      url: "/mx/didipay/blog/",
    },
  ],
};

const getMenuLinksPay = (countryCode: string) => {
  return menuLinksPay[countryCode] || [];
};

export { getMenuLinksPay };
