import "./CardList.scss";
import { Beer } from "../../Data/Types";
import Card from "../../components/Card/Card";
import { FilterType } from "../../Data/Types";

type CardListProps = {
  beers: Beer[];
  searchTerm: string;
  filters: FilterType[];
};

const CardList = ({ beers, searchTerm, filters }: CardListProps) => {
  const checked = filters
    .filter((condition: any) => condition.isChecked)
    .map((condition: any) => condition.value);

  const results = beers
    .filter((beer) =>
      beer.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((beer) => (checked.includes("abv") ? beer.abv > 6 : beer))
    .filter((beer) =>
      checked.includes("classic")
        ? parseInt(beer.first_brewed.slice(-4)) < 2010
        : true
    )
    .filter((beer) => (checked.includes("acidic") ? beer.ph < 4 : beer))
    .map((beer) => <Card key={beer.id} beerProfile={beer} />);

  return <div className="card-container">{results}</div>;
};

// const NothingThere = () => {
// };

export default CardList;
