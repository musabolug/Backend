const express = require("express")

const app = express()

app.get("/",(req,res)=>{
    res.send("Merhaba")
})

const port = 3002
app.listen(port,()=>{
    console.log(`CleanBlog sever port ${port} da baslatildi`)
})