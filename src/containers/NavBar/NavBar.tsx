import "./NavBar.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import { FilterType } from "../../Data/Types";
import FiltersList from "../FiltersList/FiltersList";
import { Link } from "react-router-dom";

type NavBarProps = {
  filters: FilterType[];
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChecked: (filter: FilterType, isChecked: boolean) => void;
};

const NavBar = ({ filters, handleChange, handleChecked }: NavBarProps) => {
  return (
    <nav>
      <div>
        <SearchBox placeholder="Search..." handleChange={handleChange} />
      </div>
      <div className="filter-list">
        <FiltersList filters={filters} handleChecked={handleChecked} />
      </div>
      <div className="home">
        <Link to={"/punk-api/"}>Back to Searching</Link>
      </div>
    </nav>
  );
};

export default NavBar;
