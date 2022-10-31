const slugify = require("slugify");
const Team = require("../models/Team");

exports.getTeams = async(req, res) => {
    const teams = await Team.find({});
    res.send(teams.reverse());
};

exports.addTaem = async(req, res) => {
    const {             
        name,
        league,
        description 
    } = req.body;

    const _team = new Team({
        name,
        slug: slugify(`${name}`, "-"),
        league,
        description
    });
    if(await _team.save()){
        res.send({
            success: true,
            message: 'Team added successfully'
        })
    }
};


exports.removeTeam = async(req, res) => {
    const { _id }= req.query;
    if(_id){
        Team
        .find({ _id })
        .deleteOne(()=>{
            res.send({
                success: true,
                message: 'Team deleted successfully'
            });
        });
    }
};
