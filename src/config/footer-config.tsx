export interface FooterLinks {
  text: string;
  link: string;
}

interface AllFooterInterface {
  [countryCode: string]: FooterLinks[];
}

const footerLinks: AllFooterInterface = {
  es: [],
  en: [],
  cl: [
    { text: "Pasajero", link: "/cl/pasajero/" },
    { text: "Socio Conductor", link: "/cl/driver/" },
    { text: "Lugares", link: "/cl/lugares/" },
    { text: "DiDi Taxi", link: "/cl/taxi/" },
    { text: "Seguridad", link: "/cl/seguridad/" },
    { text: "Legal", link: "/cl/legal/" },
    { text: "Newsroom", link: "/cl/newsroom/" },
  ],
  hk: [
    { text: "的士服務", link: "/hk/ride/的士服務/" },
    { text: "粵港跨境專車服務", link: "/hk/ride/粵港跨境專車服務/" },
    { text: "成為司機夥伴", link: "/hk/taxi-driver" },
    { text: "關於我們", link: "/hk/about-us/" },
    { text: "網誌", link: "/hk/blog/" },
    { text: "聯絡我們", link: "/hk/contact-us" },
  ],
  mx: [
    { text: "Pasajero", link: "/mx/pasajero/" },
    { text: "Socio Conductor", link: "/mx/conductor/" },
    { text: "DiDi Fleet", link: "/mx/didi-fleet/" },
    { text: "DiDi Pay", link: "/mx/didipay/" },
    { text: "Seguridad", link: "/mx/seguridad/" },
    { text: "Legal", link: "/mx/legal/" },
    { text: "Carreras", link: "https://jobs.lever.co/didi-global" },
    { text: "Newsroom", link: "/mx/newsroom/" },
  ],
  do: [
    { text: "Pasajero", link: "/do/pasajero/" },
    { text: "Socio Conductor", link: "/do/driver/" },
    { text: "DiDi Moto", link: "/do/driver/moto/" },
    { text: "Seguridad", link: "/do/seguridad/" },
    { text: "Promociones", link: "/do/promociones/" },
    { text: "Legal", link: "/do/legal/" },
    { text: "Newsroom", link: "/do/newsroom/" },
  ],
  ec: [
    { text: "Pasajero", link: "/ec/pasajero/" },
    { text: "Socio Conductor", link: "/ec/driver/" },
    { text: "Seguridad", link: "/ec/seguridad/" },
    { text: "Legal", link: "/ec/legal/" },
    { text: "Newsroom", link: "/ec/newsroom/" },
  ],
  ar: [
    { text: "Pasajero", link: "/ar/pasajero/" },
    { text: "Socio Conductor", link: "/ar/driver/" },
    { text: "Lugares", link: "/ar/lugares/" },
    { text: "DiDi Taxi", link: "/ar/taxi/" },
    { text: "Seguridad", link: "/ar/seguridad/" },
    { text: "Legal", link: "/ar/legal/" },
    { text: "Newsroom", link: "/ar/newsroom/" },
  ],
  pe: [
    { text: "Pasajero", link: "/pe/pasajero/" },
    { text: "Socio Conductor", link: "/pe/driver/" },
    { text: "Lugares", link: "/pe/lugares/" },
    { text: "Seguridad", link: "/pe/seguridad/" },
    { text: "Legal", link: "/pe/legal/" },
    { text: "Newsroom", link: "/pe/newsroom/" },
  ],
  co: [
    { text: "DiDi Pasajero", link: "/co/pasajero/" },
    { text: "DiDi Conductor", link: "/co/driver/" },
    { text: "DiDi Taxi", link: "/co/taxi/" },
    { text: "Seguridad", link: "/co/seguridad/" },
    { text: "Legal", link: "/co/legal/" },
    { text: "Newsroom", link: "/co/newsroom/" },
  ],
  au: [
    { text: "DiDi Rider", link: "/au/rider/" },
    { text: "DiDi Driver", link: "/au/driver/" },
    { text: "Blog", link: "/au/blog/" },
    { text: "Career", link: "/au/career/" },
    { text: "Offers", link: "/au/offers/" },
    { text: "Legal", link: "/au/legal/" },
    { text: "Contact", link: "/au/contact/" },
  ],
  eg: [
    { text: "الراكب", link: "/eg/rider/" },
    { text: "السائق", link: "/eg/driver/" },
  ],
  pa: [
    { text: "Conductor", link: "/pa/driver/" },
    { text: "Pasajero", link: "/pa/pasajero/" },
    { text: "Seguridad", link: "/pa/seguridad/" },
    { text: "Acerca de nosotros", link: "/pa/sobre-didi/" },
    { text: "Legal", link: "/pa/legal/" },
    { text: "Newsroom", link: "/pa/newsroom/" },
  ],
  cr: [
    { text: "Conductor", link: "/cr/driver/" },
    { text: "Usuario", link: "/cr/pasajero/" },
    { text: "Seguridad", link: "/cr/seguridad/" },
    { text: "Centro de ayuda", link: "/cr/centro-de-ayuda/" },
    { text: "Legal", link: "/cr/legal/" },
    { text: "Newsroom", link: "/cr/newsroom/" },
  ],
  nz: [
    { text: "DiDi Rider", link: "/nz/rider/" },
    { text: "DiDi Driver", link: "/nz/driver/" },
    { text: "Blog", link: "/nz/blog/" },
    { text: "Career", link: "/nz/career/" },
    { text: "Offers", link: "/nz/offers/" },
    { text: "Legal", link: "/nz/legal/" },
  ],
  ru: [
    { text: "Водителям", link: "/ru/driver/" },
    { text: "Пассажирам", link: "/ru/rider/" },
    { text: "Безопасность", link: "/ru/safety/" },
    { text: "Юридическая информация", link: "/ru/legal/" },
    { text: "Раздел новостей", link: "/ru/newsroom/" },
  ],
};

const getFooterLinks = (countryCode: string): FooterLinks[] => {
  return footerLinks[countryCode];
};

export { getFooterLinks };
