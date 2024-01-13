const app = require("./app");
const port = process.env.PORT || 3001;
const connectToDatabase = require("./database/connection");

app.listen(port, async () => {
  await connectToDatabase();
  console.log(`API running on PORT ${port}`);
});
