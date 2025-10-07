import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { EmotionCacheShadowDomProvider } from "@webflow/emotion-utils";

interface SliderProps {
  defaultValue: number;
  name: string;
  ariaLabel?: string;
}

export const SliderSizes = ({ defaultValue, name, ariaLabel }: SliderProps) => {
  const hostRef = React.useRef<HTMLDivElement | null>(null);
  const [value, setValue] = React.useState<number>(defaultValue);

  React.useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  // Find nearest light-DOM form (outside shadow) and attach a submit listener
  React.useEffect(() => {
    const root = hostRef.current?.getRootNode();
    const hostEl = root instanceof ShadowRoot ? (root.host as HTMLElement) : (hostRef.current as unknown as HTMLElement | null);
    const formEl = hostEl ? hostEl.closest('form') : null;
    if (!formEl) return;

    const onSubmit = () => {
      const evt = new CustomEvent('shadow-slider-submit', {
        detail: { name, value },
        bubbles: true,
        composed: true,
        cancelable: false,
      });
      // Dispatch on window so listeners in light DOM reliably receive it
      window.dispatchEvent(evt);
    };
    formEl.addEventListener('submit', onSubmit);
    return () => {
      formEl.removeEventListener('submit', onSubmit);
    };
  }, [name, value]);

  // Dispatch change events whenever slider value changes
  React.useEffect(() => {
    const evt = new CustomEvent('shadow-slider-change', {
      detail: { name, value },
      bubbles: true,
      composed: true,
      cancelable: false,
    });
    // Dispatch both from the shadow host (for composed bubbling) and window (for direct listeners)
    hostRef.current?.dispatchEvent(evt);
    window.dispatchEvent(evt);
  }, [name, value]);

  const handleChange = (_event: unknown, newValue: number | number[]) => {
    const next = Array.isArray(newValue) ? newValue[0] : newValue;
    setValue(next);
  };

  return (
    <EmotionCacheShadowDomProvider>
      <div ref={hostRef}>
        <Box sx={{ width: 300 }}>
          <Slider
            name={name}
            value={value}
            onChange={handleChange}
            aria-label={ariaLabel}
            valueLabelDisplay="auto"
          />
        </Box>
      </div>
    </EmotionCacheShadowDomProvider>
  );
}