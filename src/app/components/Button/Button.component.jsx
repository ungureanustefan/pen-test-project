// Import: Packages
// eslint-disable-next-line no-unused-vars
import React from "react";
import { PropTypes } from "prop-types";

// Import: Elements
import { StyledButton } from "./Button.elements";

// Component: Button
export default function Button({ handleClick, children }) {
  return (
    <StyledButton onClick={handleClick} data-testid="button">
      {children}
    </StyledButton>
  );
}

// PropTypes
Button.propTypes = {
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func.isRequired,
};
