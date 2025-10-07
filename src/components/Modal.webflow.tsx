import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import { BasicModal } from "./Modal";

export default declareComponent(BasicModal, {
  name: "Basic Modal",
  description: "Basic Modal component",
  props: {
    isOpen: props.Boolean({
      name: "Is Open",
      defaultValue: false
    }),
    buttonText: props.Text({
      name: "Button Text",
      defaultValue: "Open Modal"
    }),
    title: props.Text({
      name: "Title",
      defaultValue: "Modal"
    }),
    details: props.Text({
      name: "Details",
      defaultValue: "Modal"
    })
  },
});