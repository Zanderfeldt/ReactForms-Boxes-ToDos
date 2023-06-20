import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import Box from './Box';

it("render without crashing", () => {
  render(<Box />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<Box />);
  expect(asFragment()).toMatchSnapshot();
});