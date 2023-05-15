import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button.component";

describe("Button component", () => {
  test("renders without errors", () => {
    render(<Button handleClick={() => {}} />);
  });

  test("displays the correct text", () => {
    const buttonText = "Click me";
    const { getByText } = render(
      <Button handleClick={() => {}}>{buttonText}</Button>
    );
    const buttonElement = getByText(buttonText);
    expect(buttonElement).toBeInTheDocument();
  });

  test("calls handleClick when clicked", () => {
    const handleClickMock = jest.fn();
    const { getByTestId } = render(<Button handleClick={handleClickMock} />);
    const buttonElement = getByTestId("button");
    fireEvent.click(buttonElement);
    expect(handleClickMock).toHaveBeenCalledTimes(1);
  });
});
