import React from "react";
import Card from "../Card";

const SectionCards = (props) => {
  const { cards, bgColor } = props;
  return (
    <section className={`flex justify-around flex-wrap ${bgColor}`}>
      {cards.map((card) => {
        return <Card {...card}></Card>;
      })}
    </section>
  );
};

export default SectionCards;
