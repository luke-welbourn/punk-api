import "./Main.scss";
import { Beer } from "../../Data/Types";
import CardList from "../CardList/CardList";

type NavBarProps = {
  beers: Beer[];
  searchTerm: string;
  filters: any;
};

const Main = ({ beers, searchTerm, filters }: NavBarProps) => {
  return (
    <main>
      <CardList beers={beers} searchTerm={searchTerm} filters={filters} />
    </main>
  );
};

export default Main;
