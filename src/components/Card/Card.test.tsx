import { render, screen } from "@testing-library/react";
import Card from "./Card";

it("should render a card", () => {
  const exampleBeerProfile = {
    name: "Duff Beer",
    description:
      "An everyman's beer, Duff is a light refreshing beer that is sourced from only the highest quality wheat",
    abv: 2.5,
    image_url: "https://images.punkapi.com/v2/90.png",
  };

  render(<Card beerProfile={exampleBeerProfile} />);

  const name = screen.getByRole("heading", { name: /duff/i });
  expect(name).toBeInTheDocument();

  // Check if ABV is rendered
  const abv = screen.getByText(/abv 2.5%/i);
  expect(abv).toBeInTheDocument();

  // Check if description is rendered
  const description = screen.getByText(
    /An everyman's beer, Duff is a light refreshing beer/i
  );
  expect(description).toBeInTheDocument();

  // Check if image is rendered
  const image = screen.getByAltText(/duff beer/i);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src", exampleBeerProfile.image_url);
});
