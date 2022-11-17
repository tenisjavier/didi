import React, { useContext, createContext, useState, useMemo } from "react";
import { useLocation } from "@reach/router";

interface CountryProviderProps {
  children: React.ReactNode;
}

const CountryContext = createContext({ code: "/", ns: "translation" });

export const useCountry = () => {
  return useContext(CountryContext);
};

export const t = (key: string) => {
  const locale = useCountry().code;
  const ns = useCountry().ns;
  const data = require(`../../locales/${locale}/${ns}.json`);
  return data[key];
};

export const CountryProvider = ({ children }: CountryProviderProps) => {
  const { pathname } = useLocation();
  const countryCode = pathname ? pathname.substring(1, 3) : "";
  let ns = pathname.includes("/food/") ? "food" : "translation";
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
