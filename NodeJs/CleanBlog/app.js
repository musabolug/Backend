const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
//   res.send("CleanBlog a hosgeldin");
  res.sendFile(path.resolve(__dirname, "temp/index.html"));
});

const port = 3001;
app.listen(port, () => {
  console.log(`CleanBlog sever port ${port} da baslatildi`);
});
