import app from "./app";
import connectDB from "./config/db";

const PORT = process.env.PORT || 3000;

app.listen(PORT, async() => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  await connectDB()
});
