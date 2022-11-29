// @desc: utility library for menu Links

export interface SingleDropMenuItem {
  text?: string;
  url?: string;
}

export interface SingleMenuItem {
  text: string;
  url: string;
  dropMenu?: SingleDropMenuItem[];
}

interface AllMenuInterface {
  [countryCode: string]: SingleMenuItem[];
}

const menuLinks: AllMenuInterface = {
  es: [
    {
      text: "DiDi Internacional",
      url: "/didi-internacional/",
      dropMenu: [
        {
          text: "Noticias de la Compañía",
          url: "/noticias-compania/",
        },
        {
          text: "Diversidad",
          url: "/diversidad/",
        },
        {
          text: "Sobre nosotros",
          url: "/",
        },
      ],
    },
    {
      text: "Movilidad",
      url: "/movilidad/",
      dropMenu: [
        {
          text: "Conductores",
          url: "/conductores/",
        },
        {
          text: "Pasajeros",
          url: "/pasajeros/",
        },
      ],
    },
    {
      text: "Food",
      url: "/food/",
      dropMenu: [
        {
          text: "Comensales",
          url: "/comensales/",
        },
        {
          text: "Restaurantes",
          url: "/restaurantes/",
        },
        {
          text: "Couriers",
          url: "/couriers/",
        },
      ],
    },
    {
      text: "Servicios Financieros",
      url: "/servicios-financieros/",
      dropMenu: [
        {
          text: "DiDi Pay",
          url: "/didi-pay/",
        },
        {
          text: "Prestamos",
          url: "/prestamos/",
        },
      ],
    },
    {
      text: "Seguridad",
      url: "/seguridad/",
      dropMenu: [
        {
          text: "Iniciativas de Seguridad",
          url: "/iniciativas-de-seguridad/",
        },
      ],
    },
    {
      text: "Innovación",
      url: "/innovacion/",
      dropMenu: [
        {
          text: "Manejo Autónomo",
          url: "/manejo-autonomo/",
        },
        {
          text: "Tecnología",
          url: "/tecnologia/",
        },
      ],
    },
    {
      text: "Sustentabilidad",
      url: "/sustentabilidad/",
      dropMenu: [
        {
          text: "Vehículos Eléctricos",
          url: "/vehiculos-electricos/",
        },
      ],
    },
    {
      text: "Paises",
      url: "/todos-los-paises/",
      dropMenu: [
        {
          text: "Argentina",
          url: "/argentina/",
        },
        {
          text: "Australia",
          url: "/australia/",
        },
        {
          text: "Brasil",
          url: "/brasil/",
        },
        {
          text: "Chile",
          url: "/chile/",
        },
        {
          text: "Colombia",
          url: "/colombia/",
        },
        {
          text: "Costa Rica",
          url: "/costa-rica/",
        },
        {
          text: "República Dominicana",
          url: "/republica-dominicana/",
        },
        {
          text: "Ecuador",
          url: "/ecuador/",
        },
        {
          text: "Egypt",
          url: "/egypt/",
        },
        {
          text: "Japan",
          url: "/japan/",
        },
        {
          text: "México",
          url: "/mexico/",
        },
        {
          text: "Nueva Zelanda",
          url: "/nueva-zelanda/",
        },
        {
          text: "Panamá",
          url: "/panama/",
        },
        {
          text: "Perú",
          url: "/peru/",
        },
        {
          text: "Rusia",
          url: "/rusia/",
        },
      ],
    },
  ],
  en: [
    {
      text: "DiDi International",
      url: "/didi-international/",
      dropMenu: [
        {
          text: "Company News",
          url: "/company-news/",
        },
        {
          text: "Diversity",
          url: "/diversity/",
        },
      ],
    },
    {
      text: "Mobility",
      url: "/mobility/",
      dropMenu: [
        {
          text: "Drivers",
          url: "/drivers/",
        },
        {
          text: "Riders",
          url: "/riders/",
        },
      ],
    },
    {
      text: "Food",
      url: "/food/",
      dropMenu: [
        {
          text: "Eaters",
          url: "/eaters/",
        },
        {
          text: "Restaurants",
          url: "/restaurants/",
        },
        {
          text: "Couriers",
          url: "/couriers/",
        },
      ],
    },
    {
      text: "Financial Service",
      url: "/financial-service/",
      dropMenu: [
        {
          text: "DiDi Pay",
          url: "/didi-pay/",
        },
        {
          text: "Prestamos",
          url: "/prestamos/",
        },
      ],
    },
    {
      text: "Safety and Security",
      url: "/safety/",
      dropMenu: [
        {
          text: "Safety Iniciatives",
          url: "/safety-iniciatives/",
        },
      ],
    },
    {
      text: "Innovation",
      url: "/innovation/",
      dropMenu: [
        {
          text: "Autonomous Driving",
          url: "/autonomous-driving/",
        },
        {
          text: "Technology",
          url: "/technology/",
        },
      ],
    },
    {
      text: "Sustainability",
      url: "/sustainability/",
      dropMenu: [
        {
          text: "Electric Vehicles",
          url: "/electric-vehicles/",
        },
      ],
    },
    {
      text: "Countries",
      url: "/all-countries/",
      dropMenu: [
        {
          text: "Argentina",
          url: "/argentina/",
        },
        {
          text: "Australia",
          url: "/australia/",
        },
        {
          text: "Brazil",
          url: "/brazil/",
        },
        {
          text: "Chile",
          url: "/chile/",
        },
        {
          text: "Colombia",
          url: "/colombia/",
        },
        {
          text: "Costa Rica",
          url: "/costa-rica/",
        },
        {
          text: "Dominican Republic",
          url: "/dominican-republic/",
        },
        {
          text: "Ecuador",
          url: "/ecuador/",
        },
        {
          text: "Egypt",
          url: "/egypt/",
        },
        {
          text: "Japan",
          url: "/japan/",
        },
        {
          text: "Mexico",
          url: "/mexico/",
        },
        {
          text: "New Zealand",
          url: "/new-zealand/",
        },
        {
          text: "Panama",
          url: "/panama/",
        },
        {
          text: "Peru",
          url: "/peru/",
        },
        {
          text: "Russia",
          url: "/russia/",
        },
      ],
    },
  ],
};

const getMenuLinksPr = (countryCode: string) => {
  return menuLinks[countryCode] || [];
};

export { getMenuLinksPr };
