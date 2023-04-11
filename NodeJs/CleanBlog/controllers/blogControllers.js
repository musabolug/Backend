const Blog = require("../models/Blog");

exports.getAllBlogs = async (req, res) => {
  // const blogs = await Blog.find({}).sort("-creationDate");
  // res.render("index", {
  //   blogs,
  // });

  const page = req.query.page || 1;
  const blogsPerPage = 5;
  const totalBlogs = await Blog.find().countDocuments();
   const blogs = await Blog.find({})
  .sort("-creationDate")
  .skip((page-1) *blogsPerPage)
  .limit(blogsPerPage)
  res.render("index", {
    blogs: blogs,
    curent:page,
    pages: Math.ceil(totalBlogs / blogsPerPage)
  });
};

exports.getBlogById = async (req, res) => {
    const blog = await Blog.findById(req.params.id);
    res.render("post", {
      blog,
    });
  }

  exports.createBlog =  async (req, res) => {
    await Blog.create(req.body);
    res.redirect("/");
  }

  exports.UpdateBlog = async (req, res) => {
    const blog = await Blog.findOne({ _id: req.params.id });
    blog.title = req.body.title
    blog.subtitle = req.body.subtitle
    blog.description = req.body.description
    blog.save()
    res.redirect(`/blogs/${req.params.id}`);
  
  }
  exports.DeleteBlog =  async (req,res)=>{
    await Blog.findByIdAndRemove(req.params.id)
    res.redirect("/")
  }

  