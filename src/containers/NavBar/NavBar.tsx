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
  const backToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <nav>
      <div>
        <SearchBox placeholder="Search..." handleChange={handleChange} />
      </div>
      <div className="filter-list">
        <FiltersList filters={filters} handleChecked={handleChecked} />
      </div>
      <div className="home">
        <Link to={"/punk-api/"}>Back to Search</Link>
      </div>
      <div>
        <a href="#" className="back-to-top-link" onClick={backToTop}>
          Back to Top
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
