const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const URI = "mongodb://127.0.0.1/baltic-honey";
app.use(cors());
mongoose
  .connect(URI)
  .then(() =>
    app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))
  )
  .catch((e) => console.log(e));
