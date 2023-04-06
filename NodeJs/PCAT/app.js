const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    res.send("Merhaba")
})


const port = 3001;
app.listen(port, () => {
  console.log(`PCAT server suncu port ${port} da baslatildi`);
});
