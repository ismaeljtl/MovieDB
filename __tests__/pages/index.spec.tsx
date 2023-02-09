import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../../pages";
import movies from "../../__mocks__/movies";

describe("Homepage", () => {
  beforeEach(() => {
    render(<Home data={movies} error={null} isOk={true} />);
  });

  it("renders the card as a link", () => {
    const link = screen.getAllByRole("link");
    expect(link.length).toBe(4);
  });
});
