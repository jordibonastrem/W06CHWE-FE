import "./Card.scss";
import { object, string, number, bool, shape } from "prop-types";

function Card({
  robot: {
    name,
    imageSource,
    features: { speed, endurance, creationDate, isItCute },
  },
}) {
  return (
    <li className={"list-element col-4"}>
      <div className={"card"}>
        <img
          className={"image card-img-top"}
          src={imageSource}
          alt="Robot"
          width={"100%"}
          height={"200px"}
        />

        <div className={"card-body"}>
          <h2 className={"card-title"}>{name}</h2>
          <h3
            className={"card-subtitle mb-2 text-muted"}
          >{`created on ${creationDate}`}</h3>
          <p
            className={".card-text"}
          >{`This robot has a speed of ${speed}, endurance of ${endurance} and it's ${
            isItCute ? "very cute" : "kind of ugly"
          }.`}</p>
          <div className={"d-flex justify-content-around"}>
            <button className={"btn btn-primary"}>Edit</button>
            <button className={"btn btn-danger"}>Delete</button>
          </div>
        </div>
      </div>
    </li>
  );
}

Card.propTypes = {
  robot: shape({
    name: string.isRequired,
    imageSource: string.isRequired,
    features: shape({
      speed: number.isRequired,
      endurance: number.isRequired,
      creationDate: object.isRequired,
      isItCute: bool,
    }).isRequired,
  }).isRequired,
};

export default Card;
