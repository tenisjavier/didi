import React from "react";
import { t } from "../../context/countryContext";
import ListSection from "../ListSection";

interface ListProps {
  data: {
    name: string;
    slug: string;
    image: any;
  }[];
}

