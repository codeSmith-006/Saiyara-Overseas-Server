import "dotenv/config"
import app from "./app.js";
import connectDB from "./config/db.js";

const PORT = process.env.PORT || 5000;

connectDB();

app.get("/", (_, res) => {
  res.send("Saiyara Overseas API running");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});