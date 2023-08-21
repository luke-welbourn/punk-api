import "./SearchBox.scss";

type SearchBoxProps = {
  placeholder: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({ placeholder, handleChange }: SearchBoxProps) => {
  return (
    <div>
      <input type="text" placeholder={placeholder} onChange={handleChange} />
    </div>
  );
};

export default SearchBox;
