import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import BeerId from "./BeerId";

it("should render the beer details", () => {
  render(
    <MemoryRouter initialEntries={[`/punk-api/8`]}>
      <Routes>
        <Route
          path="/punk-api/:id"
          element={<BeerId beer={exampleObject} />}
        ></Route>
      </Routes>
    </MemoryRouter>
  );

  const beerImage = screen.getByAltText(/Fake Lager/i);
  const beerName = screen.getByRole("heading", { name: /Fake Lager/i });
  const beerDescription = screen.getByText(/Fake is the new black/i);
  const abv = screen.getByText(/abv:/i);
  const ibu = screen.getByText(/ibu:/i);
  const firstBrewed = screen.getByText(/first brewed:/i);
  const foodPairing1 = screen.getByText(/crab/i);
  const foodPairing2 = screen.getByText(/pork/i);

  expect(beerImage).toBeInTheDocument();
  expect(beerName).toBeInTheDocument();
  expect(beerDescription).toBeInTheDocument();
  expect(abv).toBeInTheDocument();
  expect(ibu).toBeInTheDocument();
  expect(firstBrewed).toBeInTheDocument();
  expect(foodPairing1).toBeInTheDocument();
  expect(foodPairing2).toBeInTheDocument();
});

it("should render an error message for invalid beer ID", () => {
  render(
    <MemoryRouter initialEntries={[`/beer/742344`]}>
      <BeerId beer={exampleObject} />
    </MemoryRouter>
  );

  const errorMessage = screen.getByText(/That bottle fell of the truck/i);
  expect(errorMessage).toBeInTheDocument();
});

const exampleObject = [
  {
    id: 7,
    name: "AB:12",
    tagline: "Imperial Black Belgian Ale.",
    first_brewed: "07/2012",
    description:
      "An Imperial Black Belgian Ale aged in old Invergordon Scotch whisky barrels with mountains of raspberries, tayberries and blackberries in each cask. Decadent but light and dry, this beer would make a fantastic base for ageing on pretty much any dark fruit - we used raspberries, tayberries and blackberries beause they were local.",
    image_url: "https://images.punkapi.com/v2/7.png",
    abv: 11.2,
    ibu: 35,
    target_fg: 1017,
    target_og: 1108,
    ebc: 80,
    srm: 40,
    ph: 5.3,
    attenuation_level: 84,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      mash_temp: [
        {
          temp: {
            value: 69,
            unit: "celsius",
          },
          duration: 105,
        },
      ],
      fermentation: {
        temp: {
          value: 21,
          unit: "celsius",
        },
      },
      twist:
        "Aged in whisky barrels with raspberries, tayberries and blackberries",
    },
    ingredients: {
      malt: [
        {
          name: "Extra Pale",
          amount: {
            value: 9.69,
            unit: "kilograms",
          },
        },
        {
          name: "Chocolate",
          amount: {
            value: 0.19,
            unit: "kilograms",
          },
        },
        {
          name: "Carafa Special Malt Type 3",
          amount: {
            value: 0.44,
            unit: "kilograms",
          },
        },
      ],
      hops: [
        {
          name: "Tomahawk",
          amount: {
            value: 31.25,
            unit: "grams",
          },
          add: "start",
          attribute: "bitter",
        },
        {
          name: "Magnum",
          amount: {
            value: 12.5,
            unit: "grams",
          },
          add: "start",
          attribute: "bitter",
        },
        {
          name: "Magnum",
          amount: {
            value: 12.5,
            unit: "grams",
          },
          add: "middle",
          attribute: "flavour",
        },
        {
          name: "Tomahawk",
          amount: {
            value: 12.5,
            unit: "grams",
          },
          add: "end",
          attribute: "flavour",
        },
        {
          name: "Centennial",
          amount: {
            value: 25,
            unit: "grams",
          },
          add: "end",
          attribute: "flavour",
        },
        {
          name: "Amarillo",
          amount: {
            value: 25,
            unit: "grams",
          },
          add: "end",
          attribute: "flavour",
        },
        {
          name: "Centennial",
          amount: {
            value: 25,
            unit: "grams",
          },
          add: "dry hop",
          attribute: "aroma",
        },
        {
          name: "Amarillo",
          amount: {
            value: 25,
            unit: "grams",
          },
          add: "dry hop",
          attribute: "aroma",
        },
        {
          name: "Tomahawk",
          amount: {
            value: 37.5,
            unit: "grams",
          },
          add: "dry hop",
          attribute: "aroma",
        },
      ],
      yeast: "Wyeast 3522 - Belgian Ardennes™",
    },
    food_pairing: [
      "Tandoori lamb with pomegranate",
      "Beef Wellington with a red wine jus",
      "Raspberry chocolate torte",
    ],
    brewers_tips:
      "Don't worry too much about controlling the temperature with the Belgian yeast strain - just make sure it doesn't rise above 30°C!",
    contributed_by: "Sam Mason <samjbmason>",
  },
  {
    id: 8,
    name: "Fake Lager",
    tagline: "Bohemian Pilsner.",
    first_brewed: "03/2013",
    description:
      "Fake is the new black. Fake is where it is at. Fake Art, fake brands, fake breasts, and fake lager. We want to play our part in the ugly fallout from the Lager Dream. Say hello to Fake Lager – a zesty, floral 21st century faux masterpiece with added BrewDog bitterness.",
    image_url: "https://images.punkapi.com/v2/8.png",
    abv: 4.7,
    ibu: 40,
    target_fg: 1010,
    target_og: 1046,
    ebc: 12,
    srm: 6,
    ph: 4.4,
    attenuation_level: 78,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      mash_temp: [
        {
          temp: {
            value: 65,
            unit: "celsius",
          },
          duration: 75,
        },
      ],
      fermentation: {
        temp: {
          value: 10,
          unit: "celsius",
        },
      },
      twist: null,
    },
    ingredients: {
      malt: [
        {
          name: "Extra Pale",
          amount: {
            value: 3.33,
            unit: "kilograms",
          },
        },
        {
          name: "Munich",
          amount: {
            value: 0.42,
            unit: "kilograms",
          },
        },
        {
          name: "Caramalt",
          amount: {
            value: 0.28,
            unit: "kilograms",
          },
        },
        {
          name: "Acidulated Malt",
          amount: {
            value: 0.07,
            unit: "kilograms",
          },
        },
      ],
      hops: [
        {
          name: "Magnum",
          amount: {
            value: 7.5,
            unit: "grams",
          },
          add: "start",
          attribute: "bitter",
        },
        {
          name: "Magnum",
          amount: {
            value: 5,
            unit: "grams",
          },
          add: "middle",
          attribute: "flavour",
        },
        {
          name: "Hersbrucker",
          amount: {
            value: 6.25,
            unit: "grams",
          },
          add: "middle",
          attribute: "flavour",
        },
        {
          name: "Saaz",
          amount: {
            value: 6.25,
            unit: "grams",
          },
          add: "middle",
          attribute: "flavour",
        },
        {
          name: "Hersbrucker",
          amount: {
            value: 18.75,
            unit: "grams",
          },
          add: "end",
          attribute: "flavour",
        },
        {
          name: "Saaz",
          amount: {
            value: 18.75,
            unit: "grams",
          },
          add: "end",
          attribute: "flavour",
        },
      ],
      yeast: "Wyeast 2007 - Pilsen Lager™",
    },
    food_pairing: [
      "Fried crab cakes with avocado salsa",
      "Spicy shredded pork roll with hot dipping sauce",
      "Key lime pie",
    ],
    brewers_tips:
      "Once the primary fermentation is complete get this beer as cold as you can and let it mature for as long as you've got.",
    contributed_by: "Sam Mason <samjbmason>",
  },
  {
    id: 9,
    name: "AB:07",
    tagline: "Whisky Cask-Aged Scotch Ale.",
    first_brewed: "03/2010",
    description:
      "Whisky cask-aged imperial scotch ale. Beer perfect for when the rain is coming sideways. Liquorice, plum and raisin temper the warming alcohol, producing a beer capable of holding back the Scottish chill.",
    image_url: "https://images.punkapi.com/v2/9.png",
    abv: 12.5,
    ibu: 30,
    target_fg: 1020,
    target_og: 1106,
    ebc: 84,
    srm: 42,
    ph: 5.6,
    attenuation_level: 83,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      mash_temp: [
        {
          temp: {
            value: 65,
            unit: "celsius",
          },
          duration: 105,
        },
      ],
      fermentation: {
        temp: {
          value: 11,
          unit: "celsius",
        },
      },
      twist:
        "Scottish Heather Honey: 62.5g at middle, Add honey during the boil. After fermentation, age in a Scottish whisky cask",
    },
    ingredients: {
      malt: [
        {
          name: "Munich",
          amount: {
            value: 5.63,
            unit: "kilograms",
          },
        },
        {
          name: "Flaked Oats",
          amount: {
            value: 1.88,
            unit: "kilograms",
          },
        },
        {
          name: "Wheat",
          amount: {
            value: 1.88,
            unit: "kilograms",
          },
        },
        {
          name: "Caramalt",
          amount: {
            value: 1.25,
            unit: "kilograms",
          },
        },
        {
          name: "Crystal",
          amount: {
            value: 0.63,
            unit: "kilograms",
          },
        },
        {
          name: "Dark Crystal",
          amount: {
            value: 0.63,
            unit: "kilograms",
          },
        },
        {
          name: "Chocolate",
          amount: {
            value: 0.31,
            unit: "kilograms",
          },
        },
        {
          name: "Peated Malt",
          amount: {
            value: 0.13,
            unit: "kilograms",
          },
        },
        {
          name: "Amber",
          amount: {
            value: 0.13,
            unit: "kilograms",
          },
        },
        {
          name: "Brown",
          amount: {
            value: 0.13,
            unit: "kilograms",
          },
        },
      ],
      hops: [
        {
          name: "Saaz",
          amount: {
            value: 25,
            unit: "grams",
          },
          add: "start",
          attribute: "bitter",
        },
        {
          name: "First Gold",
          amount: {
            value: 31.3,
            unit: "grams",
          },
          add: "start",
          attribute: "bitter",
        },
      ],
      yeast: "Saflager S189",
    },
    food_pairing: [
      "Kedgeree",
      "Scotch broth with sourdough bread",
      "Clootie dumpling",
    ],
    brewers_tips:
      "Authentic heather honey adds a beautiful floral top note that is unachievable any other way.",
    contributed_by: "Sam Mason <samjbmason>",
  },
];
