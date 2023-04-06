const Koa =require("koa");

const app = new Koa();

app.use(ctx=>{
   if(ctx.path === "/"){
    ctx.type = "text/html"
    ctx.body = "<h1>INDEX PAGE</h1>"
   }else{
    ctx.type = "text/html"
    ctx.body = "<h1>404 Not Found</h1>"
   }
})

const port = 3001

app.listen(port);