import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { EmotionCacheShadowDomProvider } from "@webflow/emotion-utils";
 

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  color: 'text.primary',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface ModalProps {
  isOpen: boolean;
  buttonText: string;
  buttonType?: "text" | "outlined" | "contained";
  title: string;
  details: string;
  modalID: string;
  modalDescription: string;
}

export const BasicModal = ({ isOpen, buttonText, buttonType = "contained", title, details, modalID, modalDescription }: ModalProps) => {
  const [open, setOpen] = React.useState(isOpen);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const hostRef = React.useRef<HTMLDivElement | null>(null);

  return (
    <EmotionCacheShadowDomProvider>
      <div ref={hostRef}>
        <Button variant={buttonType} onClick={handleOpen}>{buttonText}</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby={modalID}
          aria-describedby={modalDescription}
          container={() => hostRef.current || document.body}
        >
          <Box sx={style}>
            <Typography id={modalID} variant="h6" component="h2">
              {title}
            </Typography>
            <Typography id={modalDescription} sx={{ mt: 2 }}>
              {details}
            </Typography>
          </Box>
        </Modal>
      </div>
    </EmotionCacheShadowDomProvider>
  );
}
