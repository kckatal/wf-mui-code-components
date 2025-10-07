import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { EmotionCacheShadowDomProvider } from "@webflow/emotion-utils";

interface AccordionProps {
  header: string;
  details: string;
  id: string;
  defaultExpanded?: boolean;
}

export const MUIAccordion = ({ header, details, id, defaultExpanded }: AccordionProps) => {
  return (
    <EmotionCacheShadowDomProvider>
      <Accordion defaultExpanded={defaultExpanded}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id={`${id}-header`}
        >
          <Typography component="span">{header}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {details}
        </AccordionDetails>
      </Accordion>
    </EmotionCacheShadowDomProvider>
  );
};
