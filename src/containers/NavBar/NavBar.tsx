import "./NavBar.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import { useState, FormEvent } from "react";

// type NavBarProps = {
//   beers: Beer[];
// };

const NavBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const cleanInput = event.currentTarget.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  // const filteredAlbums = beers.filter((beer) => beer.name.includes(searchTerm));

  return (
    <nav>
      <div>
        <SearchBox
          label="Beers"
          handleInput={handleInput}
          searchTerm={searchTerm}
        />
      </div>
      <div>
        <p>High ABV 6.0%</p>
        <p>Classic Range</p>
        <p>Acidic ph above 4</p>
      </div>
    </nav>
  );
};

export default NavBar;
