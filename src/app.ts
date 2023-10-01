import express, { NextFunction, Request, Response, urlencoded } from "express";
import * as mongoose from "mongoose";

import { configs } from "./configs";
import { ApiError } from "./errors";
import { carRouter, userRouter } from "./routers";

const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use("/users", userRouter);
app.use("/cars", carRouter);
app.use((err: ApiError, req: Request, res: Response, next: NextFunction) => {
  const status = err.status || 500;
  res.json(err.message).status(status);
});

app.listen(configs.PORT, async () => {
  await mongoose.connect(configs.DB_URL);
  console.log(
    `Server has successfully started on PORT ${configs.PORT}  🚀🚀🚀`,
  );
});
