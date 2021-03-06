import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import startupRoutes from "./routes/startups.js";
import userRoutes from "./routes/users.js";

const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/startups", startupRoutes);
app.use('/user',userRoutes);

const CONNECTION_URL =
  "mongodb+srv://sahilkc:Sahil%40314@launch-next.ey6ok.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Db connected on ${PORT}`));
  })
  .catch((error) => console.log(error.message));
