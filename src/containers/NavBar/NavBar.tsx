import "./NavBar.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import { FilterType } from "../../Data/Types";
import FiltersList from "../FiltersList/FiltersList";

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
      <div>
        {" "}
        <FiltersList filters={filters} handleChecked={handleChecked} />
      </div>
    </nav>
  );
};

export default NavBar;