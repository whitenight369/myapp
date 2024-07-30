import React, { act } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./button";

describe("test button props", () => {
  it("default", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Nice</Button>);
    const element = screen.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("BUTTON");
    expect(element).toHaveClass("btn btn-default");
    fireEvent.click(element);
    expect(onClick).toHaveBeenCalled();
  });
});
