import "../style/cards.css";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
function Cards(data) {
  data = data["product"];
  return (
    <div className="card-container">
      <div>
        <h2 className="card-header">{data["company"]}</h2>
        <div className="card-content">
          <h6 className="card-title">
            {data["role"]}, {data["type"]} {data["year"]}
          </h6>
          <p className="card-text">
            {formatDistanceToNow(new Date(data["lastDate"]), {
              addSuffix: "true",
            })}
          </p>
          <a
            href={"https://" + data["url"]}
            target="_blank"
            className="apply-button"
          >
            Apply now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cards;
