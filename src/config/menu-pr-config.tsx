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
      url: "/es/thejourney/didi-internacional/",
      dropMenu: [
        {
          text: "Noticias de la Compañía",
          url: "/es/thejourney/noticias-compania/",
        },
        {
          text: "Diversidad",
          url: "/es/thejourney/diversidad/",
        },
        {
          text: "Sobre nosotros",
          url: "/",
        },
      ],
    },
    {
      text: "Movilidad",
      url: "/es/thejourney/movilidad/",
      dropMenu: [
        {
          text: "Conductores",
          url: "/es/thejourney/conductores/",
        },
        {
          text: "Pasajeros",
          url: "/es/thejourney/pasajeros/",
        },
      ],
    },
    {
      text: "Food",
      url: "/es/thejourney/food/",
      dropMenu: [
        {
          text: "Comensales",
          url: "/es/thejourney/comensales/",
        },
        {
          text: "Restaurantes",
          url: "/es/thejourney/restaurantes/",
        },
        {
          text: "Couriers",
          url: "/es/thejourney/couriers/",
        },
      ],
    },
    {
      text: "Servicios Financieros",
      url: "/es/thejourney/servicios-financieros/",
      dropMenu: [
        {
          text: "DiDi Pay",
          url: "/es/thejourney/didi-pay/",
        },
        {
          text: "Prestamos",
          url: "/es/thejourney/prestamos/",
        },
      ],
    },
    {
      text: "Seguridad",
      url: "/es/thejourney/seguridad/",
      dropMenu: [
        {
          text: "Iniciativas de Seguridad",
          url: "/es/thejourney/iniciativas-de-seguridad/",
        },
      ],
    },
    {
      text: "Innovación",
      url: "/es/thejourney/innovacion/",
      dropMenu: [
        {
          text: "Manejo Autónomo",
          url: "/es/thejourney/manejo-autonomo/",
        },
        {
          text: "Tecnología",
          url: "/es/thejourney/tecnologia/",
        },
      ],
    },
    {
      text: "Sustentabilidad",
      url: "/es/thejourney/sustentabilidad/",
      dropMenu: [
        {
          text: "Vehículos Eléctricos",
          url: "/es/thejourney/vehiculos-electricos/",
        },
      ],
    },
    {
      text: "Paises",
      url: "/es/thejourney/todos-los-paises/",
      dropMenu: [
        {
          text: "Argentina",
          url: "/es/thejourney/argentina/",
        },
        {
          text: "Australia",
          url: "/es/thejourney/australia/",
        },
        {
          text: "Brasil",
          url: "/es/thejourney/brasil/",
        },
        {
          text: "Chile",
          url: "/es/thejourney/chile/",
        },
        {
          text: "Colombia",
          url: "/es/thejourney/colombia/",
        },
        {
          text: "Costa Rica",
          url: "/es/thejourney/costa-rica/",
        },
        {
          text: "República Dominicana",
          url: "/es/thejourney/republica-dominicana/",
        },
        {
          text: "Ecuador",
          url: "/es/thejourney/ecuador/",
        },
        {
          text: "Egypt",
          url: "/es/thejourney/egypt/",
        },
        {
          text: "Japan",
          url: "/es/thejourney/japan/",
        },
        {
          text: "México",
          url: "/es/thejourney/mexico/",
        },
        {
          text: "Nueva Zelanda",
          url: "/es/thejourney/nueva-zelanda/",
        },
        {
          text: "Panamá",
          url: "/es/thejourney/panama/",
        },
        {
          text: "Perú",
          url: "/es/thejourney/peru/",
        },
        {
          text: "Rusia",
          url: "/es/thejourney/rusia/",
        },
      ],
    },
  ],
  en: [
    {
      text: "DiDi International",
      url: "/thejourney/didi-international/",
      dropMenu: [
        {
          text: "Company News",
          url: "/thejourney/company-news/",
        },
        {
          text: "Diversity",
          url: "/thejourney/diversity/",
        },
      ],
    },
    {
      text: "Mobility",
      url: "/thejourney/mobility/",
      dropMenu: [
        {
          text: "Drivers",
          url: "/thejourney/drivers/",
        },
        {
          text: "Riders",
          url: "/thejourney/riders/",
        },
      ],
    },
    {
      text: "Food",
      url: "/thejourney/food/",
      dropMenu: [
        {
          text: "Eaters",
          url: "/thejourney/eaters/",
        },
        {
          text: "Restaurants",
          url: "/thejourney/restaurants/",
        },
        {
          text: "Couriers",
          url: "/thejourney/couriers/",
        },
      ],
    },
    {
      text: "Financial Service",
      url: "/thejourney/financial-service/",
      dropMenu: [
        {
          text: "DiDi Pay",
          url: "/thejourney/didi-pay/",
        },
        {
          text: "Prestamos",
          url: "/thejourney/prestamos/",
        },
      ],
    },
    {
      text: "Safety and Security",
      url: "/thejourney/safety/",
      dropMenu: [
        {
          text: "Safety Iniciatives",
          url: "/thejourney/safety-iniciatives/",
        },
      ],
    },
    {
      text: "Innovation",
      url: "/thejourney/innovation/",
      dropMenu: [
        {
          text: "Autonomous Driving",
          url: "/thejourney/autonomous-driving/",
        },
        {
          text: "Technology",
          url: "/thejourney/technology/",
        },
      ],
    },
    {
      text: "Sustainability",
      url: "/thejourney/sustainability/",
      dropMenu: [
        {
          text: "Electric Vehicles",
          url: "/thejourney/electric-vehicles/",
        },
      ],
    },
    {
      text: "Countries",
      url: "/thejourney/all-countries/",
      dropMenu: [
        {
          text: "Argentina",
          url: "/thejourney/argentina/",
        },
        {
          text: "Australia",
          url: "/thejourney/australia/",
        },
        {
          text: "Brazil",
          url: "/thejourney/brazil/",
        },
        {
          text: "Chile",
          url: "/thejourney/chile/",
        },
        {
          text: "Colombia",
          url: "/thejourney/colombia/",
        },
        {
          text: "Costa Rica",
          url: "/thejourney/costa-rica/",
        },
        {
          text: "Dominican Republic",
          url: "/thejourney/dominican-republic/",
        },
        {
          text: "Ecuador",
          url: "/thejourney/ecuador/",
        },
        {
          text: "Egypt",
          url: "/thejourney/egypt/",
        },
        {
          text: "Japan",
          url: "/thejourney/japan/",
        },
        {
          text: "Mexico",
          url: "/thejourney/mexico/",
        },
        {
          text: "New Zealand",
          url: "/thejourney/new-zealand/",
        },
        {
          text: "Panama",
          url: "/thejourney/panama/",
        },
        {
          text: "Peru",
          url: "/thejourney/peru/",
        },
        {
          text: "Russia",
          url: "/thejourney/russia/",
        },
      ],
    },
  ],
};

const getMenuLinksPr = (countryCode: string) => {
  return menuLinks[countryCode] || [];
};

export { getMenuLinksPr };
