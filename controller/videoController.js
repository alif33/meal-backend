const Watch = require("../models/Watch");
const slugify = require("slugify");

exports.getVideos = async(req, res) => {
    const videos = await Watch.find({});
    res.send(videos.reverse());
};

exports.addVideo = async(req, res) => {
  const { title, league, videoId, description } = req.body;

  const _watch = new Watch({
    title,
    slug: slugify(`${title}`, "-"),
    league,
    videoId,
    description
  });

  if (await _watch.save()) {
    res.send({
      success: true,
      message: "Video added in watch list",
    });
  } else {
    res.send({
      error: "Server side error",
    });
  }
};


exports.removeVideo = async(req, res) => {
    const { _id }= req.query;
    if(_id){
        Watch
        .find({ _id })
        .deleteOne(()=>{
            res.send({
                success: true,
                message: 'Video deleted successfully'
            });
        });
    }
};
