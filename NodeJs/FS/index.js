const fs = require("fs")

//* DOSYA OKUMAK

fs.readFile("password.txt", "utf-8",(err,data)=>{ //*Callback fonksiyonu ile beraber çalışır
    if(err) console.log(err)
    console.log(data)
})

//* DOSYAYA YAZMAK
fs.writeFile("example.json",`{"name":"Musab", "age":6}`,"utf-8",(err)=>{
    if(err) console.log(err)
})

//* DOSYAYA VERİ EKLEMEK

fs.appendFile("example.txt","eski Txt","utf-8",(err)=>{
    if(err) console.log(err)
})

//*DOSYA SILMEK
fs.unlink("password.txt",(err)=>{
    if(err) console.log(err)
})

//* KLASOR OLUSTURMAK
fs.mkdir("newPage.txt",(err)=>{
    if(err) console.log(err)
})


//*KLASOR SILMEK
fs.rmdir("newPage.txt",(err)=>{
    if(err) cosnole.log(err)
})