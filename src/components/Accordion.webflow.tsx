import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import { MUIAccordion } from "./Accordion";

export default declareComponent(MUIAccordion, {
  name: "Accordion",
  description: "MUI Accordion component",
  props: {
    header: props.Text({
      name: "Header",
      defaultValue: "Title"
    }),
    details: props.Text({
      name: "Details",
      defaultValue: "Details"
    }),
    id: props.Text({
      name: "ID",
      defaultValue: "accordion"
    }),
    defaultExpanded: props.Boolean({
      name: "Default Expanded",
      defaultValue: false
    }),
  },
});