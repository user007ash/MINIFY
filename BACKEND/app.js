import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/mongo.config.js";
import shortUrl from "./src/routes/shortUrl.route.js";
import { redirectFromShortUrl } from "./src/controller/shortUrl.controller.js";
import { errorHandler } from "./src/utils/errorHandler.js";
import cors from "cors";

dotenv.config({ quiet: true });
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/create", shortUrl);
app.get("/:id", redirectFromShortUrl);

app.use(errorHandler);

connectDB()
  .then(() => {
    app.listen(5000, () => {
      console.log("port running on 5000");
    });
  })
  .catch((error) => {
    console.error("Error while connecting:" + error);
  });
