import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon";

const cardData = {
  ...TEST_IMAGES[0],
  currNum: 1,
  totalNum: TEST_IMAGES.length,
};

it("renders without crashing", function () {
  render(<Card {...cardData} />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<Card {...cardData} />);
  expect(asFragment()).toMatchSnapshot();
});
