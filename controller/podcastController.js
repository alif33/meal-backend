const Podcast = require("../models/Podcast");
const slugify = require("slugify");

exports.getPodcasts = async(req, res) => {
    const videos = await Podcast.find();
    res.send(videos.reverse());
};

exports.addPodcast = async(req, res) => {
    const { title, description, audioUri } = req.body;
    const _podcast = new Podcast({
        title, 
        slug: slugify(`${title}`, "-"),
        description, 
        audioUri,
        image: "http://"
    });

    if(await _podcast.save()){
        res.send({
            success: true,
            message: 'Podcast added successfully.'
        })
    }
};


exports.removePodcast = async(req, res) => {
    const { _id }= req.query;
    if(_id){
        Podcast
        .find({ _id })
        .deleteOne(()=>{
            res.send({
                success: true,
                message: 'Podcast deleted successfully'
            });
        });
    }
};
