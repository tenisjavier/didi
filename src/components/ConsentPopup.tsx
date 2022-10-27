import React, { useState } from "react";

interface ConsentPopupProps {
  isVisible: string;
  handleAccept: any;
  handleDeny: any;
}

const ConsentPopup = ({
  isVisible,
  handleAccept,
  handleDeny,
}: ConsentPopupProps) => {
  return (
    <section
      className={`w-full h-40 fixed z-30 items-center bottom-0 bg-white flex justify-between flex-wrap ${
        !isVisible && "hidden"
      }`}
    >
      <div>
        <h5 className="text-2xl text-center">Desea Tener Cookies</h5>
      </div>
      <div className="justify-center items-center">
        <button
          className="btn-primary mx-2"
          onClick={() => {
            handleAccept();
          }}
        >
          Accept
        </button>
        <button className="btn-light mx-2" onClick={() => handleDeny(false)}>
          Deny
        </button>
      </div>
    </section>
  );
};

export default ConsentPopup;
