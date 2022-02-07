import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWalking, faBus, faSubway } from "@fortawesome/free-solid-svg-icons";
import ColumnsSection from "../ColumnSection";

const DirectionStepGrid = ({ data }) => {
  const { steps, destination, origin } = data;
  const bgColor = "bg-white";
  const title = `Pasos para llegar a ${destination} desde ${origin}`;
  const textColor = "gray-primary";
  let columns = [];

  steps.reverse().forEach((step, index) => {
    let icon = faWalking;
    if (step.transit) {
      icon = step.transit.vehicle_type === "BUS" ? faBus : faSubway;
    }
    let line = step.transit ? " | Línea: " + step.transit.line_short_name : "";
    let lineName = step.transit ? " | Línea: " + step.transit.line_name : "";
    columns.push({
      title:
        "Paso " +
        (index + 1) +
        ": " +
        step.duration +
        " | " +
        step.distance +
        line,
      desc: step.instruction + lineName,
      bgColor: "bg-white",
      image: (
        <FontAwesomeIcon
          icon={icon}
          size={"5x"}
          color={step.transit ? step.transit.line_color : "gray-primary"}
        ></FontAwesomeIcon>
      ),
    });
  });

  return (
    <ColumnsSection
      columns={columns}
      bgColor={bgColor}
      title={title}
      textColor={textColor}
    ></ColumnsSection>
  );
};

export default DirectionStepGrid;
