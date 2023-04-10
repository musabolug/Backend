



//* Create Blog
//? const blog = new Blog({
//?   title: "Blog Title 2 ",
//?   description: "Blog description 2",
//? });

//? blog.save().then(result=>{
//?     console.log("blog added")
//?     mongoose.connection.close()
//? })

//* Read Blog
//? async function readData() {
//?      try {
//?          const data = await Blog.find({});
//   ?        console.log(data); 
//?         } catch (err) { 
//?             console.error(err);
//?          }}
//? readData()

//*Update Blog
// ?const id= "642fd45e0114923667070d53"
// ?async function updateData(){
// ?    try{
//?         const data = await Blog.findByIdAndUpdate( id,{
// ?            title:"Blog Title 3 ",
// ?            description:"Blog desc 3 Updated"
// ?        },)
// ?        const updatedData = await Blog.findById(id)
//?         console.log(updatedData)
//?     }catch(err){
//?         console.log(err)
//?     }
//?     mongoose.connection.close()
//? }
//? updateData()

//* Delete blog
/*const id= "642fd6295524d7b0aa233a2f"
async function DeleteData(){
    try{
        await Blog.findByIdAndDelete(id)
        console.log("Blog deleted")
    }catch(err){
        console.log(err)
    }
    mongoose.connection.close()
}
DeleteData()*/