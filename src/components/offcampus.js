import Input from "./Input";
import { useState } from "react";
import Results from "./Results";
import Card2 from "./Card-offcampus";
import "../index.css";

const Offcampus = () => {
  const [companies, setCompanies] = useState("");
  const [type, setType] = useState("Job");
  const [showResult, setShowResult] = useState(false);
  const [urls, setUrls] = useState([]);
  return (
    <div className="App">
      <Input
        setCompanies={setCompanies}
        setType={setType}
        setShowResult={setShowResult}
        companies={companies}
        type={type}
        setUrls={setUrls}
      />
      {showResult && <Results companies={companies} type={type} urls={urls} />}
      {/* <Card2 /> */}
    </div>
  );
};
export default Offcampus;
