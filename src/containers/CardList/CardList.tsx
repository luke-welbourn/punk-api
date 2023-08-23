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

  // check to see if the results array is empty

  if (!results[0]) {
    return (
      <div className="no-results">
        <p>
          {" "}
          We don't make that?<br></br>
          <br></br> If you think we are missing a trick send your suggestions to{" "}
          <br></br>
          punk-api@brewery.delicious.co.uk
        </p>
      </div>
    );
  }

  return <div className="card-container">{results}</div>;
};

export default CardList;
