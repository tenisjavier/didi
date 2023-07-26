export interface footerCountryFood {
  text: string;
  link: string;
}

interface AllFooterInterface {
  [countryCode: string]: footerCountryFood[];
}

const footerCountryFood: AllFooterInterface = {
  int: [
    { text: "Colombia", link: "/co/food/" },
    { text: "Costa Rica", link: "/cr/food/" },

    { text: "México", link: "/mx/food/" },
    { text: "Peru", link: "/pe/food/" },
  ],
  cl: [
    { text: "Colombia", link: "/co/food/" },
    { text: "Costa Rica", link: "/cr/food/" },

    { text: "México", link: "/mx/food/" },
    { text: "Peru", link: "/pe/food/" },
  ],
  co: [
    { text: "Colombia", link: "/co/food/" },
    { text: "Costa Rica", link: "/cr/food/" },

    { text: "México", link: "/mx/food/" },
    { text: "Peru", link: "/pe/food/" },
  ],
  cr: [
    { text: "Colombia", link: "/co/food/" },
    { text: "Costa Rica", link: "/cr/food/" },

    { text: "México", link: "/mx/food/" },
    { text: "Peru", link: "/pe/food/" },
  ],
  do: [
    { text: "Colombia", link: "/co/food/" },
    { text: "Costa Rica", link: "/cr/food/" },

    { text: "México", link: "/mx/food/" },
    { text: "Peru", link: "/pe/food/" },
  ],
  mx: [
    { text: "Colombia", link: "/co/food/" },
    { text: "Costa Rica", link: "/cr/food/" },

    { text: "México", link: "/mx/food/" },
    { text: "Peru", link: "/pe/food/" },
  ],
  pe: [
    { text: "Colombia", link: "/co/food/" },
    { text: "Costa Rica", link: "/cr/food/" },

    { text: "México", link: "/mx/food/" },
    { text: "Peru", link: "/pe/food/" },
  ],
};

const getfooterCountryFood = (countryCode: string): footerCountryFood[] => {
  return footerCountryFood[countryCode];
};

export { getfooterCountryFood };
