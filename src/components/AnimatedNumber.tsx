import React, { ReactNode, useEffect } from "react";
import ContactCard, { ContactBlockProps, ContactsInfo } from "./ContactBlock";

export interface AnimatedNumberProps {
  number?: number;
  maxNumber?: number | undefined;
  titleAfter: ReactNode | string;
  identifier: string;
}

const AnimatedNumber = ({ number, maxNumber, titleAfter, identifier }: AnimatedNumberProps) => {
  useEffect(() => {
    const counters : NodeListOf<HTMLElement> = document.querySelectorAll("."+identifier);
    const speed = 200;

    if(maxNumber != undefined && maxNumber != null) {
      counters.forEach(counter => {
        const animate = () => {
          const data = parseInt(counter.innerText);
          
          const time = (maxNumber != undefined || maxNumber != null) ? maxNumber / speed * .5 : 0;
          if(data < maxNumber) {
            counter.innerText = String(Math.ceil(data + time));
            setTimeout(animate, 1);
          } else {
            counter.innerText = String(maxNumber);
          }
        }
        animate();

      });
    }
  });
  
  return (
    <h5 className="mt-0 mb-4 text-6xl font-bold"><span className={identifier}>{number}</span>{titleAfter}</h5>
  );
};

export default AnimatedNumber;
