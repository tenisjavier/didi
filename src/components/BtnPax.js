import React from "react";

const BtnPax = (props) => {
  const mode = props.mode == "light" ? "btn-pax-light" : "btn-pax";
  return <button className={mode}>Descarga DiDi Pasajero</button>;
};

export default BtnPax;
