import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import NewBoxForm from './NewBoxForm';

it("render without crashing", () => {
  render(<NewBoxForm />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
});