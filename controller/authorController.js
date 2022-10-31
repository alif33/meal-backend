const Author = require("../models/Author");

exports.getAuthors = async(req, res) => {
    const authors = await Author.find();
    res.send(authors.reverse());
};

exports.addAuthor = async(req, res) => {
    const { name } = req.body;
    if(name){
        const author = await Author.findOne({name});
  
        if(author){
          res.send({
                success: true,
                message: 'Author already exists'
          })
        }else{
          const _author = new Author({
            name
          });
  
          if(await _author.save()){
            res.send({
                success: true,
                message: 'Author added successfully'
            })
          }
        }
    }
};


exports.removeAuthor = async(req, res) => {
    const { _id }= req.query;
    if(_id){
        Author
        .find({ _id })
        .deleteOne(()=>{
            res.send({
                success: true,
                message: 'Author deleted successfully'
            });
        });
    }
};




