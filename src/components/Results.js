import Card2 from "./Card-offcampus";

const Results = ({ type, urls, companies }) => {
  const dataoff = [];
  companies = companies.split(",");
  for (let i = 0; i < companies.length; i++) {
    dataoff.push([companies[i], urls[i]]);
  }
  console.log(dataoff);
  if (dataoff) {
    return (
      <div className="card-grid-container">
        {dataoff.map((item) => (
          <Card2 item={item} />
        ))}
      </div>
    );
  }
};

export default Results;
