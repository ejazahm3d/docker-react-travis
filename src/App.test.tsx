import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("just says this", () => {
  const sum = 1 + 4;
  expect(sum).toEqual(5);
});

it("just says this", () => {
  const sum = 2 + 4;
  expect(sum).toEqual(6);
});
