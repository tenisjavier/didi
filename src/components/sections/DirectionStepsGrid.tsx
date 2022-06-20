import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWalking, faBus, faSubway } from "@fortawesome/free-solid-svg-icons";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface DirectionStepGrid {
  data: {
    carDuration: string;
    destination: string;
    destinationAddress: string;
    destinationId: string;
    distance: string;
    duration: string;
    mode: string;
    origin: string;
    originAddress: string;
    originId: string;
    steps: {
      distance: string;
      duration: string;
      instruction: string;
      mode: string;
      name: string;
      transit?: {
        arrival: string;
        departure: string;
        line_color: string;
        line_name: string;
        line_short_name: string;
        vehicle_type: string;
      };
    }[];
  };
}

const DirectionStepGrid = ({ data }: DirectionStepGrid) => {
  const { steps, destination, origin, duration } = data;

  const props: any = {
    bgColor: "bg-white",
    title: `Pasos en público a ${destination} desde ${origin} (${duration})`,
    textColor: "gray-primary",
    columns: [],
  };

  steps.reverse().forEach((step: any, index: any) => {
    let icon = faWalking;
    if (step.transit) {
      icon = step.transit.vehicle_type === "BUS" ? faBus : faSubway;
    }
    let line = step.transit ? " | Línea: " + step.transit.line_short_name : "";
    let lineName = step.transit ? " | Línea: " + step.transit.line_name : "";
    props.columns.push({
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

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default DirectionStepGrid;
