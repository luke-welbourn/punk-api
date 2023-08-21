import "./NavBar.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import { Beer } from "../../Data/Types";

type NavBarProps = {
  beers: Beer[];
};

const NavBar = () => {
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
