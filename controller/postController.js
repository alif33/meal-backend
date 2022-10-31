const Post = require("../models/Post");
const Tag = require("../models/Tag");

exports.getPosts = async(req, res) => {
    const posts = await Post.aggregate([
        { 
            $group: { 
                _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt"} }, 
                items: { $push: "$$ROOT" }
            }
        }
    ]);
    res.send(posts);
};

exports.addPost = async(req, res) => {
    const { title, league, playersName, _author, description, tags } = req.body;
    try {
    //   const streamUpload = (req) => {
    //     return new Promise((resolve, reject) => {
    //       const stream = cloudinary.uploader.upload_stream((error, result) => {
    //         if (result) {
    //           resolve(result);
    //         } else {
    //           reject(error);
    //         }
    //       });
    //       streamifier.createReadStream(req.file.buffer).pipe(stream);
    //     });
    //   };
    //   const { url } = await streamUpload(req);
  
    //   if (url) {
    //     await db.connect();
        const post = new Post({
          title,
          slug: slugify(title, "-"),
          description,
          league,
          image: "https://",
          _author,
          playersName,
          tags
        });
  
        if (await post.save()) {
        //   await db.disconnect();
          res.send({
            success: true,
            message: "Post added successfully",
          });
        }
    //   }
    } catch (err) {
      res.send({ error: "Sever side error" });
      
    }
};


exports.removePost = async(req, res) => {
    const { _id }= req.query;
    if(_id){
        Post
        .find({ _id })
        .deleteOne(()=>{
            res.send({
                success: true,
                message: 'Post deleted successfully'
            });
        });
    }
};
