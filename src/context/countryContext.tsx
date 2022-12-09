//@desc context in charge of passing the country and the text translation function t()
import React, { useContext, createContext, useState, useMemo } from "react";
import { useLocation } from "@reach/router";

interface CountryProviderProps {
  children: React.ReactNode;
}

const CountryContext = createContext({ code: "/", ns: "translation" });

export const useCountry = () => {
  return useContext(CountryContext);
};

//@desc function used on every component that needs data from the translation file
// return string, object or null
export const t = (key: string, vars?: { [varKey: string]: any }) => {
  const locale = useCountry().code;
  const ns = useCountry().ns;
  const data = require(`../../locales/${locale}/${ns}.json`);
  let value = data[key];
  if (vars) {
    const keys = Object.keys(vars);
    keys.forEach((k) => {
      if (k === "returnObjects") return;
      const regExp = new RegExp(`{{${k}}}`);
      value = value ? value.replace(regExp, vars[k]) : null;
    });
  }
  return value;
};

export const CountryProvider = ({ children }: CountryProviderProps) => {
  const countries = [
    "cl",
    "ar",
    "pe",
    "ec",
    "co",
    "pa",
    "do",
    "cr",
    "mx",
    "eg",
    "ru",
    "nz",
    "au",
    "es",
    "hk"
  ];
  const { pathname } = useLocation();
  const subfolder = /^\/..\//.exec(pathname);
  let countryCode = subfolder ? subfolder[0].substring(1, 3) : "";
  countryCode = countries.includes(countryCode) ? countryCode : "en";
  let ns =
    pathname.includes("/food/") && !pathname.includes("/thejourney/")
      ? "food"
      : "translation";
  let [country, updateCountry] = useState({
    code: countryCode,
    ns: ns,
  });
  // const value = useMemo(() => ({ country, updateCountry }), [country.ns]);

  return (
    <CountryContext.Provider value={country}>
      {children}
    </CountryContext.Provider>
  );
};
