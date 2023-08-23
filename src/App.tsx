import { useState } from "react";
import "./App.scss";
import NavBar from "./containers/NavBar/NavBar";
import Main from "./containers/Main/Main";
import { Beer, FilterType } from "./Data/Types";

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
    const response = await fetch(
      "https://api.punkapi.com/v2/beers?page=1&per_page=80"
    );

    const data = await response.json();

    setBeers(data);
  };

  getBeer();

  const handleChecked = (filter: FilterType, isChecked: boolean) => {
    const updatedFilters = filters.map((f) =>
      f.value === filter.value ? { ...f, isChecked } : f
    );
    setFilters(updatedFilters);
  };

  return (
    <div className="app">
      <NavBar
        filters={filters}
        handleChange={handleChange}
        handleChecked={handleChecked}
      />
      <Main beers={beers} searchTerm={searchTerm} filters={filters} />
    </div>
  );
}

export default App;
