import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import StoreFleetHero from "../../components/sections/StoreFleetHero";
import { QRCodeSVG } from "qrcode.react";

const Store = () => {
  const [QRUrl, setQRUrl] = useState("http://onelink.to/s88fxw");
  const qr = (
    <QRCodeSVG
      value={QRUrl}
      size={300}
      height={300}
      width={300}
      bgColor="#ffffff"
      className="z-10 m-4 w-100"
    ></QRCodeSVG>
  );

  useEffect(() => {
    setQRUrl(
      document
        .getElementsByClassName("btn-light")[0]
        .getElementsByTagName("a")[0].href
    );
  }, []);

  return (
    <Layout>
      <StoreFleetHero image={qr}></StoreFleetHero>
    </Layout>
  );
};

export default Store;
