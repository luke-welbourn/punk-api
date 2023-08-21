import "./Card.scss";

type CardProps = {
  beerProfile: beerProfile;
};

type beerProfile = {
  name: string;
  description: string;
  abv: number;
  image_url: string;
};

const Card = ({ beerProfile }: CardProps) => {
  const { name, description, abv, image_url } = beerProfile;
  const shortenDescription = (value: string) => {
    return value.length < 190
      ? value
      : value.substring(0, value.lastIndexOf(".", 190)) + ".";
  };

  return (
    <div>
      <img src={image_url} alt={name} />
      <div>
        <h2>{name.split("-")[0]}</h2>
      </div>
      <span>ABV {abv}%</span>
      <p>{shortenDescription(description)}</p>
    </div>
  );
};

export default Card;
