export interface footerCountryFood {
  text: string;
  link: string;
}

interface AllFooterInterface {
  [countryCode: string]: footerCountryFood[];
}

const footerCountryFood: AllFooterInterface = {
  int: [
    { text: "Chile", link: "/cl/food/" },
    { text: "Colombia", link: "/co/food/" },
    { text: "Costa Rica", link: "/cr/food/" },
    { text: "Republica Dominicana", link: "/do/food/" },
    { text: "México", link: "/mx/food/" },
    { text: "Peru", link: "/pe/food/" },
  ],
  cl: [
    { text: "Chile", link: "/cl/food/" },
    { text: "Colombia", link: "/co/food/" },
    { text: "Costa Rica", link: "/cr/food/" },
    { text: "Republica Dominicana", link: "/do/food/" },
    { text: "México", link: "/mx/food/" },
    { text: "Peru", link: "/pe/food/" },
  ],
  co: [
    { text: "Chile", link: "/cl/food/" },
    { text: "Colombia", link: "/co/food/" },
    { text: "Costa Rica", link: "/cr/food/" },
    { text: "Republica Dominicana", link: "/do/food/" },
    { text: "México", link: "/mx/food/" },
    { text: "Peru", link: "/pe/food/" },
  ],
  cr: [
    { text: "Chile", link: "/cl/food/" },
    { text: "Colombia", link: "/co/food/" },
    { text: "Costa Rica", link: "/cr/food/" },
    { text: "Republica Dominicana", link: "/do/food/" },
    { text: "México", link: "/mx/food/" },
    { text: "Peru", link: "/pe/food/" },
  ],
  do: [
    { text: "Chile", link: "/cl/food/" },
    { text: "Colombia", link: "/co/food/" },
    { text: "Costa Rica", link: "/cr/food/" },
    { text: "Republica Dominicana", link: "/do/food/" },
    { text: "México", link: "/mx/food/" },
    { text: "Peru", link: "/pe/food/" },
  ],
  mx: [
    { text: "Chile", link: "/cl/food/" },
    { text: "Colombia", link: "/co/food/" },
    { text: "Costa Rica", link: "/cr/food/" },
    { text: "Republica Dominicana", link: "/do/food/" },
    { text: "México", link: "/mx/food/" },
    { text: "Peru", link: "/pe/food/" },
  ],
  pe: [
    { text: "Chile", link: "/cl/food/" },
    { text: "Colombia", link: "/co/food/" },
    { text: "Costa Rica", link: "/cr/food/" },
    { text: "Republica Dominicana", link: "/do/food/" },
    { text: "México", link: "/mx/food/" },
    { text: "Peru", link: "/pe/food/" },
  ],
};

const getfooterCountryFood = (countryCode: string): footerCountryFood[] => {
  return footerCountryFood[countryCode];
};

export { getfooterCountryFood };
