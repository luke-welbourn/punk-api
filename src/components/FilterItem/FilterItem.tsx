import { useState } from "react";
import "./FilterItem.scss";
import { FilterType } from "../../Data/Types";

type FilterItemProps = {
  filter: FilterType;
  handleChecked: (filter: FilterType, isChecked: boolean) => void;
};

const FilterItem = ({ filter, handleChecked }: FilterItemProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    handleChecked(filter, !isChecked);
    setIsChecked(!isChecked);
  };

  const { label, value } = filter;

  return (
    <div>
      <label>{label}</label>
      <input type="checkbox" value={value} onClick={toggleCheckbox} />
    </div>
  );
};

export default FilterItem;
