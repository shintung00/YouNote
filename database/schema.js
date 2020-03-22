const mongoose = require('mongoose');

// Create a new xillow db and drop if it exists
mongoose.connect('mongodb://localhost/younote');

// Schema
const videoSchema = mongoose.Schema({
  name: String,
  notes: String,
  stickies: [String],
  playlist: '',
  videoId: String,
  videoTitle: String,
  videoDescription: String,
  videoThumbnail: String,
  channelTitle: String,
  channelId: String
});

// Model
const Video = mongoose.model('Video', videoSchema);

// Save helper function
const saveVideo = (individualVideo) => {
  let newVideo = Video({
    name: individualVideo.name,
    notes: individualVideo.notes,
    stickies: individualVideo.stickies,
    playlist: '',
    videoId: individualVideo.videoData.items[0].id.videoId,
    videoTitle: individualVideo.videoData.items[0].snippet.title,
    videoDescription: individualVideo.videoData.items[0].snippet.description,
    videoThumbnail: individualVideo.videoData.items[0].snippet.thumbnails.high.url,
    channelTitle: individualVideo.videoData.items[0].snippet.channelTitle,
    channelId: individualVideo.videoData.items[0].snippet.channelId
  });

  newVideo.save((err, success) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Video saved!');
    }
  });
};


// Retrieve helper function
const retrieve = (req, res) => {
  Video.find({}).exec((err, videos) => {
    if (err) {
      res.send(err);
    } else {
      res.send(videos);
    }
  });
};

const deleteVideo = (req, res) => {
  Video.deleteOne({"videoId": req.body.videoId}).exec((err) => {
    if (err) {
      res.send(err);
    } else {
      res.send('successfully deleted');
    }
  })
}

const editVideoStickies = (req, res) => {
  Video.updateOne({ videoId: req.body.videoId }, { $set: { stickies: req.body.stickies }}).exec((err) => {
    if (err) {
      res.send(err);
    } else {
      res.send('successfully updated');
    }
  })
}

const editVideoInfo = (req, res) => {
  Video.updateOne({ videoId: req.body.videoId }, { $set: { playlist: req.body.playlist, name: req.body.name }}).exec((err) => {
    if (err) {
      res.send(err);
    } else {
      res.send('successfully updated');
    }
  })
}

const editVideoNotes = (req, res) => {
  Video.updateOne({ videoId: req.body.videoId }, { $set: { notes: req.body.notes }}).exec((err) => {
    if (err) {
      res.send(err);
    } else {
      res.send('successfully updated');
    }
  })
}

module.exports = { retrieve, saveVideo, deleteVideo, editVideoStickies, editVideoInfo, editVideoNotes };
