import React from "react";

interface ConsentPopupProps {
  isVisible: string;
  handleAccept(): any;
  handleDeny?(): any;
}

const ConsentPopup = ({
  isVisible,
  handleAccept,
  handleDeny,
}: ConsentPopupProps) => {
  return (
    <section
      className={`w-full px-8 py-4 fixed z-30 bg-gray-primary opacity-90 text-white items-center bottom-0 flex justify-between flex-wrap ${
        !isVisible && "hidden"
      }`}
    >
      <div>
        <p className="text-xl text-left">
          For best online experience please click "Accept Cookies" to allow us
          and our vendors to set cookies and similar technologies on your
          device. To find out more about how our website uses cookies, please
          see our{" "}
          <a
            href="https://privacycenter.didiglobal.com/GLOBAL/privacy-notice/ddfcd0c7df5156972c555177501ef5fd/GLOBAL"
            className="text-orange-primary underline"
          >
            Cookie Privacy Policy
          </a>{" "}
        </p>
      </div>
      <div className="text-right w-full">
        <button
          className="btn-primary mx-2"
          onClick={() => {
            handleAccept();
          }}
        >
          Accept All
        </button>
        {handleDeny && (
          <button className="btn-light mx-2" onClick={() => handleDeny()}>
            Deny
          </button>
        )}
      </div>
    </section>
  );
};

export default ConsentPopup;
