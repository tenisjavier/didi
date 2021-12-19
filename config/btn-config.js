// @desc: utility library for ctaButtons and oneLinks

const btnLinks = {
  cl: {
    drvLink: "https://ssa-rides-driver.onelink.me/mbwy/cldriverhero",
    paxLink: "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
    drvText: "Regístrate Online",
    paxText: "Descarga Didi Pasajero",
  },
  pe: {
    drvLink: "https://ssa-rides-driver.onelink.me/mbwy/pedriverhero",
    paxLink: "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
    drvText: "Regístrate Online",
    paxText: "Descarga Didi Pasajero",
  },
  ar: {
    drvLink: "https://ssa-rides-driver.onelink.me/mbwy/ardriverhero",
    paxLink: "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
    drvText: "Regístrate Online",
    paxText: "Descarga Didi Pasajero",
  },
  co: {
    drvLink: "https://ssa-rides-driver.onelink.me/mbwy/codriverhero",
    paxLink: "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
    drvText: "Regístrate Online",
    paxText: "Descarga Didi Pasajero",
  },
  ec: {
    drvLink: "https://ssa-rides-driver.onelink.me/mbwy/ecdriverhero",
    paxLink: "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
    drvText: "Regístrate Online",
    paxText: "Descarga Didi Pasajero",
  },
  rd: {
    drvLink: "https://ssa-rides-driver.onelink.me/mbwy/rddriverhero",
    paxLink: "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
    drvText: "Regístrate Online",
    paxText: "Descarga Didi Pasajero",
  },
  cr: {
    drvLink: "https://ssa-rides-driver.onelink.me/mbwy/crdriverhero",
    paxLink: "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
    drvText: "Regístrate Online",
    paxText: "Descarga Didi Pasajero",
  },
  pa: {
    drvLink: "https://ssa-rides-driver.onelink.me/mbwy/padriverhero",
    paxLink: "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
    drvText: "Regístrate Online",
    paxText: "Descarga Didi Pasajero",
  },
  mx: {
    drvLink: "https://ssa-rides-driver.onelink.me/mbwy/mxdriverhero",
    paxLink: "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
    drvText: "Regístrate Online",
    paxText: "Descarga Didi Pasajero",
  },
};

const getBtnLinks = (country) => {
  return btnLinks[country];
};

module.exports = { getBtnLinks };
