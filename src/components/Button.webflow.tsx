import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import { CustomButton } from "./Button";  

export default declareComponent(CustomButton, {
  name: "Button",
  description: "A simple button component",
  props: {
    children: props.Text({
      name: "Button Text",
      defaultValue: "Click me"
    }),
    variant: props.Variant({
      name: "Style",
      options: ["text", "outlined", "contained"],
      defaultValue: "contained"
    }),
    color: props.Variant({
      name: "Color",
      options: ["primary", "secondary", "error", "info", "success", "warning"],
      defaultValue: "primary"
    })
  },
});
