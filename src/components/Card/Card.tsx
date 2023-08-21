import "./Card.scss";

type CardProps = {
  name: string;
  description: string;
  abv: number;
  image: string;
};

const card = ({ name, description, abv, image }: CardProps) => {
  const shortenDescription = (value: string) => {
    return value.length < 190
      ? value
      : value.substring(0, value.lastIndexOf(".", 190)) + ".";
  };

  return (
    <div>
      <img src={image} alt={name} />
      <div>
        <h2>{name.split("-")[0]}</h2>
      </div>
      <span>ABV {abv}%</span>
      <p>{shortenDescription(description)}</p>
    </div>
  );
};

export default card;
