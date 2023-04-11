const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    res.status(200).send("Index Page")
})

const port = 3001;
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
