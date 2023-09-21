import { useEffect, useState } from "react";

const useScreenSize = () => {
  if (typeof window === "undefined") {
    return 0;
  }
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
}

export default useScreenSize;