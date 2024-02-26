const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({
    title: "This is a test title",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
