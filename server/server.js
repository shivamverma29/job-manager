require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const jobRoutes = require("./routes/JobsRoutes");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.use("/api/jobs", jobRoutes);
app.get("/products/:id", function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});
mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    app.listen(
      process.env.PORT,
      console.log("connected to db & listening on port ", process.env.PORT)
    );
  })
  .catch((err) => {
    console.log(err);
  });
app.post("/api/jobs", async (req, resp) => {
  try {
    const user = new Job(req.body);
    let result = await user.save();
    result = result.toObject();
    if (result) {
      delete result.password;
      resp.send(req.body);
      console.log(result);
    } else {
      console.log("User already register");
    }
  } catch (e) {
    resp.send("Something Went Wrong");
  }
});
