// Import the express framework for our node server
const express = require('express');
// Import the path module from node to create absolute file paths for express static
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;
const morgan = require('morgan');
const schema = require('../database/schema.js');
const retrieve = schema.retrieve;
const deleteVideo = schema.deleteVideo;
const editVideoStickies = schema.editVideoStickies;
const editVideoInfo = schema.editVideoInfo;
const editVideoNotes = schema.editVideoNotes;
const addYoutubeVideo = require('../database/addYoutubeVideo.js');
const add = addYoutubeVideo.add;


app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));app.use(morgan('dev'));


app.get('/videos', retrieve);
app.post('/video', add);
app.delete('/video', deleteVideo);
app.put('/videoStickies', editVideoStickies);
app.put('/videoInfo', editVideoInfo);
app.put('/videoNotes', editVideoNotes);


app.listen(PORT, () => console.log('Listening on port: ' + PORT));