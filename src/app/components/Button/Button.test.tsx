import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Button from "./Button.component";

describe("Button component", () => {
  test("renders without errors", () => {
    render(<Button handleClick={() => {}} children={undefined} />);
  });

  test("displays the correct text", () => {
    const buttonText = "Click me";
    const { getByText } = render(
      <Button handleClick={() => {}}>{buttonText}</Button>
    );
    const buttonElement = screen.getByText(buttonText);
    expect(buttonElement).toBeInTheDocument();
  });

  test("calls handleClick when clicked", () => {
    const handleClickMock = jest.fn();
    const { getByTestId } = render(
      <Button handleClick={handleClickMock} children={undefined} />
    );
    const buttonElement = screen.getByTestId("button");
    fireEvent.click(buttonElement);
    expect(handleClickMock).toHaveBeenCalledTimes(1);
  });
});
