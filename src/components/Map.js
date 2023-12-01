import Cards from "./Card";
import "../style/cards.css";
import Particle from "./Particle";
const Map = (data) => {
  data = data["Data"];
  // console.log(data);
  return (
    <div>
      <h1>OnCampus Jobs</h1>
      <div className="card-grid-container">
        {data.map((product) => (
          <Cards product={product} />
        ))}
      </div>
      <Particle />
    </div>
  );
};

export default Map;
