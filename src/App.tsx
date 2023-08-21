import { useState, FormEvent } from "react";
import "./App.scss";
import NavBar from "./containers/NavBar/NavBar";
import Main from "./containers/Main/Main";
import { Beer } from "./Data/Types";

function App() {
  const [beers, setBeers] = useState<Beer[]>([]);

  const [searchTerm, setSearchTerm] = useState<string>("");

  const [filters, setFilters] = useState([
    { value: "abv", label: "High ABV (> 6.0%)", isChecked: false },
    { value: "classic", label: "Classic Range", isChecked: false },
    { value: "acidic", label: "Acidic (< 4)", isChecked: false },
  ]);

  const handleChange = (event: any) => setSearchTerm(event.target.value);

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const cleanInput = event.currentTarget.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  const getBeer = async () => {
    const response = await fetch("https://api.punkapi.com/v2/beers");

    const data = await response.json();

    setBeers(data);

    data.catch((error: string) => console.log(error));
  };

  getBeer();

  const handleChecked = (filter: any, isChecked: any) => {
    const filtersCopy = Object.assign([], filters);
    const index = filters.findIndex((f) => f.value === filter.value);
    filtersCopy[index].isChecked = isChecked;
    setFilters(filtersCopy);
  };

  return (
    <div className="app">
      <NavBar />
      <Main />
    </div>
  );
}

export default App;
