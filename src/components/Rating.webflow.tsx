import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import { CustomizedRating } from "./Rating";

export default declareComponent(CustomizedRating, {
  name: "Rating",
  description: "MUI Rating component",
  props: {
    value: props.Number({
      name: "Value",
      defaultValue: 3
    }),
    max: props.Number({
      name: "Max",
      defaultValue: 5
    })
  },
});