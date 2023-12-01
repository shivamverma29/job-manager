import Card2 from "./Card-offcampus";
// {
/* <script async src="https://cse.google.com/cse.js?cx=828cbbff39a934e19">
</script>
<div class="gcse-search"></div>
AIzaSyDq7QjWQrREaTLNnUv4Qdo2HdsfjME92HU */
// }

const Results = ({ type, urls, companies }) => {
  const dataoff = [];
  companies = companies.split(",");
  for (let i = 0; i < companies.length; i++) {
    dataoff.push([companies[i], urls[i]]);
  }
  // dataoff.pop();
  // console.log(companies[1]);
  // console.log(urls[1]);
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
