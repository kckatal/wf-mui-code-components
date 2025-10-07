import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import { SliderSizes } from "./Slider";  

export default declareComponent(SliderSizes, {
  name: "Slider",
  description: "MUI Slider component",
  options: {
    ssr: false
  },
  props: {
    name: props.Text({
      name: "Name",
      defaultValue: "Slider"
    }),
    defaultValue: props.Number({
      name: "Default Value",
      defaultValue: 70
    }),
    ariaLabel: props.Text({
      name: "Aria Label",
      defaultValue: "Slider"
    })
  },
});
