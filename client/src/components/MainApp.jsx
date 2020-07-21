import React from 'react';
import axios from 'axios';
import VideoList from './VideoList.jsx';
import HeaderBar from './HeaderBar.jsx';
import AddVideoForm from './AddVideoForm.jsx';
import App from './App.jsx';

class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      showingVideo: false,
      showingPlaylist: false,
      showingSearch: true,
      showingVideoList: false,
      playing: null,
      currentPlaylist: null,
      searchTerm: ''
    }
    this.showSearch = this.showSearch.bind(this);
    this.showVideo = this.showVideo.bind(this);
    this.selectVideo = this.selectVideo.bind(this);
    this.showVideoList = this.showVideoList.bind(this);
    this.showPlaylist = this.showPlaylist.bind(this);
    this.addVideo = this.addVideo.bind(this);
    this.updateStickies = this.updateStickies.bind(this);
    this.existingDuplicate = this.existingDuplicate.bind(this);
    this.updateNotes = this.updateNotes.bind(this);
    this.searchKeyTerm = this.searchKeyTerm.bind(this);
    this.deleteVideo = this.deleteVideo.bind(this);
    this.editVideoDetail = this.editVideoDetail.bind(this);
    this.retrieveVideos = this.retrieveVideos.bind(this);
  }

  showVideoList() {
    this.setState({
      showingVideo: false, 
      showingSearch: false, 
      showingPlaylist: false,
      showingVideoList: true,
      playing: null
    })
  }

  searchKeyTerm(term) {
    this.setState({
      searchTerm: term.toLowerCase(),
      showingVideo: false,
      showingPlaylist: false,
      showingSearch: false,
      showingVideoList: false,
      playing: null,
      currentPlaylist: null,
    });
  }

  showVideo() {
    this.setState({
      showingVideo: true, 
      showingSearch: false, 
      showingPlaylist: false,
      showingVideoList: false,
      searchTerm: ''
    })
  }

  selectVideo(selectedId) {
    this.showVideo();
    let videosListIndex;
    for (let i = 0; i < this.state.videos.length; i++) {
      if (this.state.videos[i].videoId === selectedId) {
        videosListIndex = i;
        break;
      }
    }
    this.setState({
      playing: videosListIndex,
      currentPlaylist: null,
      searchTerm: ''
    });
  }

  showPlaylist(playlistName) {
    this.setState({
      showingVideo: false, 
      showingSearch: false, 
      showingPlaylist: true,
      showingVideoList: false,
      currentPlaylist: playlistName,
      playing: null,
      searchTerm: ''
    })
  }

  showSearch() {
    this.setState({
      showingVideo: false, 
      showingSearch: true, 
      showingPlaylist: false,
      showingVideoList: false,
      playing: null,
      searchTerm: ''
    });
  }

  retrieveVideos() {
    axios.get('/videos')
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            videos: response.data
          });
          console.log(this.state.videos);
        } 
      })
      .catch((error) => {
        throw error;
      });
  }

  addVideo(url) {
    let trimmedId = url.substring(url.indexOf('=') + 1);
    if (this.existingDuplicate(trimmedId)) {
      alert('Video already saved');
    } else {
      axios.post('/video', {"url":'"' + trimmedId + '"'})
        .then((response) => {
          axios.get('/videos')
          .then((response) => {
            this.setState({
              videos: response.data
            });
            this.selectVideo(this.state.videos[this.state.videos.length - 1].videoId);
          })
          .catch((error) => {
            throw error;
          });         

        })
        .catch((error) => {
          console.log(error);
        }) 
    }
  }


  deleteVideo() {
    let currentVideo = this.state.videos[this.state.playing];
    axios.delete('/video', { data: {"videoId": currentVideo.videoId} } )
      .then((response) => {
        axios.get('/videos')
        .then((response) => {
          if (response.data.length > 0) {
            this.showVideoList();
          } else {
            this.showSearch();
          }
          this.setState({
            videos: response.data
          });
        })
        .catch((error) => {
          throw error;
        });
            })
      .catch((error) => {
        console.log(error);
      });
  }

  updateNotes(str) {
    let affectedVideo = this.state.videos[this.state.playing];
    affectedVideo.notes = str;
    let updatedVideosList = this.state.videos;
    this.setState({videos: updatedVideosList})
    axios.put('/videoNotes', {
      "videoId": affectedVideo.videoId, 
      "notes": str
    })
      .then((result) => {
        console.log('successfully updated!');
      })
      .catch((err) => {
        console.log(err)
      })
  }

  updateStickies(array) {
    let affectedVideo = this.state.videos[this.state.playing];
    affectedVideo.stickies = array;
    let updatedVideosList = this.state.videos;
    this.setState({videos: updatedVideosList});
    axios.put('/videoStickies', {
      "videoId": affectedVideo.videoId, 
      "stickies": array
    })
  }

  editVideoDetail(name, playlist) {
    let affectedVideo = this.state.videos[this.state.playing];
    affectedVideo.playlist = playlist;
    affectedVideo.name = name;
    let videoList = this.state.videos;
    this.setState({
      videos: videoList,
    });
    axios.put('/videoInfo', {
      "videoId": affectedVideo.videoId, 
      "playlist": playlist,
      "name": name
    })
  }

  existingDuplicate(url) {
    let result = false;
    for (let i = 0; i < this.state.videos.length; i++) {
      if (url === this.state.videos[i].videoId) {
        result = true;
      }
    }
    return result;
  }

  componentDidMount() {
    this.retrieveVideos();
  }

  render() {
    let currentPlaylists = [];
    for (let i = 0; i < this.state.videos.length; i++) {
      if (this.state.videos[i].playlist !== '' && currentPlaylists.indexOf(this.state.videos[i].playlist) < 0 ) {
        currentPlaylists.push(this.state.videos[i].playlist);
      }
    }      

    return (
      <div>
        <HeaderBar videos={this.state.videos} playlists={currentPlaylists} showSearch={this.showSearch} selectVideo={this.selectVideo} showVideoList={this.showVideoList} showPlaylist={this.showPlaylist} searchKeyTerm={this.searchKeyTerm}></HeaderBar>

        {this.state.showingVideoList && this.state.videos.length > 0 ? <VideoList videos={this.state.videos} selectVideo={this.selectVideo}/> : null} 

        {this.state.showingSearch ? <AddVideoForm add={this.addVideo}/> : null} 

        {this.state.showingPlaylist ? <VideoList videos={this.state.videos.filter((vid) => 
          vid.playlist === this.state.currentPlaylist
        )} selectVideo={this.selectVideo}/> : null} 

        {this.state.playing !== null ? <App video={this.state.videos[this.state.playing]} updateStickies={this.updateStickies} updateNotes={this.updateNotes} delete={this.deleteVideo} editvideodetail={this.editVideoDetail}/> : null} 

        {this.state.searchTerm !== '' ? <VideoList videos={this.state.videos.filter((vid) => 
          vid.notes.includes(this.state.searchTerm) || vid.name.toLowerCase().includes(this.state.searchTerm) || vid.videoId.includes(this.state.searchTerm) 
          || vid.stickies.some((sticky) => sticky.includes(this.state.searchTerm))
        )} selectVideo={this.selectVideo}/> : null}
      </div>
      );
  }
}

export default MainApp;

