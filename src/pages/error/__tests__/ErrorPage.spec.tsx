import React from "react";
import renderer from "react-test-renderer";
import ErrorPage from "@pages/error/ErrorPage";

describe("<ErrorPage /> component test", () => {
  it("Should properly render ErrorPage component", () => {
    const component = renderer.create(<ErrorPage />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
