import { useState } from "react";
// import { UseJobsContext } from "../hooks/UseJobsContext";
import "../style/create-job.css";
import Particle from "./Particle";

const CreateJob = () => {
  // const { dispatch } = UseJobsContext();
  const [company, setCompany] = useState("");
  const [url, setUrl] = useState("");
  const [applied, setApplied] = useState("");
  const [lastDate, setLastDate] = useState("");
  const [type, setType] = useState("");
  const [year, setYear] = useState("");
  const [batch, setBatch] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const job = { company, url, applied, lastDate, type, year, batch, role };
    e.preventDefault();
    let result = await fetch("http://localhost:4000/api/jobs", {
      method: "post",
      body: JSON.stringify(job),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    if (result) {
      alert("Data saved succesfully");
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a Job.</h3>
      <label htmlFor="company">Company: </label>
      <input
        type="text"
        id="company"
        className="form-input"
        onChange={(e) => setCompany(e.target.value)}
        value={company}
      />

      <label htmlFor="url">URL: </label>
      <input
        type="text"
        id="url"
        className="form-input"
        onChange={(e) => setUrl(e.target.value)}
        value={url}
      />

      <label htmlFor="lastDate">Last Date: </label>
      <input
        type="text"
        id="lastDate"
        className="form-input"
        onChange={(e) => setLastDate(e.target.value)}
        value={lastDate}
      />

      <label htmlFor="applied">Applied: </label>
      <input
        type="text"
        id="applied"
        className="form-input"
        onChange={(e) => setApplied(e.target.value)}
        value={applied}
      />

      <label htmlFor="type">Type: </label>
      <input
        type="text"
        id="type"
        className="form-input"
        onChange={(e) => setType(e.target.value)}
        value={type}
      />

      <label htmlFor="year">Year: </label>
      <input
        type="text"
        id="year"
        className="form-input"
        onChange={(e) => setYear(e.target.value)}
        value={year}
      />

      <label htmlFor="batch">Batch: </label>
      <input
        type="text"
        id="batch"
        className="form-input"
        onChange={(e) => setBatch(e.target.value)}
        value={batch}
      />

      <label htmlFor="role">Role:</label>
      <input
        type="text"
        id="role"
        className="form-input"
        onChange={(e) => setRole(e.target.value)}
        value={role}
      />

      <button className="form-button" type="submit">
        Add Job
      </button>

      {error && <div className="error">{error}</div>}
      <Particle />
    </form>
  );
};

export default CreateJob;
