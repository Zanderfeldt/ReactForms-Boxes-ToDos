import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

it("renders without crashing", () => {
  render(<BoxList />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("should add new box", () => {
  const { queryByText, getByLabelText, getByText, getAllByDisplayValue } = render(<BoxList />);

  expect(queryByText("X")).not.toBeInTheDocument();
  fireEvent.change(getByLabelText("Height"), { target: { value: '5' }});
  fireEvent.change(getByLabelText("Width"), { target: { value: '5' }});
  fireEvent.change(getByLabelText("Color"), { target: { value: 'red'}});
  const button = getByText("Create Box");
  fireEvent.click(button);

  const removeButton = getByText("X");
  expect(removeButton).toBeInTheDocument();
  expect(removeButton.previousSibling).toHaveStyle(`
    width: 5em;
    height: 5em;
    background-color: red;
  `);
  expect(getAllByDisplayValue("")).toHaveLength(3);
});

it("should remove a box", () => {
  const { getByLabelText, getByText, } = render(<BoxList />);

  fireEvent.change(getByLabelText("Height"), { target: { value: '5' }});
  fireEvent.change(getByLabelText("Width"), { target: { value: '5' }});
  fireEvent.change(getByLabelText("Color"), { target: { value: 'red'}});
  const button = getByText("Create Box");
  fireEvent.click(button);

  const removeButton = getByText("X");
  fireEvent.click(removeButton);
  expect(removeButton).not.toBeInTheDocument();
});