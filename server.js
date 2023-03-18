const app = require("./app");
const PORT = 3000;
const dbConnect = require("./db/connection");

const start = async () => {
  try {
    await dbConnect();
    console.log("Database connection successful");

    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  } catch (error) {
    console.log("Server or DB error: " + error);
    process.exit();
  }
};

start();
