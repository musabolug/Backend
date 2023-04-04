let blogs= [
    {name:"Blog 1" , author:"Author 1"},
    {name:"Blog 2" , author:"Author 2"},
    {name:"Blog 3" , author:"Author 3"}
]


function listBlogs (){
    blogs.map((obj)=> console.log(obj.name))
}

function addBlogs (obj){
 const promise1= new Promise((resolve,reject)=>{
    if(obj){
        resolve(blogs.push(obj))
    }else{
        reject("Blog eklenemedi")
    }

}) 
return promise1
};

async function showBlogs(){
    try{
        // await addBlogs( {name:"Blog 4" , author:"Author 3"})
        await addBlogs()
        listBlogs()
    }
    catch(error){
        console.log(error)
    }
}

showBlogs()
