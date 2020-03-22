const schema = require('./schema.js');
const { saveVideo } = schema;
const axios = require('axios');
const youtubeAPI = require('../client/config/youtubeconfig.js');
const apikey = youtubeAPI.apikey;

const addYoutubeVideo = (req, res) => {
    axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${apikey}&maxResults=1&type=video&videoEmbeddable=true&q=${req.body.url}`)
    .then((response) => {
        let video = {
            name: '',
            notes: '',
            stickies: [],
            playlist: '',
            videoData: response.data
        };
        saveVideo(video);
        res.send('success');
    })
    .catch((error) => {
        console.log(error);
    })
}

// exampleArray.forEach((video) => save(video));

module.exports = {add: addYoutubeVideo};
