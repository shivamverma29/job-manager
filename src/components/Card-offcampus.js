import "../style/cards.css";

function Card2(dataoff) {
  dataoff = dataoff["item"];
  console.log(dataoff[0]);
  return (
    <div className="card-container">
      <h2 className="card-header">{dataoff[0]}</h2>
      <div className="card-content">
        <a href={dataoff[1]} target="_blank" className="apply-button">
          Apply now
        </a>
      </div>
    </div>
  );
}

export default Card2;
// const Card2 = () => {
//   return (
//     <div className="card">
//       <h2 className="title">Company name</h2>
//       <button className="link">visit</button>
//       <button className="like">save</button>
//     </div>
//   );
// };

// export default Card2;
