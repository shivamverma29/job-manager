import NavbarUI from "./components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import Map from "./components/Map";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Offcampus from "./components/offcampus";
import CreateJob from "./components/CreateJob";
import AdminLogin from "./components/AdminLogin";
import AboutUs from "./components/AboutUs";

function App() {
  const [companies, setCompanies] = useState("");
  const [type, setType] = useState("Job");
  const [urls, setUrls] = useState([]);
  const [Data, setData] = useState([]);
  async function getData() {
    const res = await axios.get("http://localhost:4000/api/jobs/");
    setData(res.data);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      <NavbarUI />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/oncampus" element={<Map Data={Data} />} />
          <Route path="/offcampus" element={<Offcampus />} />
          <Route path="/add" element={<AdminLogin />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
