import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "../../components/Card";
import movies from "../../__mocks__/movies";

describe("Card Component", () => {
  beforeEach(() => {
    render(<Card movie={movies[0]} />);
  });

  it("renders the card as a link", () => {
    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
  });

  it("renders the heading of the card", () => {
    const heading = screen.getByRole("heading");
    expect(heading.textContent).toBe(movies[0].title);
  });

  it("renders the average of the movie", () => {
    const avg = screen.getByText(movies[0].vote_average);
    expect(avg).toBeInTheDocument();
  });
});
