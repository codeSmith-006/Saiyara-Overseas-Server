import express from "express";
import cors from "cors";
import routes from "./routes/ index.js";
import errorMiddleware from "./middlewares/error.middleware.js";

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.use("/api", routes);

app.use(errorMiddleware);

app.get("/", (_, res) => {
  res.send("Saiyara Overseas API running");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

export default app;
