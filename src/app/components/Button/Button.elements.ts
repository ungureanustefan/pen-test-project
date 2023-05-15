// Import: Packages
import styled from "styled-components/macro";

export const StyledButton = styled.button`
  background: #cd054f;
  border-radius: 3px;
  height: 2rem;
  width: 5rem;
  border: none;
  color: #fff;
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: #fff;
    color: #cd054f;
    border: 1px solid #cd054f;
  }
  &:focus {
    outline: none;
  }
`;
