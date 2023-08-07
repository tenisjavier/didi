import React, { useState } from "react";

interface SectionIframeProps {}

const SectionIframe = ({}: SectionIframeProps) => {
  const [loading, setLoading] = useState(true);
  const handleIframeLoad = () => {
    setLoading(false);
  };
  return (
    <div className="mt-16  h-full flex justify-center lg:justify-end  z-20  mb-10 lg:ml-8 overflow-hidden">
      {loading && <img src="../../../../loading.gif"></img>}
      <iframe
        id="h5"
        src="https://ssa-rides-driver.onelink.me/mbwy/mxdriverhero"
        className={`${
          loading ? "hidden" : "block"
        }w-96 h-110 rounded-lg border-0 overscroll-contain`}
        onLoad={handleIframeLoad}
      ></iframe>
    </div>
  );
};

export default SectionIframe;
