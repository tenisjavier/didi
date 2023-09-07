import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import StoreHero from "../../components/sections/StoreHero";
import { QRCodeSVG } from "qrcode.react";

const Store = () => {
  const [QRUrl, setQRUrl] = useState(
    "https://global-rides-passenger.onelink.me/xNlo"
  );
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
    let url = new URL(window.location.href);
    //? only af params
    let pid = url.searchParams.get("pid");
    let c = url.searchParams.get("c");
    let af_ad_id = url.searchParams.get("af_ad_id");
    let af_adset_id = url.searchParams.get("af_adset_id");
    let af_c_id = url.searchParams.get("af_c_id");
    let af_channel = url.searchParams.get("af_channel");
    let af_url = new URL(url.origin + url.pathname);
    af_url.searchParams.set("pid", pid);
    af_url.searchParams.set("c", c);
    af_url.searchParams.set("af_ad_id", af_ad_id);
    af_url.searchParams.set("af_adset_id", af_adset_id);
    af_url.searchParams.set("af_c_id", af_c_id);
    af_url.searchParams.set("af_channel", af_channel);

    setQRUrl(af_url.href);
  }, []);
  return (
    <Layout>
      <StoreHero image={qr}></StoreHero>
    </Layout>
  );
};

export default Store;
