import React from "react";
import { Button } from "@mui/material";
import { EmotionCacheShadowDomProvider } from "@webflow/emotion-utils";

interface ButtonProps {
  /** Button text content */
  children: React.ReactNode;
  /** Button variant style */
  variant?: "text" | "outlined" | "contained";
  /** Button color */
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  /** Click handler */
  onClick?: () => void;
}

/**
 * A customizable button component built on Material-UI
 */
export const CustomButton = ({
  children,
  variant = "contained",
  color = "primary",
  onClick,
}: ButtonProps) => {
  return (
    <EmotionCacheShadowDomProvider>
      <Button
        variant={variant}
        color={color}
        onClick={onClick}
      >
        {children}
      </Button>
    </EmotionCacheShadowDomProvider>
  );
};

