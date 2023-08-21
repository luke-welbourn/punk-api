import "./FiltersList.scss";
import FilterItem from "../../components/FilterItem/FilterItem";
import { FilterType } from "../../Data/Types";

type FiltersListProps = {
  filters: FilterType[];
  handleChecked: (filter: FilterType, isChecked: boolean) => void;
};

const FiltersList = ({ filters, handleChecked }: FiltersListProps) => {
  const getFilter = (filter: FilterType, index: number) => (
    <div key={index}>
      <FilterItem filter={filter} handleChecked={handleChecked} />
    </div>
  );

  return (
    <div>
      <h4>Filters</h4>
      {filters.map(getFilter)}
    </div>
  );
};

export default FiltersList;
