import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { EmotionCacheShadowDomProvider } from "@webflow/emotion-utils";



interface RatingProps {
  value: number;
  max: number;
}

export const CustomizedRating = ({ value, max }: RatingProps) => {
  return (
    <EmotionCacheShadowDomProvider>
      <Box>
       <Rating precision={0.5} name="rating" value={value} max={max} readOnly />
      </Box>
    </EmotionCacheShadowDomProvider>
  );
}
