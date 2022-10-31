const Author = require("../models/Author");
const Player = require("../models/Player");

exports.getPlayers = async(req, res) => {

    const players = await Player.find({});
    res.send(players.reverse);
};

exports.getPlayers = async(req, res) => {
    const { sort } = req.query;
    let players;
    if(sort==="league"){
        players = await Player.aggregate([
            { 
                $group: { 
                    _id: "$league", 
                    items: { $push: "$$ROOT" }
                }
            }
        ]);
    }else{
        players = await Player.find({});
    }

    res.send(players);
};

exports.addPlayer = async(req, res) => {
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


exports.removePlayer = async(req, res) => {
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
