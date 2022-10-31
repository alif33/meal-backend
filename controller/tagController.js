const Tag = require("../models/Tag");

exports.getTags = async(req, res) => {
    const tags = await Tag.find();
    res.send(tags.reverse());
};

exports.addTag = async(req, res) => {
    const { tagName } = req.body;
    if(tagName){
        const tag = await Tag.findOne({tagName});
  
        if(tag){
          res.send({
                success: true,
                message: 'Tag already exists'
          })
        }else{
          const _tag = new Tag({
            tagName
          });
  
          if(await _tag.save()){
            res.send({
                success: true,
                message: 'Tag added successfully'
            })
          }
        }
    }
};


exports.removeTag = async(req, res) => {
    const { _id }= req.query;
    if(_id){
        Tag
        .find({ _id })
        .deleteOne(()=>{
            res.send({
                success: true,
                message: 'Tag deleted successfully'
            });
        });
    }
};
