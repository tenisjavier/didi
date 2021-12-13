import React from "react";

const BtnPax = (props) => {
  console.log(props);
  const mode = props.mode == "light" ? "btn-pax-light" : "btn-pax";
  return (
    <div className={mode}>
      <a href="https://global-rides-passenger.onelink.me/xNlo/globalhomepage">
        Descarga DiDi Pasajero{" "}
      </a>
    </div>
  );
};

export default BtnPax;
