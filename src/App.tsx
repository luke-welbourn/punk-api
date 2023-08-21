import { useState } from "react";
import "./App.scss";
import NavBar from "./containers/NavBar/NavBar";
import Main from "./containers/Main/Main";
import { Beer } from "./Data/Types";

function App() {
  const [beers, setBeers] = useState<Beer[]>([]);

  const getBeer = async () => {
    const response = await fetch("https://api.punkapi.com/v2/beers");

    const data = await response.json();

    setBeers(data);
  };

  return (
    <div className="app">
      <NavBar />
      <Main />
    </div>
  );
}

export default App;
