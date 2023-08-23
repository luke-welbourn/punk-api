import { useState, useEffect } from "react";
import "./App.scss";
import NavBar from "./containers/NavBar/NavBar";
import Main from "./containers/Main/Main";
import { Beer, FilterType } from "./Data/Types";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import BeerId from "./components/BeerId";

function App() {
  const [beers, setBeers] = useState<Beer[]>([]);

  const [searchTerm, setSearchTerm] = useState<string>("");

  const [filters, setFilters] = useState<FilterType[]>([
    { value: "abv", label: "High ABV (> 6.0%)", isChecked: false },
    { value: "classic", label: "Classic Range", isChecked: false },
    { value: "acidic", label: "Acidic (< 4)", isChecked: false },
  ]);

  const handleChange = (event: any) => setSearchTerm(event.target.value);

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

      // Sort the beers alphabetically
      const alphabetBeers = [...combinedData].sort((a, b) =>
        a.name.localeCompare(b.name)
      );

      setBeers(alphabetBeers);
    } catch (error) {
      console.error("Error fetching and processing data:", error);
    }
  };

  // use Effect just loads getBeer on load

  useEffect(() => {
    getBeer();
  }, []);

  // modify the filters array

  const handleChecked = (filter: FilterType, isChecked: boolean) => {
    const updatedFilters = filters.map((filter2) =>
      filter2.value === filter.value ? { ...filter2, isChecked } : filter2
    );
    setFilters(updatedFilters);
  };

  return (
    <BrowserRouter>
      <div className="app">
        <NavBar
          filters={filters}
          handleChange={handleChange}
          handleChecked={handleChecked}
        />
        <Routes>
          <Route
            path="/punk-api/"
            element={
              <Main beers={beers} searchTerm={searchTerm} filters={filters} />
            }
          />
          <Route path="/punk-api/:id" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
