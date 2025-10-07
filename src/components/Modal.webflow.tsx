import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import { BasicModal } from "./Modal";

export default declareComponent(BasicModal, {
  name: "Basic Modal",
  description: "Basic Modal component",
  props: {
    buttonText: props.Text({
      name: "Button Text",
      defaultValue: "Open Modal"
    }),
    title: props.Text({
      name: "Title",
      defaultValue: "Title"
    }),
    details: props.Text({
      name: "Details",
      defaultValue: "Details"
    }),
    modalID: props.Text({
      name: "Modal ID",
      defaultValue: "modal-modal-title"
    }),
    modalDescription: props.Text({
      name: "Modal Description",
      defaultValue: "modal-modal-description"
    })
  },
});