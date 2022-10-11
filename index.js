// Dependenies

const express = require("express");
// *

// config - express
const app = express();
const port = process.env.PORT || 5000;

// endpoint - posts
app.get("/", (req, res) => {
  try {
    res.json({
      status: 200,
      msg: "Hello Home",
    });
  } catch (err) {
    res.json({
      status: 400,
      msg: "Error",
      err: err,
    });
  }
});

app.get("/posts", (req, res) => {
  let posts = [
    {
      caption: "Golden Gate Bridge",
      location: "San Francisco",
    },
    {
      caption: "London Eye",
      location: "London",
    },
  ];
  console.log(HI);
  res.send("posts");
});

// Listen
app.listen(port, (err) => {
  if (err) {
    res.json({
      status: 400,
      msg: "Error has occurred",
    });
  } else {
    console.log(`Sever is running on http://localhost:${port}`);
  }
});
