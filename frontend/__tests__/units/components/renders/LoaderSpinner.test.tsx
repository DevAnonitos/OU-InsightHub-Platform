import React from "react";
import { render, screen } from "@testing-library/react";
import LoaderSpinner from "@/components/Loading/LoaderSpinner";

describe("LoaderSpinner Component", () => {
  it("should render the LoaderSpinner component", () => {
    render(<LoaderSpinner />);
    const wrapper = screen.getByTestId("loader-wrapper");
    expect(wrapper).toBeInTheDocument();
  });

  it("should render the Loader icon", () => {
    render(<LoaderSpinner />);
    const loaderIcon = screen.getByTestId("loader-icon");
    expect(loaderIcon).toBeInTheDocument();
  });

  it("should have correct Tailwind classes", () => {
    render(<LoaderSpinner />);
    const wrapper = screen.getByTestId("loader-wrapper");
    expect(wrapper).toHaveClass("flex");
    expect(wrapper).toHaveClass("justify-center");
    expect(wrapper).toHaveClass("items-center");
    expect(wrapper).toHaveClass("h-screen");
    expect(wrapper).toHaveClass("animate-spin");
  });

  it("should match snapshot", () => {
    const { container } = render(<LoaderSpinner />);
    expect(container).toMatchSnapshot();
  });
});
