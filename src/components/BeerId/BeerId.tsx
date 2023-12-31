import "./BeerId.scss";
import { useParams } from "react-router-dom";
import { Beer } from "../../Data/Types";

type BeerIdProps = {
  beer: Beer[];
};

const BeerId = ({ beer }: BeerIdProps) => {
  const checkSearchParam = useParams().id;
  const searchParam = checkSearchParam ? parseInt(checkSearchParam) : undefined;

  const beerParam = beer.find((bottle) => bottle.id === searchParam);

  if (beerParam === undefined)
    return (
      <p className="error-id">
        That bottle fell of the truck<br></br>
        <br></br>Unfortunately we can't find any drinks with that id. Probably
        Luke's fault
      </p>
    );

  return (
    <div className="beer-card">
      <img
        src={beerParam.image_url ?? "https://images.punkapi.com/v2/113.png"}
        alt={beerParam.name}
      />
      <h2>{beerParam.name}</h2>
      <p>{beerParam.description}</p>
      <div className="beer-details">
        <div>
          <strong>ABV:</strong> {beerParam.abv}%
        </div>
        <div>
          <strong>IBU:</strong> {beerParam.ibu}
        </div>
        <div>
          <strong>First Brewed:</strong> {beerParam.first_brewed}
        </div>
        <div>
          <strong>Food Pairing:</strong>
          <ul>
            {beerParam.food_pairing.map((food, index) => (
              <li key={index}>{food}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BeerId;
