// Import: Packages
// eslint-disable-next-line no-unused-vars
import React, { ReactNode, MouseEventHandler } from "react";

// Import: Elements
import { StyledButton } from "./Button.elements";

interface ButtonProps {
  children: ReactNode;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

// Component: Button
export default function Button({ handleClick, children }: ButtonProps) {
  return (
    <StyledButton onClick={handleClick} data-testid="button">
      {children}
    </StyledButton>
  );
}
