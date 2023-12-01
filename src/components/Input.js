import getUrls from "./fetch";
import "../style/offcampus-form.css";
import Particle from "./Particle";

function Input({
  companies,
  setCompanies,
  setType,
  setShowResult,
  type,
  setUrls,
}) {
  const handleChangeCompanies = (e) => {
    setCompanies(e.target.value);
  };
  const handleChangeType = (e) => {
    setType(e.target.value);
  };
  const handleShowResult = (e) => {
    e.preventDefault();
    getUrls(companies, setUrls, type);
    setShowResult(true);
  };

  return (
    <div className="custom-form">
      <div className="form-group">
        <label htmlFor="companyNames">Company names</label>
        <input
          type="text"
          id="companyNames"
          placeholder="Enter companies"
          onChange={handleChangeCompanies}
        />
        <small className="text-muted">Separate the companies with commas</small>
      </div>
      <div className="form-group">
        <select id="typeSelect" onChange={handleChangeType}>
          <option value="Job">Open this select menu</option>
          <option value="Job">Job</option>
          <option value="Internship">Internship</option>
        </select>
      </div>
      <button
        type="button"
        className="submit-button"
        onClick={handleShowResult}
      >
        Submit
      </button>
      <Particle />
    </div>
  );
}

export default Input;
