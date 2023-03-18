const app = require("./app");
const PORT = 3000;

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  } catch (error) {
    // todo - normal error type
    console.log("Server or DB error: " + error);
    process.exit();
  }
};

start();
