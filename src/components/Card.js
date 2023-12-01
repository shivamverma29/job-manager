import "../style/cards.css";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
function Cards(data) {
  // props = props[0];
  // console.log(data.data[0]["company"]);
  // data = data[0];
  data = data["product"];
  // console.log(data);
  // data = product[Data]
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
          <a href={data["url"]} target="_blank" className="apply-button">
            Apply now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cards;
