import React, { useState, useEffect } from "react";

const Popup = () => {
  const windowGlobal = typeof window !== "undefined" && window;
  const storageType = windowGlobal.localStorage;
  const consentName = "didi_consent";

  const shouldShowPopup = () => !storageType.getItem(consentName);
  const [isVisible, setIsVisible] = useState(shouldShowPopup);
  const saveConsent = () => storageType.setItem(consentName, true);

  useEffect(() => {}, []);
  return (
    <div>
      <div
        className={`w-full h-40 bg-white flex justify-between flex-wrap ${
          !isVisible && "hidden"
        }`}
      >
        <div>
          <h5 className="text-2xl">Desea Tener Cookies</h5>
        </div>
        <div>
          <button
            className="btn-primary"
            onClick={() => {
              saveConsent();
              setIsVisible(false);
            }}
          >
            Accept
          </button>
          <button className="btn-light" onClick={() => setIsVisible(false)}>
            Deny
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
