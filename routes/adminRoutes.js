const router = require('express').Router();
const { signup, signin } = require('../controller/admin/auth');

const { 
    getAuthors, 
    addAuthor, 
    removeAuthor 
} = require('../controller/authorController');

const { 
    getTags, 
    addTag, 
    removeTag 
} = require('../controller/tagController');

const { 
    getPlayers, 
    addPlayer, 
    removePlayer 
} = require('../controller/playerController');

const { 
    getTeams, 
    addTaem, 
    removeTeam 
} = require('../controller/teamController');

const { 
    getPosts, 
    addPost, 
    removePost 
} = require('../controller/postController');

const { 
    getPodcasts, 
    addPodcast, 
    removePodcast 
} = require('../controller/podcastController');

const { 
    getVideos, 
    addVideo, 
    removeVideo 
} = require('../controller/videoController');
const { isAuthenticate } = require('../middlewire/common');

router.post('/admin/signup', signup);
router.post('/admin/signin', signin);

router.get('/authors', getAuthors);
router.post('/admin/author', isAuthenticate, addAuthor);
router.delete('/admin/author', isAuthenticate, removeAuthor);

router.get('/tags', getTags);
router.post('/admin/tag', isAuthenticate, addTag);
router.delete('/admin/tag', isAuthenticate, removeTag);

router.get('/players', getPlayers);
// router.get('/players', getPlayers);
router.post('/admin/player', isAuthenticate, addPlayer);
router.delete('/admin/player', isAuthenticate, removePlayer);

router.get('/teams', getTeams);
router.post('/admin/team', isAuthenticate, addTaem);
router.delete('/admin/team', isAuthenticate, removeTeam);

router.get('/podcasts', getPodcasts);
router.post('/admin/podcast', isAuthenticate, addPodcast);
router.delete('/admin/podcast', isAuthenticate, removePodcast);

router.get('/videos', getVideos);
router.post('/admin/video', isAuthenticate, addVideo);
router.delete('/admin/video', isAuthenticate, removeVideo);

router.get('/posts', getPosts);
router.post('/admin/post', isAuthenticate, addPost);
router.delete('/admin/post', isAuthenticate, removePost);


module.exports = router;