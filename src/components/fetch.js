function getUrls(companies, setUrls, type) {
  companies = companies.split(",");
  for (let i = 0; i < companies.length; i++) {
    getDataOff(i, setUrls, companies, type);
    // console.log(companies[0]);
  }
}
function getDataOff(n, setUrls, companies, type) {
  fetch(
    "https://www.googleapis.com/customsearch/v1?key=AIzaSyDq7QjWQrREaTLNnUv4Qdo2HdsfjME92HU&cx=828cbbff39a934e19&q=" +
      companies[n] +
      type +
      "india 2024"
  )
    .then((res) => res.json())
    .then((data) =>
      setUrls((prevUrls) => {
        return [...prevUrls, data["items"][0]["link"]];
      })
    )
    .catch((err) => console.log(err));
}

export default getUrls;
