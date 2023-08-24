# Project Name

**Project Description:** This project is a React-based website that utilizes the Punk API to showcase a collection of beers. The website includes a filtering mechanism based on alcohol content, brew range, and acidity, allowing users to explore and discover beers based on their preferences. The project was completed over a week as part of ongoing learning and development in React through the \_nology program.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Challenges](#challenges)
- [Contributing](#contributing)
- [About-Me](#about-me)

## Introduction

The purpose of this project was to build a dynamic and user-friendly website that interacts with the Punk API, providing users with an engaging way to explore various beers. By utilizing React and its components, we aimed to create an intuitive user interface that allows users to apply different filters and find beers that match their preferences. The project showcases a combination of skills acquired during the \_nology program, including React, routing, state management, and testing.

## Features

- **Beer Filtering:** Users can filter beers based on high alcohol content, classic range, and high acidity using the provided filters.
- **Responsive Design:** The website is designed to be responsive, ensuring a seamless experience across different devices.
- **Component-based Architecture:** The project employs a component-based architecture to keep the code organized, maintainable, and reusable.
- **Browser Router:** The use of React Router ensures smooth navigation between different sections of the website.
- **Testing:** Where possible, the project includes React Testing Library (RTL) tests to ensure the reliability of the components.

## Getting Started

### Installation

1. Clone the repository: `git clone https://github.com/luke-welbourn/punk-api.git`
2. Navigate to the project directory: `cd punk-api`
3. Install the dependencies: `npm install`

### Usage

1. Start the development server: `npm run dev`
2. This should automatically open up a new tab with a local host that should work effectively

## Components

The project is structured with the following components:

- `App`: The root component that uses React Router for navigation.
- `NavBar`: The navigation bar that includes search functionality and filters.
- `Main`: The main content area that displays the list of beers.
- `BeerId`: Displays detailed information about a specific beer using useParams React hook.
- `SearchBox`: A component for user input to search for specific beers.
- `FiltersList`: Displays a list of filter options.
- `FilterItem`: Represents a single filter option.
- `CardList`: Renders a list of beer cards.
- `Card`: Displays essential information about a beer in a card format.

## Code-Snippets

### getBeer is a function located in App.tsx, it makes a number of API calls to get over the 80 results per request and then filters those results into alphabetical order before providing that info down to other components.

- Asynchronous Function (async/await): The function is declared as an asynchronous function using the async keyword. This allows the use of await inside the function to wait for promises to resolve.

- Map and Promise.all: The endpoints array is processed using the map function to create an array of promises (responsePromises). Each promise represents an API fetch request and JSON parsing. Then, Promise.all is used to await all these promises, ensuring all the data is fetched asynchronously.

- Flattening Data: The data arrays from each API response are combined into a single array using the flat method. This gives a unified dataset containing all the beer information.

- Sorting: The combined data array is sorted alphabetically based on the beer names using the sort method and the localeCompare function.

- State Update: The sorted beer data is assigned to a setBeers function, presumably from a React state management system, to update the UI with the alphabetically sorted list of beers.

- Error Handling: The try...catch block is used to catch any errors that might occur during the data fetching and processing process. If an error occurs, it's logged to the console.

```typescript
const getBeer = async () => {
  try {
    const endpoints = [
      "https://api.punkapi.com/v2/beers?page=1&per_page=80",
      "https://api.punkapi.com/v2/beers?page=2&per_page=80",
      "https://api.punkapi.com/v2/beers?page=3&per_page=80",
      "https://api.punkapi.com/v2/beers?page=4&per_page=80",
    ];

    const responsePromises = endpoints.map(async (endpoint) => {
      const response = await fetch(endpoint);
      return response.json();
    });

    const responseDataArrays = await Promise.all(responsePromises);
    const combinedData = responseDataArrays.flat();

    const alphabetBeers = [...combinedData].sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    setBeers(alphabetBeers);
  } catch (error) {
    console.error("Error fetching and processing data:", error);
  }
};
```

### useEffect is a function that calls getBeer when the page loads as it has no dependency array. This prevents infinite looping of the getBeer function

```typescript
useEffect(() => {
  getBeer();
}, []);
```

### handleChecked is a function that we can pass down to our components that allows the application to manage our filters variable using the setFilters function that we pass into it.

```typescript
const handleChecked = (filter: FilterType, isChecked: boolean) => {
  const updatedFilters = filters.map((filter2) =>
    filter2.value === filter.value ? { ...filter2, isChecked } : filter2
  );
  setFilters(updatedFilters);
};
```

## Challenges

The project presented several challenges and learning opportunities:

- **Integration with API:** Fetching and integrating data from the Punk API required understanding API endpoints. Specifically the API that we used only allowed for 80 results per request so a workaround was needed to show all 300 beers on page at once.
- **React Router Implementation:** Implementing React Router to enable smooth navigation between the individual beer profiles and the home screen.
- **State Management:** Managing the state of filters and user interactions while ensuring consistent updates across components.
- **Responsive Design:** Designing the website to be visually appealing and functional on different screen sizes.
- **Testing with RTL:** Writing RTL tests to validate component behavior and interactions.

## Contributing

Contributions to the project are welcome! If you find issues or have suggestions for improvements, feel free to open a pull request or submit an issue on GitHub.

## About-Me

I am a Junior Software Developer on the \_nology program, a comprehensive course that has transformed me into a full-stack developer. With a passion for creating accessible and user-centric software, I am dedicated to crafting innovative solutions that address real-world challenges. Through continuous learning and hands-on experience, I am excited to contribute my skills to the tech industry and create meaningful impact.
