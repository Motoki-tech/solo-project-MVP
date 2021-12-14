const app = require("./app");

const port = 4000 || process.env.PORT;
app.listen(port, () => {
  console.log(`🎉 Server running at http://localhost:${port} !`);
});
