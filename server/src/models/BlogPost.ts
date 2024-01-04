import mongoose from "mongoose";

const Schema= mongoose.Schema;
//const ObjectId = mongoose.Types.ObjectId;

const BlogPostSchema = new Schema({
    title: String,
    coverimg: String,
    body: String,
    date: Date,
    author: String,
  });

  const BlogPost = mongoose.model("BlogPost", BlogPostSchema);

  export default BlogPost;